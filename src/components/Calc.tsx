import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Form, ListGroup, Button } from 'react-bootstrap';
import { NameApi, InboundDto } from "../clients/function/api";
import { Configuration } from '../clients/function';

var numeral = require('numeral');

const API = 'https://developmentfunction-dev.azurewebsites.net/api'
// const API = 'http://localhost:7071/api'

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
  calculationStatus: string
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
    calculationStatus: "Init"
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

  private handleCalculationState = (calcState: string): string => {
    switch (calcState) {
      case 'Ok':
        return 'Wyniki poprawne'
      case 'GeometriaBledna':
        return 'Błąd geometrii zbiornika'
      case 'BlednePrzeplywy':
        return 'Wpisz poprawne przepływy'
      case 'Init':
        return 'Wpisz dane'
      default:
        return '   '
    }
  };

  private handleCalculationStatus = (calcState: string, statusPierwszaFala: boolean, statusOpad130lsha: boolean, statusOpad300lsha: boolean): string => {

    if (calcState == 'Init')
      return 'Wciśnij \'Oblicz\'';

    if (calcState != 'Ok')
      return 'Błąd obliczeń';

    if (statusPierwszaFala && statusOpad130lsha && statusOpad300lsha)
      return "Ogród deszczowy przejmie opad nawalny. Nie przyjmie opadów ponadnormatywnych";

    if (statusPierwszaFala && statusOpad130lsha && !statusOpad300lsha)
      return "Ogród deszczowy przejmie \"przeciętny opad\". Wyleje podczas opadu ponadnormatywnego";

    if (statusPierwszaFala && !statusOpad130lsha && !statusOpad300lsha)
      return "Ogród deszczowy przyjmie pierwszą falę spływu. Wyleje podczas przeciętnych opadów. Zmień gabaryty lub dodaj inne rozwiązanie retencyjne";

    if (!statusPierwszaFala && !statusOpad130lsha && !statusOpad300lsha)
      return "CO TUTAJ?";
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
          calculationStatus: result.calculationStatus.toString()

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
              <Card.Header><h2><strong>Kalkulator</strong></h2></Card.Header>
              <Card.Body>
                <Card.Text>
                Poniższy kalkulator służy do wstępnego doboru wielkości suchego ogrodu deszczowego.
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
        <Row>
          <Col>
            <Card className='card card-common h-100 border-0'>
              <Card.Body>
                <Card.Text>
                Jest to uproszczony kalkulator doboru suchego ogrodu deszczowego. Nie uwzględnia czynników, jak: infiltracja, straty przepływu, odparowywanie itp.<br></br> Wykonane na bazie wytycznych miasta Londyn.               
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container >
    );
  }
}
export default Calc;