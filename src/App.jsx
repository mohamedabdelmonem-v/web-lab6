import React, { useReducer, useState, useEffect } from 'react';
import { postsReducer, initialState } from './reducer/postsReducer';
import { fetchPosts } from './api/postsApi';
import PostList from './components/PostList';
import FilterForm from './components/FilterForm';

function App() {
// 1. Manage async state using useReducer
  const [state, dispatch] = useReducer(postsReducer, initialState);
  
  // 2. Manage local state for filter text input
  const [filterText, setFilterText] = useState('');



};