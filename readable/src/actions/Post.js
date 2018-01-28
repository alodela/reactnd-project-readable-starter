import Api from '../utils/api'

export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';

const loadPostsSuccess = posts => ({
    type: LOAD_POSTS_SUCCESS,
    posts
});

export const loadPosts = () => dispatch => (
    Api.fetchPosts()
        .then(posts => dispatch(loadPostsSuccess(posts)))
)