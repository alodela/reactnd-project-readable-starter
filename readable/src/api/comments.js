import { API_HOST, HEADERS } from './constants'
import UUID from 'uuidjs'

const fetchComments = (postId) => {
    return fetch(`${API_HOST}/posts/${postId}/comments`, { headers: HEADERS })
        .then(response => response.json())
        .then(comments => comments)
    }

const updateComment = (comment) => {
    const { author, body, id } = comment;

    return fetch(`${API_HOST}/comments/${id}`, {
        headers: HEADERS,
        method: 'PUT',
        body: JSON.stringify({ body, author }),
    }).then(response => response.json()).then(comment => comment)
}

const deleteComment = (comment) => {
    return fetch(`${API_HOST}/comments/${comment.id}`, {
        headers: HEADERS,
        method: 'DELETE',
    }).then(response => response.json()).then(comment => comment)
}

const createComment = (comment) => {
    comment = {
        id: UUID.generate(),
        timestamp: Date.now(),
        ...comment,
    }

    return fetch(`${API_HOST}/comments`, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify({ ...comment }),
    }).then(response => response.json()).then(comment => comment)
}

const voteUp = (comment) => {
    return fetch(`${API_HOST}/comments/${comment.id}`, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify({ option: "upVote" })
    }).then(response => response.json()).then(comment => comment)
}

const voteDown = (comment) => {
    return fetch(`${API_HOST}/comments/${comment.id}`, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify({ option: "downVote" })
    }).then(response => response.json()).then(comment => comment)
}

export default {
    fetchComments,
    createComment,
    updateComment,
    deleteComment,
    voteUp,
    voteDown,
}