import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert, Badge, Button, Card, Form, ListGroup } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { faCalculator, faRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const API_GRPC = 'https://smartfirdge.azurewebsites.net'



class Calc extends React.Component<IWelcome> {
  componentDidMount() {
    try {
      const cookies = new Cookies();
      console.log(cookies.get('myCat')); // Pacman

    }
    catch (e) { }
  }
  render() {
    return (
        <Container>
          <Row>
            <Col>
              <Card className='card card-common h-100 border-0'>
              <Card.Header><h2><strong>Kalkulator wydajnosci kury sciolkowej</strong></h2></Card.Header>
                <Card.Body>
                  <Card.Text>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col  md={6}>
              <Card className='card card-common h-100 border-0'>
              <Card.Header><h2><strong>Parametry</strong></h2></Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="Dane1">
                      <Form.Label>Dane 1</Form.Label>
                      <Form.Control type="number" placeholder="1.23" />
                      <Form.Text >
                        Pomocne informacje
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="Dane1">
                      <Form.Label>Dane 1</Form.Label>
                      <Form.Control type="number" placeholder="1.23" />
                      <Form.Text >
                        Pomocne informacje
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="Dane1">
                      <Form.Label>Dane 1</Form.Label>
                      <Form.Control type="number" placeholder="1.23" />
                      <Form.Text >
                        Pomocne informacje
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="Dane1">
                      <Form.Label>Dane 1</Form.Label>
                      <Form.Control type="number" placeholder="1.23" />
                      <Form.Text >
                        Pomocne informacje
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col  md={6}>
              <Card className='card card-common h-100 border-0'>
              <Card.Header><h2><strong>Wyniki</strong></h2></Card.Header>
                <Card.Body>
                  <Card.Text>
                  <ListGroup>
                      <ListGroup.Item><Badge bg="secondary">Wynik</Badge>  1.23</ListGroup.Item>
                      <ListGroup.Item><Badge bg="secondary">Wynik</Badge>  1.23</ListGroup.Item>
                      <ListGroup.Item><Badge bg="secondary">Wynik</Badge>  1.23</ListGroup.Item>
                      <ListGroup.Item><Badge bg="secondary">Wynik</Badge>  1.23</ListGroup.Item>
                      <ListGroup.Item><Badge bg="secondary">Wynik</Badge>  1.23</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
export default Calc;