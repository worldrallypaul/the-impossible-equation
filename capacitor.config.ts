import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1721fdf26d6e46a78e405f1b6d9146e8',
  appName: 'code-frame-craft',
  webDir: 'dist',
  server: {
    url: 'https://1721fdf2-6d6e-46a7-8e40-5f1b6d9146e8.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Browser: {},
    GoogleAuth: {
      scopes: ['profile', 'email'],
      // Replace with your actual Web Client ID from Google Cloud Console
      serverClientId: '',
      forceCodeForRefreshToken: true,
    }
  }
};

export default config;
