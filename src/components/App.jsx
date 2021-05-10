import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Calculator from './components/Calculator';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

const App = () => {
  return (
    <Container fluid>
      <Row id="content_wrap">
        <Col xs={12} xl={7}>
          <Header />
          <Calculator />
        </Col>
        <Col className="sidebar_container" xs={12} xl={5}>
          <Sidebar />
        </Col>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;