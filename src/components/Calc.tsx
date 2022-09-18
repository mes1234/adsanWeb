import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Form, ListGroup, Button } from 'react-bootstrap';
import { NameApi, InboundDto } from "../clients/function/api";
import { Configuration } from '../clients/function';

var numeral = require('numeral');


//const API = 'http://192.168.0.32:7071/api'
const API = 'https://developmentfunction-dev.azurewebsites.net/api'

interface IDataInputs {
  powierzchniaZlewni: number,
  glebokoscWolna: number,
  glebokoscOgroduDeszczowego: number,
  qSplywuDla15lsha: number,
  qSplywuDla130lsha: number,
  qSplywuDla300lsha: number,

  minPowierzchnia: number,
  objetoscOpaduPierwszaFala: number,
  objetoscOpadu130lsha: number,
  objetoscOpadu300lsha: number,
  objetoscOgroduDeszczowego: number,
  statusPierwszaFala: boolean,
  statusOpad130lsha: boolean,
  statusOpad300lsha: boolean,
  calculationStatus: number
}


class Calc extends React.Component<IWelcome, IDataInputs> {


  state: IDataInputs = {
    powierzchniaZlewni: 800.0,
    glebokoscWolna: 0.1,
    glebokoscOgroduDeszczowego: 0.5,
    qSplywuDla15lsha: 1.2,
    qSplywuDla130lsha: 12,
    qSplywuDla300lsha: 24,

    minPowierzchnia: 80.0,
    objetoscOpaduPierwszaFala: 1.20,
    objetoscOpadu130lsha: 10.80,
    objetoscOpadu300lsha: 21.60,
    objetoscOgroduDeszczowego: 8.12,
    statusPierwszaFala: true,
    statusOpad130lsha: false,
    statusOpad300lsha: false,
    calculationStatus: 1
  }

  private powierzchniaZlewniChange = (e: { currentTarget: { value: string; }; }): void => {
    this.setState({ powierzchniaZlewni: parseFloat(e.currentTarget.value) });
  };

  private glebokoscWolnaChange = (e: { currentTarget: { value: string; }; }): void => {
    this.setState({ glebokoscWolna: parseFloat(e.currentTarget.value) });
  };

  private glebokoscOgroduDeszczowegoChange = (e: { currentTarget: { value: string; }; }): void => {
    this.setState({ glebokoscOgroduDeszczowego: parseFloat(e.currentTarget.value) });
  };

  private qSplywuDla15lshaChange = (e: { currentTarget: { value: string; }; }): void => {
    this.setState({ qSplywuDla15lsha: parseFloat(e.currentTarget.value) });
  };

  private qSplywuDla130lshaChange = (e: { currentTarget: { value: string; }; }): void => {
    this.setState({ qSplywuDla130lsha: parseFloat(e.currentTarget.value) });
  };

  private qSplywuDla300lshaChange = (e: { currentTarget: { value: string; }; }): void => {
    this.setState({ qSplywuDla300lsha: parseFloat(e.currentTarget.value) });
  };

  private handleCalculationState = (calcState: number): string => {
    switch (calcState) {
      case 1:
        return 'Wyniki poprawne'
      case 2:
        return 'Błąd geometrii zbiornika'
      case 3:
        return 'Błąd przepływów'
      default:
        return 'Błąd obliczeń'
    }
  };

