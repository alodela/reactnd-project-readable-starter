import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    loadComments,
    createComment,
    updateComment,
    deleteComment,
    voteUp,
    voteDown,
} from '../actions/comment'
import CommentList from '../components/Comments/CommentList'

const mapStateToProps = (state, props) => {
    return {
        postId: props.postId,
        comments: state.entities.comments,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadComments,
    createComment,
    updateComment,
    deleteComment,
    voteUp,
    voteDown,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)