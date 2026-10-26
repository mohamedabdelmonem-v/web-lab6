# Dynamic Post Dashboard (Assignment 6)

## Project Overview
This React application demonstrates async state management and side effects using `useReducer`, `useEffect`, and native `Fetch API`. It adheres strictly to React mental models by utilizing Derived State for filtering instead of redundant local states.

## File Organization
- `src/api/postsApi.js`: Pure JavaScript data-fetching utility module.
- `src/reducer/postsReducer.js`: Pure reducer function handling `FETCH_START`, `FETCH_SUCCESS`, and `FETCH_ERROR` actions.
- `src/components/Post.jsx`: Pure presentational component for individual post display.
- `src/components/PostList.jsx`: Container component handling dynamic list layout and Loading/Error/Empty states.
- `src/components/FilterForm.jsx`: Controlled input form for string queries.
- `src/App.jsx`: Main root orchestrating async side-effects, state transitions, and derived filtering.
- `README.md`: Project documentation and architecture details.

## Challenges Faced
1. **Avoiding Redundant State**: Computing `filteredPosts` as a derived state during render rather than saving it into an effect or extra state variable.
2. **Preventing Memory Leaks**: Implementing a cleanup flag (`isMounted`) inside `useEffect` to safely handle unmounted component transitions during async operations.
3. **Strict Commit Workflow**: Executing file-isolated git commit steps to satisfy the assignment requirement.