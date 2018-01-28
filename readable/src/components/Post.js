import React, { Component } from 'react'
import { Row, Col, Card, CardText, CardTitle, CardBody, h1 } from 'reactstrap'

class Post extends Component {
    state = {
    }

    render() {
        let { title, body } = this.props.post;

        return (
            <Row>
                <Col>
                    <h5>
                        <a href="#">{title}</a><br/>
                        <small className="text-muted">By {"Test"}</small>
                    </h5>

                    <p>{body}</p>
                    <hr />
                </Col>
            </Row>
        );
    }
}

export default Post;