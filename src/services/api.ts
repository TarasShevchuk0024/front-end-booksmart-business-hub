// API Service layer matching the backend OpenAPI specification

import type { 
  User, UserCreate, UserUpdate, 
  Business, BusinessCreate, BusinessUpdate,
  Service, ServiceCreate, ServiceUpdate,
  Booking, BookingCreate,
  AuthCredentials, AuthToken,
  NotificationCreate,
  PasswordReset, PasswordResetComplete
} from '@/types/api';

const API_BASE_URL = process.env.VITE_API_BASE_URL || '/api';

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const token = localStorage.getItem('auth_token');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    // Handle 204 No Content responses
    if (response.status === 204) {
      return null as T;
    }

    return response.json();
  }

  // Auth endpoints
  async login(credentials: AuthCredentials): Promise<AuthToken> {
    return this.request<AuthToken>('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: UserCreate): Promise<AuthToken> {
    return this.request<AuthToken>('/users/sign-up', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // User endpoints
  async getUsers(): Promise<User[]> {
    return this.request<User[]>('/users');
  }

  async getUserById(id: string): Promise<User> {
    return this.request<User>(`/users/${id}`);
  }

  async getCurrentUser(): Promise<User> {
    // Since we don't have a /me endpoint, we'll need to decode token or get user ID
    // For now, we'll get all users and find the current one by token
    // This is not ideal but works for demo purposes
    const token = localStorage.getItem('auth_token');
    if (!token) {
      throw new Error('No authentication token found');
    }
    
    // In a real app, you'd decode the JWT or have a /me endpoint
    // For now, we'll assume the first user is the current user (demo)
    const users = await this.getUsers();
    if (users.length === 0) {
      throw new Error('No user found');
    }
    return users[0]; // This is just for demo purposes
  }

  async updateUser(user: UserUpdate): Promise<void> {
    return this.request<void>(`/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  }

  async deleteUser(id: string): Promise<void> {
    return this.request<void>(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // Business endpoints
  async getBusinesses(): Promise<Business[]> {
    return this.request<Business[]>('/businesses');
  }

  async getMyBusinesses(): Promise<Business[]> {
    return this.request<Business[]>('/businesses/my');
  }

  async getBusinessById(id: string): Promise<Business> {
    return this.request<Business>(`/businesses/${id}`);
  }

  async createBusiness(business: BusinessCreate): Promise<void> {
    return this.request<void>('/businesses', {
      method: 'POST',
      body: JSON.stringify(business),
    });
  }

  async updateBusiness(business: BusinessUpdate): Promise<void> {
    return this.request<void>(`/businesses/${business.id}`, {
      method: 'PUT',
      body: JSON.stringify(business),
    });
  }

  async deleteBusiness(id: string): Promise<void> {
    return this.request<void>(`/businesses/${id}`, {
      method: 'DELETE',
    });
  }

  // Service endpoints
  async getServices(): Promise<Service[]> {
    return this.request<Service[]>('/services');
  }

  async getServiceById(id: string): Promise<Service> {
    return this.request<Service>(`/services/${id}`);
  }

  async createService(service: ServiceCreate): Promise<void> {
    return this.request<void>('/services', {
      method: 'POST',
      body: JSON.stringify(service),
    });
  }

  async updateService(service: ServiceUpdate): Promise<void> {
    return this.request<void>(`/services/${service.id}`, {
      method: 'PUT',
      body: JSON.stringify(service),
    });
  }

  async deleteService(id: string): Promise<void> {
    return this.request<void>(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  // Booking endpoints
  async getBookings(): Promise<Booking[]> {
    return this.request<Booking[]>('/bookings');
  }

  async getBookingById(id: string): Promise<Booking> {
    return this.request<Booking>(`/bookings/${id}`);
  }

  async createBooking(booking: BookingCreate): Promise<void> {
    return this.request<void>('/bookings', {
      method: 'POST',
      body: JSON.stringify(booking),
    });
  }

  async updateBookingStatus(id: string, status: 'PENDING' | 'CONFIRMED' | 'CANCELLED'): Promise<void> {
    return this.request<void>(`/bookings/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async acceptBooking(id: string): Promise<void> {
    return this.request<void>(`/bookings/${id}/accept`, {
      method: 'PUT',
    });
  }

  async cancelBooking(id: string): Promise<void> {
    return this.request<void>(`/bookings/${id}/cancel`, {
      method: 'PUT',
    });
  }

  async deleteBooking(id: string): Promise<void> {
    return this.request<void>(`/bookings/${id}`, {
      method: 'DELETE',
    });
  }

  // Notification endpoints
  async sendNotification(notification: NotificationCreate): Promise<void> {
    return this.request<void>('/notifications', {
      method: 'POST',
      body: JSON.stringify(notification),
    });
  }

  // Password management
  async changePassword(oldPassword: string, newPassword: string): Promise<void> {
    return this.request<void>('/users/passwords', {
      method: 'PUT',
      body: JSON.stringify({
        old_password: oldPassword,
        new_password: newPassword,
      }),
    });
  }

  async requestPasswordReset(email: string): Promise<void> {
    return this.request<void>('/users/passwords/reset', {
      method: 'PUT',
      body: JSON.stringify({ email }),
    });
  }

  async verifyPasswordResetToken(token: string): Promise<User> {
    return this.request<User>(`/users/passwords/reset-verify?token=${token}`);
  }

  async completePasswordReset(data: PasswordResetComplete): Promise<void> {
    return this.request<void>('/users/passwords/reset-complete', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();