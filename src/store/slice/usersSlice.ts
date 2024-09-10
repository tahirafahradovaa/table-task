import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/User";
import { fetchUsers } from "../../api/userService";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  filters: { name: "", username: "", email: "", phone: "" },
};

export const getUsers = createAsyncThunk("users/fetchUsers", async () => {
  return await fetchUsers();
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch users";
        state.loading = false;
      });
  },
});

export const { setFilters } = usersSlice.actions;
export default usersSlice.reducer;
