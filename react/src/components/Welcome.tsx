import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'





class Welcome extends React.Component<IWelcome> {
  render() {
    return (
        <Container >
          <Card className='card card-common h-100 border-0' >
            <Card.Header><h2><strong>O Mnie</strong></h2></Card.Header>
            <Image src="ania.jpg" className='card-image-common'></Image>
            <Card.Body>
              <Card.Text>
                Projektantka instalacji sanitarnych z wieloletnim doświadczeniem przy projektowaniu obiektów użyteczności publicznej i mieszkaniowej.<br></br>
                Biegła sądowa. Odpowiada za wykonywanie projektów z zakresu instalacji wodociągowo-kanalizacyjnych.<br></br>
                Wdraża idee proekologiczne w budownictwie. Interesuję się zagospodarowaniem i wykorzystaniem wody deszczowej.<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
    );
  }
}
export default Welcome;