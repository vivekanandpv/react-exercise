import { configureStore } from '@reduxjs/toolkit';
import { User } from '../models/user.models';
import { Album, albumsSlice } from './albums-slice';
import { Todo, todosSlice } from './todos-slice';
import { usersSlice } from './users-slice';

export interface AppState {
  albums: Album[];
  todos: Todo[];
  users: User[];
}

export const appStore = configureStore<AppState>({
  reducer: {
    albums: albumsSlice.reducer,
    todos: todosSlice.reducer,
    users: usersSlice.reducer,
  },
});
