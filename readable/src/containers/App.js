import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from 'reactstrap';
import Categories from '../components/Categories';
import PostsContainer from '../containers/PostsContainer';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
		<Container>
			<Navbar>
				<NavbarBrand>
					Readable
				</NavbarBrand>
			</Navbar>
			<Row>
				<Col className="d-none d-sm-block d-sx-block" md="2">
					<Categories />
				</Col>
				<Col sm="10">
					<PostsContainer />
				</Col>
			</Row>
      	</Container>
    );
  }
}

export default App;
