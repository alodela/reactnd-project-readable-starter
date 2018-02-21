import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPost } from '../actions/post'
import NewPost from '../components/Posts/NewPost'

const mapStateToProps = (state, props) => {
    return {
        post: {}
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    createPost,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)