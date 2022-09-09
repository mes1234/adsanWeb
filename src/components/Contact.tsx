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
                <Card.Header><h2><strong>Współpraca</strong></h2></Card.Header>
                <Card.Body>
                  <Card.Text>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
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