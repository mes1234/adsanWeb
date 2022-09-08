import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert, Badge, Button, Card, Form } from 'react-bootstrap';
import Cookies from 'universal-cookie';



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
      <div >
        <Container>
          <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Obliczenia</Card.Title>
                <Card.Text>
                  Lore ipsum
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className='h-100'>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="Dane1">
                      <Form.Label>Dane 1</Form.Label>
                      <Form.Control type="number" placeholder="1.23" />
                      <Form.Text className="text-muted">
                        Pomocne informacje
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Dane1">
                      <Form.Label>Dane 1</Form.Label>
                      <Form.Control type="number" placeholder="1.23" />
                      <Form.Text className="text-muted">
                        Pomocne informacje
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Dane1">
                      <Form.Label>Dane 1</Form.Label>
                      <Form.Control type="number" placeholder="1.23" />
                      <Form.Text className="text-muted">
                        Pomocne informacje
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Dane1">
                      <Form.Label>Dane 1</Form.Label>
                      <Form.Control type="number" placeholder="1.23" />
                      <Form.Text className="text-muted">
                        Pomocne informacje
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='card h-100'>
                <Card.Body>
                  <Card.Title>Wynik</Card.Title>
                  <Card.Text>
                    <p><Badge bg="secondary">Wynik</Badge>  1.23</p>
                    <p><Badge bg="secondary">Wynik</Badge>  1.23</p>
                    <p><Badge bg="secondary">Wynik</Badge>  1.23</p>
                    <p><Badge bg="secondary">Wynik</Badge>  1.23</p>
                    <p><Badge bg="secondary">Wynik</Badge>  1.23</p>
                    <p><Badge bg="secondary">Wynik</Badge>  1.23</p>
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
export default Calc;