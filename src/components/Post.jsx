import React from 'react';

// Pure presentational component displaying single post details
const Post = ({ title, body }) => {
    const postStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    padding: '16px',
    marginBottom: '12px',
    backgroundColor: '#ffffff'
    };

    return (
    <div style={postStyle}>
      <h3 style={{ marginTop: 0, textTransform: 'capitalize' }}>{title}</h3>
      <p style={{ color: '#555' }}>{body}</p>
    </div>

    );