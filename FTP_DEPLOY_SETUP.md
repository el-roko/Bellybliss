# FTP Deployment Setup Guide for cPanel

This guide explains how to set up your GitHub repository to deploy the React app to cPanel using FTP.

## Prerequisites

1. A **cPanel** hosting account (e.g., InfinityFree, Namecheap, Hostinger, etc.)
2. Your React app in a GitHub repository

## Step 1: Get Your cPanel FTP Credentials

1. Log into your **cPanel** dashboard.
2. Look for the **FTP Accounts** section (usually under "Files").
3. Create a new FTP account **or** use an existing one.
4. Note down these details:
   - **FTP Server** – Usually your domain name (e.g., `ftp.yourdomain.com` or `yourdomain.com`) or the server IP
   - **FTP Username** – The full FTP username (often includes your cPanel username prefix)
   - **FTP Password** – The password for the FTP account
   - **Server Directory** – The directory on the server where your website files should go (e.g., `/public_html`, `/htdocs`, `/home/username/domains/yourdomain.com/public_html`)

## Step 2: Add Secrets to Your GitHub Repository

1. Go to your GitHub repository: `https://github.com/your-username/your-repo`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following four secrets:

| Secret Name | Value |
|---|---|
| `FTP_SERVER` | Your FTP server address (e.g., `ftp.yourdomain.com` or an IP) |
| `FTP_USERNAME` | Your full FTP username |
| `FTP_PASSWORD` | Your FTP password |
| `FTP_SERVER_DIR` | The server directory to deploy to (e.g., `/public_html`) |

## Step 3: Trigger the Deployment

The workflow is configured to trigger automatically when you push to the `main`, `master`, or `test` branches.

You can also trigger it manually:

1. Go to your GitHub repository
2. Click **Actions** → **Deploy React App to cPanel via FTP**
3. Click **Run workflow** → **Run workflow**

## Workflow Explanation

The workflow does the following:

1. **Checkout** – Pulls your repository code
2. **Setup Node.js** – Installs Node.js v20
3. **Install dependencies** – Runs `npm ci` to install project dependencies
4. **Build project** – Runs `npm run build` which outputs the production build to the `dist/` folder
5. **Deploy via FTP** – Uploads the contents of `dist/` to your cPanel server directory, cleaning up any old files first

## ⚠️ Important Notes

- **dangerous-clean-slate: true** – This clears the server directory before uploading. If you have other files on the server (e.g., a WordPress installation), disable this option by setting it to `false`.
- The `dist/` folder is built by Vite and contains the production-ready static files.
- If your cPanel account uses a subdirectory (e.g., `public_html/reactapp`), set `FTP_SERVER_DIR` accordingly.
- For **InfinityFree**, the server directory is typically `/htdocs`.

## Troubleshooting

| Issue | Solution |
|---|---|
| `FTP connection refused` | Check your FTP server address. Some hosts use `ftpupper.yourdomain.com` instead of `ftp.yourdomain.com` |
| `Authentication failed` | Double-check your FTP username and password. Some hosts require the **full email** as username |
| `Permission denied` | The FTP user may not have write permissions to the target directory. Verify in cPanel |
| `No files uploaded` | Ensure your build succeeded and the `dist/` folder exists |

## Security

- FTP credentials are stored as **GitHub Secrets** and are never exposed in the workflow files.
- Consider using **FTPS** (FTP over SSL) if your hosting provider supports it. Some providers require SFTP instead.