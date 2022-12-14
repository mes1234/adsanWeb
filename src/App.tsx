import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Welcome from "./components/Welcome";
import Calc from "./components/Calc";
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Menu from './components/Menu';
import { Image, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <Container fluid>
      <img src="rain.jpg" className='bg' ></img>
      <Router>
        <Row >
          <Menu></Menu>
        </Row>
        <Row>
          <Container>
            <Routes>
              <Route path="/" element={<Welcome name="Authme"></Welcome>}>
              </Route>
              <Route path="/calcs" element={<Calc name="Authme"></Calc>}>
              </Route>
              <Route path="/contact" element={<Contact name="Authme"></Contact>}>
              </Route>
            </Routes>
          </Container>
        </Row>
        <Row>
          <Footer></Footer>
        </Row>
      </Router>
    </Container>
  );
}

export default App;