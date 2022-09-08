import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const API_GRPC = 'https://smartfirdge.azurewebsites.net'



class Welcome extends React.Component<IWelcome> {
  componentDidMount() {
    try {
      const cookies = new Cookies();
      console.log(cookies.get('myCat')); // Pacman

    }
    catch (e) { }
  }
  render() {
    return (
      <div className='content' >
        <Container  >
          <Row>
            <Col >
              <Card className='card mb-3 h-100 ' >
                <Card.Body>
                  <Card.Img variant="top" src="ania.jfif" className='mb-3' style={{width:200}}/>
                  <Card.Title>O Mnie</Card.Title>
                  <Card.Text>
                    <p><FontAwesomeIcon icon={['fab', 'apple']} /> Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                    <p> Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                    <p> Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                    <p> Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                    <p> Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col>
              <Card className='card h-100'>
                <Card.Body>
                  <Card.Title>Oferta</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
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
export default Welcome;