# Castly Setup Guide - Fixing Middleware Issues

## 🚨 Critical Issues Identified & Fixed

### 1. Database Configuration Mismatch
- **Problem**: Drizzle was configured for PostgreSQL but using Xata
- **Fix**: Updated configuration to properly use Xata

### 2. Missing Environment Variables
- **Problem**: Required auth variables were missing
- **Fix**: Added fallbacks and error handling

### 3. Middleware Error Handling
- **Problem**: Middleware would crash on auth errors
- **Fix**: Added try-catch blocks and graceful fallbacks

## 🔧 Required Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Google OAuth (Required for authentication)
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Xata Database
XATA_API_KEY=your_xata_api_key_here
XATA_DATABASE_URL=https://Ajitesh-Singh-s-workspace-vhrieu.ap-southeast-2.xata.sh/db/Castly
```

## 📋 Setup Steps

### 1. Get Google OAuth Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/google`

### 2. Get Xata API Key
1. Go to [Xata Dashboard](https://app.xata.io/)
2. Navigate to your Castly workspace
3. Go to Settings → API Keys
4. Create a new API key with read/write permissions

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Database Migrations
```bash
npx drizzle-kit generate
npx drizzle-kit push
```

### 5. Start Development Server
```bash
npm run dev
```

## 🔍 What Was Fixed

### Middleware (`middleware.ts`)
- Added error handling with try-catch
- Graceful fallback to sign-in page on errors
- Better session validation

### Authentication (`lib/auth.ts`)
- Added environment variable validation
- Fallback values for missing config
- Better error logging

### Database (`drizzle/db.ts` & `drizzle.config.ts`)
- Fixed Xata integration
- Proper database adapter configuration

### Components
- Updated Navbar to use real user data
- Added proper logout functionality
- Session-aware navigation

## 🚀 Testing the Fix

1. **Start the app**: `npm run dev`
2. **Visit**: `http://localhost:3000`
3. **Should redirect to**: `/sign-in` (if not authenticated)
4. **Sign in with Google**: Should work if credentials are set
5. **After sign-in**: Should redirect to home page with user data

## 🐛 Common Issues & Solutions

### Issue: "Invalid redirect URI"
- **Solution**: Check Google OAuth redirect URIs in Cloud Console

### Issue: "Xata API key invalid"
- **Solution**: Verify XATA_API_KEY in .env.local

### Issue: "Database connection failed"
- **Solution**: Check XATA_DATABASE_URL and API key

### Issue: "Middleware redirect loop"
- **Solution**: Clear browser cookies and restart dev server

## 📁 File Structure After Fixes

```
castly/
├── middleware.ts          ✅ Fixed error handling
├── lib/
│   ├── auth.ts           ✅ Added fallbacks
│   └── auth-client.ts    ✅ Added fallbacks
├── drizzle/
│   ├── db.ts             ✅ Xata integration
│   └── config.ts         ✅ Updated for Xata
├── components/
│   └── Navbar.tsx        ✅ Real user data
└── app/(root)/
    └── layout.tsx        ✅ Session provider
```

## 🔐 Security Notes

- Never commit `.env.local` to version control
- Use environment variables for all sensitive data
- Regularly rotate API keys
- Monitor authentication logs

## 📞 Need Help?

If you're still experiencing issues:

1. Check browser console for errors
2. Verify all environment variables are set
3. Ensure Google OAuth is properly configured
4. Check Xata database connection
5. Clear browser cookies and restart

The middleware should now handle authentication gracefully without crashing!
