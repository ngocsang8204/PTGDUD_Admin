import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Container
        style={{
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Row>
          <Col xs="3" style={{ borderRight: "1px solid #e5e7eb" }}>
            <Nav />
          </Col>
          <Col xs="9">
            <Header />
            <Main />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
