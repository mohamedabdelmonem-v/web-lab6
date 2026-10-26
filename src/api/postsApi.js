// Pure async data fetching function using the native Fetch API
export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }