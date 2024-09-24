// src/app/reducers/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

// Export the actions and the reducer
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
