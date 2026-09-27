import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types";

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.token = `demo-token-${action.payload.id}`;
    },
    signOut: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;