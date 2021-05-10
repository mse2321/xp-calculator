import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const showInstructions = () => {
    console.log('Im here');
  }

  return (
    <header>
        <FontAwesomeIcon type="button" icon={faInfoCircle} onClick={() => showInstructions()} />
        <h1>XP Calculator</h1>
    </header>
  );
}

export default Header;
