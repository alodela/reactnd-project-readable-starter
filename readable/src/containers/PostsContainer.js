import { loadPosts, voteUp, voteDown, deletePost } from '../actions/post'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostList from '../components/Posts/PostList'

const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadPosts,
    voteUp,
    voteDown,
    deletePost,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostList)