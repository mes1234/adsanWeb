import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import Cookies from 'universal-cookie';


class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <Container >
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/">Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/calc">Kalkulator</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div >
        );
    }
}
export default Menu;