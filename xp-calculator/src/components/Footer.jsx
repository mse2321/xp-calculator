
const Footer = () => {
  const copyrightName = 'ME Innovation';
  const newDate = new Date()
  const year = newDate.getFullYear();

  return (
      <footer>
          <small>
              &copy;{year} 
              <a href="http://www.meinnovation.net" target="_blank" rel="noopener noreferrer">{copyrightName}</a>
          </small>
      </footer>
  );
}

export default Footer;