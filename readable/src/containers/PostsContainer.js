import { loadPosts } from '../actions/Post'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Posts from '../components/Posts';

const mapStateToProps = ({ posts }) => {
    console.log("Map state to props", posts)
    return { posts }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadPosts: loadPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts);