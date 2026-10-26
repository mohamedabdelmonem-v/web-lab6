import React from 'react';

// Controlled input form component for titles filtering
const FilterForm = ({ filterText, onFilterChange }) => {
   return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Filter posts by title..."
        value={filterText}








   );
};