import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import {  Nav, Navbar } from 'react-bootstrap';
import { faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Menu extends React.Component {
    render() {
        return (
            <Container className='menu '>
                <Navbar variant="light" className='navbar py-0' >
                    <Navbar.Brand  href="/"  ><h1 className="logo py-0 ">Anna<br></br> Dąbrowicz</h1></Navbar.Brand>
                    <Nav >
                        <Nav.Link href="/"><FontAwesomeIcon icon={faAddressCard} /> Info</Nav.Link>
                        <Nav.Link href="/calcs"><FontAwesomeIcon icon={faSquareRootVariable} /> Kalkulator</Nav.Link>
                        <Nav.Link href="/contact"><FontAwesomeIcon icon={faEnvelope} /> Kontakt</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        );
    }
}
export default Menu;