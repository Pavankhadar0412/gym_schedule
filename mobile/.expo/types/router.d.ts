/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/creatine-guide` | `/(tabs)/nutrition` | `/(tabs)/profile` | `/(tabs)/progress` | `/(tabs)/protein-calculator` | `/(tabs)/protein-guide` | `/(tabs)/today-workout` | `/(tabs)/workout` | `/_sitemap` | `/auth/forgot-password` | `/auth/login` | `/auth/register` | `/creatine-guide` | `/nutrition` | `/onboarding/complete` | `/onboarding/diet` | `/onboarding/equipment` | `/onboarding/experience` | `/onboarding/fitness-goal` | `/onboarding/generating` | `/onboarding/personal-details` | `/onboarding/supplements` | `/onboarding/welcome` | `/onboarding/workout-frequency` | `/profile` | `/progress` | `/protein-calculator` | `/protein-guide` | `/today-workout` | `/workout`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
