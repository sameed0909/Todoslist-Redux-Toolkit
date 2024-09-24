// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Export the RootState type for use in selectors
export type RootState = ReturnType<typeof store.getState>;
export default store;
