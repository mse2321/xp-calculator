import Grid from '@material-ui/core/Grid';

const Header = () => {
  return (
    <header>
      <Grid container>
        <Grid item xs={12} xl={12}>
          <h1>XP Calculator</h1>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
