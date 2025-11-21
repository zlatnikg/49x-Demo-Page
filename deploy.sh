#!/bin/bash

# Deployment script for intro.49x.ai
# This script builds the project and deploys it to S3

set -e  # Exit on error

# Configuration
BUCKET_NAME="intro.49x.ai"
REGION="eu-central-1"
DIST_DIR="dist"

echo "🚀 Starting deployment to intro.49x.ai..."

# Step 1: Build the project
echo "📦 Building project..."
npm run build

if [ ! -d "$DIST_DIR" ]; then
    echo "❌ Error: Build directory '$DIST_DIR' not found!"
    exit 1
fi

echo "✅ Build completed successfully"

# Step 2: Check if bucket exists, create if not
echo "🔍 Checking S3 bucket..."
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
    echo "📦 Creating S3 bucket: $BUCKET_NAME"
    aws s3 mb "s3://$BUCKET_NAME" --region "$REGION"
    
    # Enable static website hosting
    echo "🌐 Configuring static website hosting..."
    aws s3 website "s3://$BUCKET_NAME" \
        --index-document index.html \
        --error-document index.html \
        --region "$REGION"
    
    # Disable Block Public Access settings FIRST (needed before setting bucket policy)
    echo "🔓 Disabling Block Public Access settings..."
    aws s3api put-public-access-block \
        --bucket "$BUCKET_NAME" \
        --public-access-block-configuration \
        "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
    
    # Set bucket policy for public read access
    echo "🔓 Setting bucket policy for public access..."
    cat > /tmp/bucket-policy.json <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF
    aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy file:///tmp/bucket-policy.json
    rm /tmp/bucket-policy.json
    
    echo "✅ Bucket created and configured"
else
    echo "✅ Bucket already exists"
    # Ensure Block Public Access is disabled and bucket policy is set (in case bucket was created manually)
    echo "🔓 Ensuring Block Public Access settings are disabled..."
    aws s3api put-public-access-block \
        --bucket "$BUCKET_NAME" \
        --public-access-block-configuration \
        "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" 2>/dev/null || true
    
    echo "🔓 Ensuring bucket policy is set..."
    cat > /tmp/bucket-policy.json <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF
    aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy file:///tmp/bucket-policy.json 2>/dev/null || true
    rm /tmp/bucket-policy.json
    
    # Ensure static website hosting is enabled
    echo "🌐 Ensuring static website hosting is configured..."
    aws s3 website "s3://$BUCKET_NAME" \
        --index-document index.html \
        --error-document index.html \
        --region "$REGION" 2>/dev/null || true
fi

# Step 3: Upload files to S3
echo "📤 Uploading files to S3..."

# Upload static assets with long cache
aws s3 sync "$DIST_DIR" "s3://$BUCKET_NAME" \
    --delete \
    --region "$REGION" \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "*.html" \
    --exclude "*.json" \
    --exclude "*.xml" \
    --exclude "*.txt"

# Upload HTML files with no cache
aws s3 sync "$DIST_DIR" "s3://$BUCKET_NAME" \
    --delete \
    --region "$REGION" \
    --cache-control "public, max-age=0, must-revalidate" \
    --include "*.html"

# Upload JSON and other files
aws s3 sync "$DIST_DIR" "s3://$BUCKET_NAME" \
    --delete \
    --region "$REGION" \
    --cache-control "public, max-age=3600" \
    --include "*.json" \
    --include "*.xml" \
    --include "*.txt"

# Ensure index.html is properly set
aws s3 cp "$DIST_DIR/index.html" "s3://$BUCKET_NAME/index.html" \
    --content-type "text/html; charset=utf-8" \
    --cache-control "public, max-age=0, must-revalidate" \
    --region "$REGION"

echo "✅ Files uploaded successfully"

# Step 4: Display website information
echo ""
echo "✅ Deployment completed successfully!"
echo ""
echo "🌐 Website endpoint:"
echo "   http://$BUCKET_NAME.s3-website.$REGION.amazonaws.com"
echo ""
echo "📝 Next steps for DNS configuration:"
echo "   1. Go to your DNS provider (where 49x.ai is hosted)"
echo "   2. Create a CNAME record:"
echo "      Name: intro"
echo "      Value: $BUCKET_NAME.s3-website.$REGION.amazonaws.com"
echo "   3. Wait for DNS propagation (can take a few minutes to hours)"
echo ""
echo "   Or use Route 53/CloudFront for HTTPS support and better performance"
echo ""
echo "🌐 Your site will be available at: http://intro.49x.ai"
echo "   (after DNS propagation)"
