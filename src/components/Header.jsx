import InfoIcon from '@material-ui/icons/Info';

const Header = () => {
  
  const showInstructions = () => {
    console.log('Im here');
  }

  return (
    <header>
        <InfoIcon type="button" onClick={() => showInstructions()} />
        <h1>XP Calculator</h1>
    </header>
  );
}

export default Header;
