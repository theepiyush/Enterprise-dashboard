import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Notification } from "@/types";

interface NotificationState {
  items: Notification[];
}

const initialState: NotificationState = {
  items: [
    {
      id: "n1",
      message: "Revenue target reached for this week.",
      createdAt: new Date().toISOString(),
      read: false
    }
  ]
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.items.unshift(action.payload);
    },
    markAllRead: (state) => {
      state.items.forEach((item) => { item.read = true; });
    }
  }
});

export const { addNotification, markAllRead } = notificationSlice.actions;
export default notificationSlice.reducer;