import React from 'react'
import { Label, Input, Button } from 'reactstrap'

const CommentForm = props => {
    const {
        comment,
        saveLabel = "Save",
        showCancel = true,
        onCancel,
        onSubmit,
        onChange,
    } = props
    const { body = "", author = "" } = comment

    return (
        <form onSubmit={onSubmit}>
            <div className="form-row align-items-center">
                <div className="col-sm-9 my-2">
                    <Label for="commentBody" className="mr-sm-2 sr-only">Body</Label>
                    <Input component="input" type="text" name="body" id="commentBody" placeholder="Comment body" bsSize="sm" value={body} onChange={onChange} />
                </div>
                <div className="col-sm-3 my-2">
                    <Label for="postAuthor" className="mr-sm-2 sr-only">Author</Label>
                    <Input type="text" name="author" id="postAuthor" placeholder="Post author"  bsSize="sm" value={author} onChange={onChange} />
                </div>
            </div>
            <div className="float-right">
                {showCancel && <Button className="mx-1" color="secondary" size="sm" onClick={onCancel}>Cancel</Button>}
                <Button type="submit" className="mx-1" color="primary" size="sm">{saveLabel}</Button>
            </div>
        </form>
    );
}

export default CommentForm