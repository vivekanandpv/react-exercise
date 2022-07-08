import { configureStore } from '@reduxjs/toolkit';
import { albumsSlice } from './albums-slice';
import { todosSlice } from './todos-slice';
import { usersSlice } from './users-slice';

export const appStore = configureStore({
  reducer: {
    albums: albumsSlice.reducer,
    todos: todosSlice.reducer,
    users: usersSlice.reducer,
  },
});
