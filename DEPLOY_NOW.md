# Quick Deploy to Vercel - Step by Step

## Method 1: Git Push (Automatic - Recommended)

If your Vercel project is connected to Git:

1. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Fix camera preview on mobile and improve error handling"
   git push origin main
   ```

2. **Vercel will automatically deploy:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Watch the deployment progress
   - Usually takes 2-3 minutes

## Method 2: Manual Redeploy from Dashboard

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Click on your project

2. **Trigger Redeploy:**
   - Click "Deployments" tab
   - Click the three dots (⋯) on latest deployment
   - Select "Redeploy"
   - Wait for deployment to complete

## Method 3: Vercel CLI (Advanced)

1. **Install Vercel CLI (if not installed):**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Verify Deployment

After deployment completes:

1. Check deployment status in Vercel Dashboard (should show ✅ Success)
2. Visit your site URL (e.g., `https://cascade-erp.in`)
3. Test the camera preview on mobile device
4. Check browser console for errors (should see reduced 500 error logging)

## Troubleshooting

- **Build fails?** Check Vercel deployment logs for errors
- **Changes not showing?** Clear browser cache or hard refresh (Ctrl+Shift+R)
- **Need to update environment variables?** Go to Settings → Environment Variables → Add/Edit → Redeploy

