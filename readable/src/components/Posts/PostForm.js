import React, { Component } from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import Api from '../../api/categories'

class PostForm extends Component {

    state = {
        categories: []
    };

    componentDidMount() {
        Api.fetchCategories()
            .then((categories) => this.setState({ categories: categories }))
    }

    render() {
        let { title, body, author } = this.props.post
        let { categories } = this.state

        return (
            <form onSubmit={this.props.onSubmit}>
                <FormGroup>
                    <Label for="postTitle">Title</Label>
                    <Input type="text" name="title" id="postTitle" placeholder="Post title" defaultValue={title} onChange={this.props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="postBody">Body</Label>
                    <Input type="textarea" rows="10" name="body" id="postBody" placeholder="Post body"  defaultValue={body} onChange={this.props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="postAuthor">Author</Label>
                    <Input type="text" name="author" id="postAuthor" placeholder="Post author"  defaultValue={author} onChange={this.props.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="postCategory">Category</Label>
                    <Input type="select" name="category" id="postCategory" onChange={this.props.onChange}>
                        {categories.map((category, index) => (
                            <option key={index}>{category.name}</option>
                        ))}
                    </Input>
                </FormGroup>
                <hr/>
                <div className="float-right">
                    <Button className="mx-1" color="secondary" onClick={this.props.onCancel}>Cancel</Button>
                    <Button className="mx-1" color="primary" onClick={this.props.onSave}>Save</Button>
                </div>
            </form>
        )
    }

}

export default PostForm