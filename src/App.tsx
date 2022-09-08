import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Welcome from "./components/Welcome";
import Calc from "./components/Calc";
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Menu from './components/Menu';
import { Row } from 'react-bootstrap';
import Footer from './components/Footer';
function App() {
  return (
    <Container  className="global">
      <Router>
        <div  >
          <Row>
            <Menu></Menu>
          </Row>
          <Row>
            <Container >
              <Routes>
                <Route path="/" element={<Welcome name="Authme"></Welcome>}>
                </Route>
                <Route path="/calc" element={<Calc name="Authme"></Calc>}>
                </Route>
              </Routes>
            </Container>
          </Row>
          <Row>
            <Footer></Footer>
          </Row>
        </div>
      </Router>
    </Container>
  );
}

export default App;