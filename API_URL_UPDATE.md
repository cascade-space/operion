# API URL Update to HTTPS

## Summary

The frontend has been updated to use `https://api.cascade-erp.in` instead of `http://3.107.223.34:3000` to resolve Mixed Content errors when the frontend is served over HTTPS.

## Changes Made

### Code Updates
- ✅ `src/services/api/client.ts` - Updated health check URL construction
- ✅ `src/components/NetworkStatus.tsx` - Updated health check URL construction
- ✅ Documentation files updated with new HTTPS URLs

### Required Action: Update Environment Variables

**You must update the environment variables in your deployment platform (Vercel) with these new values:**

1. **`VITE_API_URL`**
   - **Old:** `http://3.107.223.34:3000/api`
   - **New:** `https://api.cascade-erp.in/api`

2. **`VITE_WS_URL`**
   - **Old:** `ws://3.107.223.34:3000/ws`
   - **New:** `wss://api.cascade-erp.in/ws`

## How to Update in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Find `VITE_API_URL` and update the value to `https://api.cascade-erp.in/api`
5. Find `VITE_WS_URL` and update the value to `wss://api.cascade-erp.in/ws`
6. **Redeploy** your application (the environment variables are baked into the build)

## Verification

After redeploying:
1. Visit `https://www.cascade-erp.in`
2. Open browser DevTools (F12) → Console
3. Check that there are no more Mixed Content errors
4. Verify API requests go to `https://api.cascade-erp.in/api`
5. Verify WebSocket connects to `wss://api.cascade-erp.in/ws`

## Important Notes

- Environment variables are baked into the build at build time
- **You must redeploy after changing environment variables**
- The new URLs use HTTPS/WSS which is required when the frontend is served over HTTPS
- Make sure your backend at `api.cascade-erp.in` has a valid SSL certificate
- Ensure backend CORS settings allow requests from `https://www.cascade-erp.in`

