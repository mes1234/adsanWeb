import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import Cookies from 'universal-cookie';


class Footer extends React.Component {
    render() {
        return (
            <div className='footer bg-light' >
                <Container>
                    <p>Anna Dąbrowicz 2022</p>
                </Container>
            </div >
        );
    }
}
export default Footer;