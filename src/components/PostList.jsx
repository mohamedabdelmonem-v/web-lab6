import React from 'react';
import Post from './Post';

// List component handling rendering logic for posts and async UI states
const PostList = ({ posts, loading, error }) => {
  if (loading) {
    return <p>Loading posts...</p>;
  }
  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }
  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
   <div>


    
   </div>


  );
};