import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';





class Welcome extends React.Component<IWelcome> {
  render() {
    return (
      <div >
        <Container  >
          <Card className='card card-common h-100 border-0' >
            <Card.Header><h2><strong>O Mnie</strong></h2></Card.Header>
            <img src="ania.jpg" className='card-image-common' ></img>
            <Card.Body>
              <Card.Text>
                <p>Projektantka instalacji sanitarnych z wieloletnim doświadczeniem przy projektowaniu obiektów użyteczności publicznej i mieszkaniowej.
                  Biegła sądowa. Odpowiada za wykonywanie projektów z zakresu instalacji wodociągowo-kanalizacyjnych.</p>
                <p>Wdraża idee proekologiczne w budownictwie. Interesuję się zagospodarowaniem i wykorzystaniem wody deszczowej.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Welcome;