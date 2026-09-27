import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ChartPoint, DashboardStats } from "@/types";

interface DashboardState {
  stats: DashboardStats;
  chartData: ChartPoint[];
  lastUpdated: string | null;
}

const initialState: DashboardState = {
  stats: {
    revenue: 124560,
    orders: 1832,
    activeUsers: 1245,
    conversionRate: 3.4
  },
  chartData: [
    { date: "Mon", revenue: 18200, orders: 240, users: 920 },
    { date: "Tue", revenue: 22100, orders: 282, users: 1040 },
    { date: "Wed", revenue: 19800, orders: 260, users: 990 },
    { date: "Thu", revenue: 25400, orders: 315, users: 1120 },
    { date: "Fri", revenue: 28800, orders: 352, users: 1280 },
    { date: "Sat", revenue: 31200, orders: 391, users: 1410 },
    { date: "Sun", revenue: 29060, orders: 366, users: 1245 }
  ],
  lastUpdated: null
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setRealtimePoint: (state, action: PayloadAction<ChartPoint>) => {
      state.chartData = [...state.chartData.slice(-6), action.payload];
      state.stats.revenue = action.payload.revenue;
      state.stats.orders = action.payload.orders;
      state.stats.activeUsers = action.payload.users;
      state.lastUpdated = new Date().toISOString();
    }
  }
});

export const { setRealtimePoint } = dashboardSlice.actions;
export default dashboardSlice.reducer;