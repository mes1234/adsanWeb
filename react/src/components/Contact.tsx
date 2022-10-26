import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, ListGroup } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const API_GRPC = 'https://smartfirdge.azurewebsites.net'



class Contact extends React.Component<IWelcome> {
  componentDidMount() {
    try {
      const cookies = new Cookies();
      console.log(cookies.get('myCat')); // Pacman

    }
    catch (e) { }
  }
  render() {
    return (
      <div >
        <Container  >
          <Row>
            <Col >
              <Card className='card card-common h-100 border-0' >
                <Card.Header><h2><strong>Kontakt</strong></h2></Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ListGroup >
                      <ListGroup.Item><FontAwesomeIcon icon={faMailBulk} />    biuro.adsan@gmail.com</ListGroup.Item>
                      <ListGroup.Item><FontAwesomeIcon icon={faPhone} />   660 094 560</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='card card-common h-100 border-0'>
                <Card.Header><h2><strong>Social media</strong></h2></Card.Header>
                <Card.Body>
                  <Card.Text>
                    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="anna-dąbrowicz-94554546" data-version="v1"></div>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>

    );
  }
}
export default Contact;