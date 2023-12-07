import './HomepageHeader.css';
import Navigation from '../Navigation/Navigation'
import imageLogo from '../../images/logo.svg';

function HomepageHeader () {
  return (
    <header className="homepage_header">
      <a href="#" className="homepage_header__logo_link"><img className="homepage_header__logo" src={imageLogo} alt="Логотип" /></a>
      <div className="homepage_header_long">
        <Navigation />
      </div>

    </header>
  );
}

export default HomepageHeader;
