# Netlify Deployment Guide

This guide will help you deploy your News Display System to Netlify.

## Prerequisites

- A GitHub account
- A Netlify account (free at [netlify.com](https://netlify.com))

## Step-by-Step Deployment

### 1. Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account

### 2. Select Repository

1. Find and select the `Am0lShah/rasp2` repository
2. Click "Deploy site"

### 3. Configure Build Settings

The `netlify.toml` file in this repository already configures the build settings:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
```

Netlify will automatically:
- Install dependencies with `npm install`
- Build the project with `npm run build`
- Deploy the contents of the `dist` folder

### 4. Custom Domain (Optional)

1. Go to your site's dashboard in Netlify
2. Click "Domain settings"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Once connected, Netlify will automatically:
- Deploy when you push to the `master` branch
- Create preview deployments for pull requests
- Show deployment status in your GitHub repository

## Environment Variables

If you need to add environment variables:

1. Go to your site's dashboard in Netlify
2. Navigate to "Site settings" > "Environment variables"
3. Add any required variables

## Troubleshooting

### Build Failures

If the build fails:

1. Check the build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify the build command works locally: `npm run build`

### Common Issues

- **Node version**: The `netlify.toml` specifies Node 18
- **Build timeout**: Large media files might cause timeouts
- **Missing files**: Ensure all required files are committed to Git

## Local Testing

Before deploying, test your build locally:

```bash
npm install
npm run build
```

The `dist` folder should contain your production-ready files.

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment](https://create-react-app.dev/docs/deployment/) 