import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';


class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <Container>
                    <span><strong>Anna Dąbrowicz 2022</strong></span>
                </Container>
            </div >
        );
    }
}
export default Footer;