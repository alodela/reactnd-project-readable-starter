import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPost, updatePost, deletePost, voteUp, voteDown } from '../actions/post'
import Post from '../components/Posts/Post'

const mapStateToProps = (state, props) => {
    return {
        post: { ...state.entities.posts.byId[props.match.params.post_id] }
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadPost,
    updatePost,
    deletePost,
    voteUp,
    voteDown,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)