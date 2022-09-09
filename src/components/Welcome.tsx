import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, CardImg, ListGroup } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
      <Container  >
        <Row>
          <Col md={6} >
            <Card className='card card-common h-100 border-0' >
              <Card.Header><h2><strong>O Mnie</strong></h2></Card.Header>
              <Card.Body>
                <img src="https://random.imagecdn.app/500/550" className='card-image-common'></img>
                <Card.Text>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} >
            <Card className='card card-common h-100 border-0' >
              <Card.Header><h2><strong>Oferta</strong></h2></Card.Header>
              <Card.Body>
                <Card.Text>
                  <ListGroup >
                    <ListGroup.Item><FontAwesomeIcon icon={faRuler} />  Cras justo odio</ListGroup.Item>
                    <ListGroup.Item><FontAwesomeIcon icon={faCalculator} />  Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item><FontAwesomeIcon icon={faRuler} />  Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item><FontAwesomeIcon icon={faCalculator} />  Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item><FontAwesomeIcon icon={faRuler} />  Vestibulum at eros</ListGroup.Item>
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
export default Welcome;