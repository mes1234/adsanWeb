import React, { useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge, Card, Form, ListGroup } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { NameApi, InboundDto } from "../clients/function/api";
import { Configuration } from '../clients/function';



const API_GRPC = 'https://smartfirdge.azurewebsites.net'

interface IDataInputs {
  intValueIn: number,
  floatValueIn: number,
  stringValueIn: string

  intValueOut: number,
  floatValueOut: number,
  stringValueOut: string
}

class Calc extends React.Component<IWelcome, IDataInputs> {


  state: IDataInputs = {
    intValueIn: 11,
    floatValueIn: 11.11,
    stringValueIn: "none",
    intValueOut: 11,
    floatValueOut: 11.11,
    stringValueOut: "none"
  }

  async calculate() {

    const config: Configuration = {
      basePath: "http://localhost:7071/api"
    };

    const api = new NameApi(config);
    const data: InboundDto = {
      intValue: 11,
      floatValue: 11.2,
      stringValue: "hello"
    }

    api.run(data)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      intValueOut: this.state.intValueIn * 2,
      floatValueOut: this.state.floatValueIn * 2,
      stringValueOut: this.state.stringValueIn.toUpperCase()

    })

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
          <Col md={6}>
            <Card className='card card-common h-100 border-0'>
              <Card.Header><h2><strong>Parametry</strong></h2></Card.Header>
              <Card.Body>
                <Form >
                  <Form.Group controlId="intValue">
                    <Form.Label>Dane 1</Form.Label>
                    <Form.Control type="number" value={this.state.intValueIn} onChange={(e) => {
                      this.calculate();
                      this.setState({ intValueIn: parseInt(e.target.value) });
                    }} />
                    <Form.Text >
                      Pomocne informacje
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="floatValue">
                    <Form.Label>Dane 1</Form.Label>
                    <Form.Control type="number" value={this.state.floatValueIn} onChange={(e) => {
                      this.calculate();
                      this.setState({ floatValueIn: parseFloat(e.target.value) });
                    }} />
                    <Form.Text >
                      Pomocne informacje
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="stringValue">
                    <Form.Label>Dane 1</Form.Label>
                    <Form.Control type="text" value={this.state.stringValueIn} onChange={(e) => {
                      this.calculate();
                      this.setState({ stringValueIn: e.target.value });
                    }} />
                    <Form.Text >
                      Pomocne informacje
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className='card card-common h-100 border-0'>
              <Card.Header><h2><strong>Wyniki</strong></h2></Card.Header>
              <Card.Body>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item><Badge bg="secondary">intValueIn</Badge>   {this.state.intValueOut}</ListGroup.Item>
                    <ListGroup.Item><Badge bg="secondary">floatValueOut</Badge>   {this.state.floatValueOut}</ListGroup.Item>
                    <ListGroup.Item><Badge bg="secondary">stringValueOut</Badge>   {this.state.stringValueOut}</ListGroup.Item>
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