  private handleCalculationStatus = (calcState: number, statusPierwszaFala: boolean, statusOpad130lsha: boolean, statusOpad300lsha: boolean): string => {

    if (calcState != 1)
      return 'Błąd obliczeń';

    if (statusPierwszaFala && statusOpad130lsha && statusOpad300lsha)
      return "Zbiornik przyjmie wszystko";

    if (statusPierwszaFala && statusOpad130lsha && !statusOpad300lsha)
      return "Bedzie ciężko ale da radę";

    if (statusPierwszaFala && !statusOpad130lsha && !statusOpad300lsha)
      return "Uciekać";

    if (!statusPierwszaFala && !statusOpad130lsha && !statusOpad300lsha)
      return "Zbiornik nie da rady wogóle";
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config: Configuration = {
      basePath: API
    };

    const api: NameApi = new NameApi(config);
    const data: InboundDto = {
      powierzchniaZlewni: this.state.powierzchniaZlewni,
      glebokoscWolna: this.state.glebokoscWolna,
      glebokoscOgroduDeszczowego: this.state.glebokoscOgroduDeszczowego,
      qSplywuDla15lsha: this.state.qSplywuDla15lsha,
      qSplywuDla130lsha: this.state.qSplywuDla130lsha,
      qSplywuDla300lsha: this.state.qSplywuDla300lsha

    }

    api.run(data)
      .then((result) => {
        this.setState({
          minPowierzchnia: result.minPowierzchnia,
          objetoscOpaduPierwszaFala: result.objetoscOpaduPierwszaFala,
          objetoscOpadu130lsha: result.objetoscOpadu130lsha,
          objetoscOpadu300lsha: result.objetoscOpadu300lsha,
          objetoscOgroduDeszczowego: result.objetoscOgroduDeszczowego,
          statusPierwszaFala: result.statusPierwszaFala,
          statusOpad130lsha: result.statusOpad130lsha,
          statusOpad300lsha: result.statusOpad300lsha,
          calculationStatus: result.calculationStatus

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
              <Card.Header><h2><strong>Kalkulator Lorem Ipsum</strong></h2></Card.Header>
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
                  <Form.Group controlId="powierzchniaZlewni">
                    <Form.Label>powierzchniaZlewni</Form.Label>
                    <Form.Control type="number" value={this.state.powierzchniaZlewni} onChange={this.powierzchniaZlewniChange} />
                    <Form.Text >
                      powierzchniaZlewni
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="glebokoscWolna">
                    <Form.Label>glebokoscWolna</Form.Label>
                    <Form.Control type="number" value={this.state.glebokoscWolna} onChange={this.glebokoscWolnaChange} />
                    <Form.Text >
                      glebokoscWolna
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="glebokoscOgroduDeszczowego">
                    <Form.Label>glebokoscOgroduDeszczowego</Form.Label>
                    <Form.Control type="number" value={this.state.glebokoscOgroduDeszczowego} onChange={this.glebokoscOgroduDeszczowegoChange} />
                    <Form.Text >
                      glebokoscOgroduDeszczowego
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="qSplywuDla15lsha">
                    <Form.Label>qSplywuDla15lsha</Form.Label>
                    <Form.Control type="number" value={this.state.qSplywuDla15lsha} onChange={this.qSplywuDla15lshaChange} />
                    <Form.Text >
                      qSplywuDla15lsha
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="qSplywuDla130lsha">
                    <Form.Label>qSplywuDla130lsha</Form.Label>
                    <Form.Control type="number" value={this.state.qSplywuDla130lsha} onChange={this.qSplywuDla130lshaChange} />
                    <Form.Text >
                      qSplywuDla130lsha
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="qSplywuDla300lsha">
                    <Form.Label>qSplywuDla300lsha</Form.Label>
                    <Form.Control type="number" value={this.state.qSplywuDla300lsha} onChange={this.qSplywuDla300lshaChange} />
                    <Form.Text >
                      qSplywuDla300lsha
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
                <p><strong>{this.handleCalculationState(this.state.calculationStatus)}</strong></p>
                <p><strong>{this.handleCalculationStatus(this.state.calculationStatus, this.state.statusPierwszaFala, this.state.statusOpad130lsha, this.state.statusOpad300lsha)}</strong></p>

                <ListGroup>
                  <ListGroup.Item>minPowierzchnia: {numeral(this.state.minPowierzchnia).format('0.00')}</ListGroup.Item>
                  <ListGroup.Item>objetoscOpaduPierwszaFala: {numeral(this.state.objetoscOpaduPierwszaFala).format('0.00')}</ListGroup.Item>
                  <ListGroup.Item>objetoscOpadu130lsha: {numeral(this.state.objetoscOpadu130lsha).format('0.00')}</ListGroup.Item>
                  <ListGroup.Item>objetoscOpadu300lsha: {numeral(this.state.objetoscOpadu300lsha).format('0.00')}</ListGroup.Item>
                  <ListGroup.Item>objetoscOgroduDeszczowego: {numeral(this.state.objetoscOgroduDeszczowego).format('0.00')}</ListGroup.Item>
                </ListGroup>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container >
    );
  }
}
export default Calc;