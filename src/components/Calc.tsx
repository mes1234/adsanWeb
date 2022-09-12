import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Badge, Card, Form, ListGroup, Button } from 'react-bootstrap';
import { NameApi, InboundDto } from "../clients/function/api";
import { Configuration } from '../clients/function';



// const API = 'http://192.168.0.32:7071/api'
const API = 'https://developmentfunction.azurewebsites.net/api'

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

  private handleIntChange = (e: { currentTarget: { value: string; }; }) => {
    this.setState({ intValueIn: parseInt(e.currentTarget.value) });
  };

  private handleFloatChange = (e: { currentTarget: { value: string; }; }): void => {
    this.setState({ floatValueIn: parseFloat(e.currentTarget.value) });
  };

  private handleStringChange = (e: { currentTarget: { value: any; }; }): void => {
    this.setState({ stringValueIn: e.currentTarget.value });
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config: Configuration = {
      basePath: API
    };
    alert("I am an alert box!");

    const api: NameApi = new NameApi(config);
    const data: InboundDto = {
      intValue: this.state.intValueIn,
      floatValue: this.state.floatValueIn,
      stringValue: this.state.stringValueIn
    }

    api.run(data)
      .then((result) => {
        this.setState({
          intValueOut: result.intValue,
          floatValueOut: result.floatValue,
          stringValueOut: result.stringValue

        })
      })
      .catch((error) => {
      });

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
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                  <Form.Group controlId="intValue">
                    <Form.Label>Dane 1</Form.Label>
                    <Form.Control type="number" value={this.state.intValueIn} onChange={this.handleIntChange} />
                    <Form.Text >
                      Pomocne informacje
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="floatValue">
                    <Form.Label>Dane 1</Form.Label>
                    <Form.Control type="number" value={this.state.floatValueIn} onChange={this.handleFloatChange} />
                    <Form.Text >
                      Pomocne informacje
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="stringValue">
                    <Form.Label>Dane 1</Form.Label>
                    <Form.Control type="text" value={this.state.stringValueIn} onChange={this.handleStringChange} />
                    <Form.Text >
                      Pomocne informacje
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit"  >
                    Oblicz
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className='card card-common h-100 border-0'>
              <Card.Header><h2><strong>Wyniki</strong></h2></Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>intValueIn  {this.state.intValueOut}</ListGroup.Item>
                  <ListGroup.Item>floatValueOut   {this.state.floatValueOut}</ListGroup.Item>
                  <ListGroup.Item>stringValueOut  {this.state.stringValueOut}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Calc;