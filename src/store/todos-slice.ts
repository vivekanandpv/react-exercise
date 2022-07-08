import { createSlice } from '@reduxjs/toolkit';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosAction {
  type: string;
  payload: Todo[];
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    loadTodos: (state, action: TodosAction) => {
      console.log('todo reducer core', action, state);

      state = action.payload;
      return state;
    },
  },
});
