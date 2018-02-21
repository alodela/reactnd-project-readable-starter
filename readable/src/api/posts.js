import { API_HOST, HEADERS } from './constants'
import UUID from 'uuidjs'

const fetchPosts = () => {
    return fetch(`${API_HOST}/posts`, { headers: HEADERS })
        .then(response => response.json())
        .then(posts => posts)
    }

const fetchPostsByCategory = (category) => {
    return fetch(`${API_HOST}/${category}/posts`, { headers: HEADERS })
        .then(response => response.json())
        .then(posts => posts)
}

const fetchPost = (postId) => {
    return fetch(`${API_HOST}/posts/${postId}`, { headers: HEADERS })
        .then(response => response.json())
        .then(post => post)
}

const updatePost = (post) => {
    const { title, body, id, author, category } = post;

    return fetch(`${API_HOST}/posts/${id}`, {
        headers: HEADERS,
        method: 'PUT',
        body: JSON.stringify({ title, body, author, category }),
    }).then(response => response.json()).then(post => post)
}

const deletePost = (post) => {
    return fetch(`${API_HOST}/posts/${post.id}`, {
        headers: HEADERS,
        method: 'DELETE',
    }).then(response => response.json()).then(post => post)
}

const createPost = (post) => {
    post = {
        id: UUID.generate(),
        timestamp: Date.now(),
        ...post,
    }

    return fetch(`${API_HOST}/posts`, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify({ ...post }),
    }).then(response => response.json()).then(post => post)
}

const voteUp = (post) => {
    return fetch(`${API_HOST}/posts/${post.id}`, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify({ option: "upVote" })
    }).then(response => response.json()).then(post => post)
}

const voteDown = (post) => {
    return fetch(`${API_HOST}/posts/${post.id}`, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify({ option: "downVote" })
    }).then(response => response.json()).then(post => post)
}

export default {
    fetchPosts,
    fetchPostsByCategory,
    fetchPost,
    updatePost,
    deletePost,
    createPost,
    voteUp,
    voteDown,
}