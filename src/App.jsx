import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Calculator from './components/Calculator';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import './scss/styles.scss';

const App = () => {
  const [showSidebar, toggleShowSidebar] = useState(false);

  const showInstructions = () => {
    toggleShowSidebar(!showSidebar);
  }

  return (
    <Container className="calculator_container">
      <Grid container>
        <Grid item xs={12} xl={9}>
          <div id="content_wrap">
            <Header />
            <Calculator />
          </div>
        </Grid>
        <Grid item className="sidebar_container" xs={12} xl={3}>
          <InfoIcon type="button" onClick={() => showInstructions()} />
          {
            showSidebar && <Sidebar />
          }
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;