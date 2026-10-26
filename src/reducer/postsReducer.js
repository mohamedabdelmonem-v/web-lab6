// Initial State object for post fetching operations
export const initialState = {
posts: [],
  loading: false,
  error: null
}; 

// Pure Reducer function handling async state transitions
export const postsReducer = (state, action) => {
switch (action.type) {
case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: null
      };


}
};