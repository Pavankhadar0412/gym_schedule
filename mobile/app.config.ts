import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Gym Schedule',
  slug: 'gym-schedule',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'dark',
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.gymschedule.app',
    buildNumber: '1',
    infoPlist: {
      NSCameraUsagePermission: 'This app may use the camera for profile photos.',
      NSPhotoLibraryUsagePermission: 'This app may access photos for profile images.'
    }
  },
  android: {
    package: 'com.gymschedule.app',
    versionCode: 1,
    permissions: [
      'INTERNET',
      'ACCESS_NETWORK_STATE',
      'VIBRATE',
      'SCHEDULE_EXACT_ALARM',
      'RECEIVE_BOOT_COMPLETED'
    ]
  },
  plugins: [
    'expo-router',
    'expo-notifications',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#1a1a2e',
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: 'your-project-id-here'
    }
  }
});
