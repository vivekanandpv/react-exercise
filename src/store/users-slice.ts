import { createSlice } from '@reduxjs/toolkit';
import { User } from '../models/user.models';

export interface UserAction {
    type: string;
    payload: User[]
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: [] as User[],
  reducers: {
    loadUsers: (state, action: UserAction) => {
      state = action.payload;
      return state;
    },
  },
});