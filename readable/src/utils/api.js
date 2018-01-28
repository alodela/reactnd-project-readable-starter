const API_HOST = "http://localhost:3001"

const authorizationToken = "alodela";
const headers = { 'Authorization': authorizationToken };

const fetchCategories = () => {
    return fetch(`${API_HOST}/categories`, { headers })
        .then(response => response.json())
        .then(response => response.categories)
}

const fetchPosts = () => {
    return fetch(`${API_HOST}/posts`, { headers })
        .then(response => response.json())
}

const fetchPostsByCategory = (category) => {
    return fetch(`${API_HOST}/${category}/posts`, { headers })
        .then((response) => response.json())
        .then((response) => response.posts)
}

export default {
    fetchCategories,
    fetchPosts,
    fetchPostsByCategory,
}