import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Api from '../utils/api'

class Categories extends Component {
    state = {
        categories: []
    };

    componentDidMount() {
        Api.fetchCategories()
            .then((categories) => this.setState({ categories: categories }))
    }

    render() {
        const { categories } = this.state

        return (
            <div>
                <h3>Categories</h3>
                <hr />
                <Nav vertical>
                    <NavItem>
                        <NavLink href="/">All</NavLink>
                    </NavItem>
                    {
                        categories.map((category) => {
                            return (
                                <NavItem key={category.name}>
                                    <NavLink href={`/categories/${category.path}/posts`}>{category.name}</NavLink>
                                </NavItem>
                            );
                        })
                    }
                </Nav>
            </div>
        )
    }
}

export default Categories