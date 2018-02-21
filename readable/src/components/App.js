import React from 'react'
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap'
import Categories from '../components/Categories'

const App = props => ({
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
						{props.children}
					</Col>
				</Row>
			</Container>
		)
	}
})

export default App
