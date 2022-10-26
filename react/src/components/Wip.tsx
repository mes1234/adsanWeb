import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, CardImg, ListGroup } from 'react-bootstrap';
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





class Wip extends React.Component<IWelcome> {
  render() {
    return (
      <div >
        <Container  >
            <Card className='card card-common h-100 border-0' >
              <Card.Header><h2><strong>WIP</strong></h2></Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>WORK IN PROGRESS</p>
                </Card.Text>
              </Card.Body>
            </Card>
        </Container>
      </div>
    );
  }
}
export default Wip;