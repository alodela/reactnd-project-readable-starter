import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPost } from '../../actions/post'
import PostDetail from '../components/Posts/PostDetail'

const mapStateToProps = (state, props) => {
    return {
        post: state.entities.posts.byId[props.match.params.post_id] || {}
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)