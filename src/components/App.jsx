import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Calculator from './components/Calculator';
import { Container, Grid } from 'material-ui'
import './styles.scss';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Grid container id="content_wrap">
        <Grid item xs={12} xl={7}>
          <Header />
          <Calculator />
        </Grid>
        <Grid item className="sidebar_container" xs={12} xl={5}>
          <Sidebar />
        </Grid>
        <Footer />
      </Grid>
    </Container>
  );
}

export default App;