import axios, { AxiosInstance, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL, STORAGE_KEYS } from '../constants';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      async (config: any) => {
        const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response: any) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Token expired, clear auth and redirect to login
          await AsyncStorage.setItem(STORAGE_KEYS.IS_AUTHENTICATED, JSON.stringify(false));
          await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        }
        return Promise.reject(error);
      }
    );
  }

  async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  async get<T>(url: string): Promise<T> {
    const response = await this.client.get<T>(url);
    return response.data;
  }

  async put<T>(url: string, data?: any): Promise<T> {
    const response = await this.client.put<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.client.delete<T>(url);
    return response.data;
  }
}

export const apiClient = new ApiClient();

// Auth API
export const authApi = {
  register: (data: { name: string; email: string; password: string }) =>
    apiClient.post<{ token: string; user: any }>('/auth/register', data),
  
  login: (data: { email: string; password: string }) =>
    apiClient.post<{ token: string; user: any }>('/auth/login', data),
  
  forgotPassword: (data: { email: string }) =>
    apiClient.post<{ message: string }>('/auth/forgot-password', data),
  
  logout: () => apiClient.post<{ message: string }>('/auth/logout'),
};

// User API
export const userApi = {
  getMe: () => apiClient.get<any>('/users/me'),
  updateMe: (data: any) => apiClient.put<any>('/users/me', data),
};

// Plan API
export const planApi = {
  generate: (data: any) => apiClient.post<any>('/plans/generate', data),
  getPlan: () => apiClient.get<any>('/plans'),
};

// Workout API
export const workoutApi = {
  getToday: () => apiClient.get<any>('/workouts/today'),
  getWeek: () => apiClient.get<any>('/workouts/week'),
  complete: (id: string) => apiClient.post<any>(`/workouts/${id}/complete`),
};

// Nutrition API
export const nutritionApi = {
  generate: (data: any) => apiClient.post<any>('/nutrition/generate', data),
  getNutrition: () => apiClient.get<any>('/nutrition'),
};

// Progress API
export const progressApi = {
  add: (data: any) => apiClient.post<any>('/progress', data),
  get: () => apiClient.get<any>('/progress'),
};
