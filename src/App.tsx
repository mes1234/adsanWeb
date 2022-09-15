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
import Contact from './components/Contact';
import Wip from './components/Wip';
function App() {
  return (
    <Container fluid>
      <Router>
        <Row >
          <Menu></Menu>
        </Row>
        <Row>
          <Container>
            <Routes>
              <Route path="/" element={<Wip name="Authme"></Wip>}>
              </Route>
              <Route path="/calcs" element={<Wip name="Authme"></Wip>}>
              </Route>
              <Route path="/contact" element={<Wip name="Authme"></Wip>}>
              </Route>
              {/* <Route path="/" element={<Welcome name="Authme"></Welcome>}>
                </Route>
                <Route path="/calcs" element={<Calc name="Authme"></Calc>}>
                </Route>
                <Route path="/contact" element={<Contact name="Authme"></Contact>}>
                </Route> */}
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