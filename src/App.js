import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
      </Row>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
      </Row>
      <Row>
        <Col sm = {8} >1</Col>
        <Col sm = {4} >2</Col>
      </Row>
      <Row>
        <Col>1</Col>
        <Col>
        <Row>
          <Col>2</Col>
        </Row>
        <Row>
          <Col>3</Col>
        </Row>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>1</Col>
      </Row>
      <Row>
        <Col>2</Col>
        <Col>3</Col>
      </Row>
      <Row>
        <Col>4</Col>
      </Row>
    </Container>
  );
}

export default App;
