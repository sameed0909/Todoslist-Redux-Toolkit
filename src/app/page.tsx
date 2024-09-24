// src/page.tsx

"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/app/store';
import TodoList from '@/app/components/TodoList';

const HomePage: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
};

export default HomePage;
