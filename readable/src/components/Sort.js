import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

class Sort extends Component {

    render() {
        const { sortBy, onSortChanged } = this.props;

        return (
            <Nav className="justify-content-end" pills={true}>
                <NavItem><span className="navbar-text">Sort by:&nbsp;</span></NavItem>
                <NavItem><NavLink href="#" onClick={e => onSortChanged('timestamp')} active={sortBy === 'timestamp'}>Date</NavLink></NavItem>
                <NavItem><NavLink href="#" onClick={e => onSortChanged('voteScore')} active={sortBy === 'voteScore'}>Votes</NavLink></NavItem>
                <NavItem></NavItem>
            </Nav>
        )
    }
}

export default Sort