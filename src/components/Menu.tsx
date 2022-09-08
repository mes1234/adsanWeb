import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import { Badge,  Nav, NavbarBrand  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Menu extends React.Component {
    render() {
        return (
            <div className='header'>
                <Container >
                    <Nav variant="" defaultActiveKey="/home">
                        <NavbarBrand className='logo' >
                        ADSAN
                            </NavbarBrand>
                        <Nav.Item>
                            <Nav.Link href="/"><Badge bg='primary'>Info</Badge></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/calc"><Badge bg='primary'>Kalkulator</Badge></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div >
        );
    }
}
export default Menu;