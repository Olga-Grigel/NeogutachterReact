import './HomepageHeader.css';
import Navigation from '../Navigation/Navigation.jsx'
import imageLogo from '../../images/logo.svg';

function HomepageHeader() {
  return (
    <header className="header">
      <a href="#" className="header__logolink"><img className="header__logo" src={imageLogo} alt="Логотип" /></a>
      <div className="header__navigation">
        <Navigation />
      </div>

    </header>
  );
}

export default HomepageHeader;
