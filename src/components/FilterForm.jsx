import React from 'react';

// Controlled input form component for titles filtering
const FilterForm = ({ filterText, onFilterChange }) => {
   return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Filter posts by title..."
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          boxSizing: 'border-box'
        }}
      />
    </div>
   );
};