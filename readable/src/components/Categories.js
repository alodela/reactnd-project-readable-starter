import React, { Component } from 'react'
import { NavLink as RRNavLink } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Api from '../api/categories'

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
                <Nav pills={true} vertical>
                    <NavItem>
                        <NavLink tag={RRNavLink} activeClassName="active" exact to="/">All</NavLink>
                    </NavItem>
                    {
                        categories.map((category) => {
                            return (
                                <NavItem key={category.name}>
                                    <NavLink tag={RRNavLink} to={`/${category.path}`} activeClassName='active'>{category.name}</NavLink>
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