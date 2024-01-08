import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './scss/styles.scss';

const App = () => {

  return (
    <Container className="calculator_container" maxWidth="xl">
      <Header />
      <Grid container>
        <Grid item xs={12} xl={12}>
          <div id="content_wrap">
            <Calculator />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;