# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/35d72d2e-6e25-40e5-9b0c-c0d1a7c1b727

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/35d72d2e-6e25-40e5-9b0c-c0d1a7c1b727) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to S3 (sprint.49x.ai)

This project is configured to deploy to AWS S3 for the subdomain `sprint.49x.ai`.

**Prerequisites:**
- AWS CLI installed and configured (`aws configure`)
- Node.js and npm installed

**Deployment steps:**

1. Install dependencies (if not already done):
   ```sh
   npm install
   ```

2. Deploy to S3:
   ```sh
   npm run deploy
   ```
   
   Or run the script directly:
   ```sh
   ./deploy.sh
   ```

The script will:
- Build the project
- Create the S3 bucket `sprint.49x.ai` (if it doesn't exist)
- Configure static website hosting
- Upload all files to S3

**DNS Configuration:**

After deployment, configure your DNS:
1. Go to your DNS provider (where 49x.ai is hosted)
2. Create a CNAME record:
   - Name: `sprint`
   - Value: `sprint.49x.ai.s3-website.eu-central-1.amazonaws.com`
3. Wait for DNS propagation (can take a few minutes to hours)

Your site will be available at: **http://sprint.49x.ai**

**Note:** For HTTPS support, consider using CloudFront in front of the S3 bucket.
