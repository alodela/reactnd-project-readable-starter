import React, { Component } from 'react'
import PostForm from './PostForm'

class NewPost extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            post: { ...props.post },
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const post = this.state.post;

        post[name] = value;
        return this.setState({ post });
    }

    cancel() {
        this.props.history.push('/')
    }

    savePost(e) {
        e.preventDefault()

        if (!this.isFormValid()) { return }
        this.props.createPost(this.state.post)
    }

    isFormValid() {
        let errorMessage = ''
        const fields = ['title', 'body', 'author', 'category']

        fields.forEach(field => {
            let error = this.validateField(field)
            if (error) { errorMessage = errorMessage + error + '\n' }
        })

        if (errorMessage.length > 0) {
            window.alert(`Some errors found:\n${errorMessage}`)
            return false
        }

        return true
    }

    validateField(field) {
        const fieldValue = this.state.post[field]

        if(!fieldValue || fieldValue.length === 0) {
            field = field.charAt(0).toUpperCase() + field.substring(1).toLowerCase()
            return `- ${field} is required`
        }

        return
    }

    render() {
        return (
            <div>
                <h3>New post</h3>
                <hr/>
                <PostForm
                    post={this.props.post}
                    onChange={this.handleChange.bind(this)}
                    onSave={this.savePost.bind(this)}
                    onCancel={this.cancel.bind(this)} />
            </div>
        )
    }
}

export default NewPost