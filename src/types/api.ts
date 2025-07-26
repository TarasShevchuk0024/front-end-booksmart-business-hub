// API Types based on OpenAPI specification and backend models

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  type: 'CLIENT' | 'BUSINESS_OWNER' | 'ADMIN';
  status: 'ACTIVE' | 'INACTIVE' | 'BLOCKED';
  createdAt?: string;
  updatedAt?: string;
}

export interface UserCreate {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  type: 'CLIENT' | 'BUSINESS_OWNER';
}

export interface UserUpdate {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}

export interface Business {
  id: string;
  business_name: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

export interface BusinessCreate {
  business_name: string;
  description: string;
}

export interface BusinessUpdate {
  id: string;
  business_name: string;
  description: string;
}

export interface Service {
  id: string;
  service_name: string;
  description: string;
  duration_minutes: number;
  price_eur: number;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceCreate {
  service_name: string;
  description: string;
  duration_minutes: number;
  price_eur: number;
}

export interface ServiceUpdate {
  id: string;
  service_name: string;
  description: string;
  duration_minutes: number;
  price_eur: number;
}

export interface Booking {
  id: string;
  user_id: string;
  service_id: string;
  date_time: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  created_at?: string;
  updated_at?: string;
}

export interface BookingCreate {
  user_id: string;
  service_id: string;
  date_time: string;
}

export interface NotificationCreate {
  message: string;
  sent_at: string;
  type: 'EMAIL' | 'SMS' | 'PUSH';
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthToken {
  token: string;
}

export interface PasswordReset {
  email: string;
}

export interface PasswordResetComplete {
  token: string;
  password: string;
}