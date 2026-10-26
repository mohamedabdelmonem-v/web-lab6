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

// 3. Side effect for fetching data on mount with cleanup
  useEffect(() => {
    let isMounted = true;

    const getPosts = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const data = await fetchPosts();
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        }
      } catch (err) {
        if (isMounted) {
          dispatch({ type: 'FETCH_ERROR', payload: err.message });
        }
      }
};