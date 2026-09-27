export type UserRole = "admin" | "analyst";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface DashboardStats {
  revenue: number;
  orders: number;
  activeUsers: number;
  conversionRate: number;
}

export interface ChartPoint {
  date: string;
  revenue: number;
  orders: number;
  users: number;
}

export interface Notification {
  id: string;
  message: string;
  createdAt: string;
  read: boolean;
}