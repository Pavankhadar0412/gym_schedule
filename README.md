# Gym Schedule

A complete cross-platform mobile application for Android and iOS with a Spring Boot backend.

## Overview

**Gym Schedule** is a comprehensive fitness application that helps users:
- Create personalized workout plans based on their goals, experience, and equipment
- Generate nutrition plans with calorie and macro targets
- Track progress including weight, workouts, and protein intake
- Follow daily workout schedules with exercise instructions
- Manage diet preferences (vegetarian, non-vegetarian, vegan)

## Tech Stack

### Mobile App
- **React Native** - Cross-platform mobile framework
- **Expo** - Development and build tooling
- **TypeScript** - Type-safe JavaScript
- **Expo Router** - File-based routing
- **React Native Paper** - Material Design UI components
- **AsyncStorage** - Local data persistence
- **Axios** - HTTP client
- **Lucide React Native** - Icon library

### Backend
- **Java 17** - Programming language
- **Spring Boot 3.2** - Application framework
- **Spring Data JPA** - Database ORM
- **Spring Security** - Authentication and authorization
- **MySQL** - Database
- **JWT** - Token-based authentication

## Project Structure

```
gym-schedule/
├── mobile/                 # React Native mobile app
│   ├── app/               # Expo Router screens
│   │   ├── (tabs)/        # Bottom tab navigation
│   │   ├── onboarding/    # Onboarding flow
│   │   └── auth/          # Authentication screens
│   ├── components/        # Reusable components
│   ├── screens/           # Additional screens
│   ├── services/          # API services and generators
│   ├── hooks/             # Custom React hooks
│   ├── context/           # React context providers
│   ├── utils/             # Utility functions
│   ├── assets/            # Images and static assets
│   ├── constants/         # App constants
│   ├── package.json       # Dependencies
│   ├── app.config.ts      # Expo configuration
│   └── tsconfig.json      # TypeScript configuration
│
└── backend/               # Spring Boot backend
    ├── src/
    │   └── main/
    │       ├── java/
    │       │   └── com/gymschedule/
    │       │       ├── controller/    # REST controllers
    │       │       ├── service/       # Business logic
    │       │       ├── repository/    # Data access
    │       │       ├── entity/        # Database entities
    │       │       ├── dto/           # Data transfer objects
    │       │       ├── config/        # Configuration
    │       │       ├── security/      # Security configuration
    │       │       └── exception/     # Custom exceptions
    │       └── resources/
    │           └── application.properties
    └── pom.xml              # Maven dependencies
```

## Features

### Mobile App
- **Onboarding Flow**: Multi-step user profile setup
- **Personalized Workout Plans**: Generated based on user goals and equipment
- **Nutrition Planning**: Calorie and macro targets with meal suggestions
- **Workout Tracking**: Exercise completion with rest timers
- **Progress Tracking**: Weight, workout streak, and completion metrics
- **Authentication**: Secure login/register with JWT
- **Offline Support**: Local data caching with AsyncStorage
- **Dark Mode**: Modern dark fitness aesthetic

### Backend API
- **RESTful APIs**: Clean REST architecture
- **JWT Authentication**: Secure token-based auth
- **User Management**: Profile and preferences
- **Plan Generation**: Workout and nutrition plan APIs
- **Progress Tracking**: Store and retrieve user progress

## Setup Instructions

### Prerequisites

#### Mobile Development
- Node.js 18+ 
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

#### Backend Development
- Java 17+
- Maven 3.6+
- MySQL 8.0+

### Mobile App Setup

1. **Navigate to mobile directory**
   ```bash
   cd mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Run on device/emulator**
   - Press `a` for Android emulator
   - Press `i` for iOS simulator (macOS only)
   - Scan QR code with Expo Go app on physical device

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Configure MySQL database**
   - Create MySQL database named `gym_schedule`
   - Update `src/main/resources/application.properties` with your database credentials:
     ```properties
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

3. **Build and run**
   ```bash
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

### Environment Variables

#### Backend (application.properties)
```properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/gym_schedule
spring.datasource.username=root
spring.datasource.password=your_password

# JWT Secret (CHANGE IN PRODUCTION)
jwt.secret=your-secret-key-change-this-in-production
jwt.expiration=86400000
```

#### Mobile (app.config.ts)
Update API base URL in `constants/index.ts`:
```typescript
export const API_BASE_URL = 'http://localhost:8080/api';
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset

### User
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile

### Plans
- `POST /api/plans/generate` - Generate workout/nutrition plan
- `GET /api/plans` - Get user's plans

### Workouts
- `GET /api/workouts/today` - Get today's workout
- `GET /api/workouts/week` - Get weekly schedule
- `POST /api/workouts/{id}/complete` - Mark workout complete

### Nutrition
- `POST /api/nutrition/generate` - Generate nutrition plan
- `GET /api/nutrition` - Get nutrition plan

### Progress
- `POST /api/progress` - Add progress entry
- `GET /api/progress` - Get user progress

## Building for Production

### Android

1. **Configure EAS Build**
   ```bash
   npm install -g eas-cli
   eas build:configure
   ```

2. **Build APK**
   ```bash
   eas build --platform android
   ```

3. **Build AAB (for Play Store)**
   ```bash
   eas build --platform android --profile production
   ```

### iOS

1. **Configure Apple Developer account**
   - Add your Apple ID to EAS
   - Configure provisioning profiles

2. **Build for TestFlight**
   ```bash
   eas build --platform ios
   ```

3. **Build for App Store**
   ```bash
   eas build --platform ios --profile production
   ```

## Development Workflow

1. **Start backend server**
   ```bash
   cd backend
   mvn spring-boot:run
   ```

2. **Start mobile app**
   ```bash
   cd mobile
   npm start
   ```

3. **Make changes and test**
   - Mobile app hot-reloads automatically
   - Backend restarts with devtools

## Database Schema

### Users
- id, email, password, name, age, gender, height, weight
- goal, experience, workoutFrequency, workoutDays
- equipment, diet, mealsPerDay, allergies, dislikedFoods
- proteinPreference, creatinePreference, hasCompletedOnboarding

### WorkoutPlans
- id, user_id, weeklySchedule (JSON), split (JSON)
- createdAt, updatedAt

### NutritionPlans
- id, user_id, calories, protein, carbs, fat, bmr, tdee
- meals (JSON), diet, createdAt, updatedAt

### Progress
- id, user_id, currentStreak, longestStreak
- weeklyCompletion, monthlyCompletion
- weightHistory, workoutHistory, calorieHistory, proteinHistory (JSON)

## Safety Disclaimer

This application provides general fitness and nutrition estimates for informational purposes only. Individual exercise and nutrition needs vary. Users should consult a qualified healthcare or fitness professional for personalized advice, especially if they have a medical condition, injury, are pregnant, or take medication.

## License

This project is for educational purposes.

## Support

For issues or questions, please refer to the documentation or contact the development team.
"# gym_schedule" 
