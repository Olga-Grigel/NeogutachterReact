import './Navigation.css';
import pencil from '../../images/pencil.svg';
import telephone from '../../images/telephone.svg';
import partner from '../../images/partner.svg';
import search from '../../images/search.svg';
import login from '../../images/login.svg';


function Navigation() {
  return (
        <ul className="navigation">
          <li className="navigation__list"><a href='#' className="navigation__link navigation__link_menu"><img className="navigation__icon" src={pencil} alt="immage pencil" />{'Online anfrage'}</a></li>
          <li className="navigation__list"><a href='#' className="navigation__link navigation__link_menu"><img className="navigation__icon" src={telephone} alt="immage telephone" />{'Telefonisch anfragen'}</a></li>
          <li className="navigation__list"><a href='#' className="navigation__link navigation__link_menu"><img className="navigation__icon" src={partner} alt="immage partner" />{'Partner verden'}</a></li>
          <li className="navigation__list"><a href='#' className="navigation__link navigation__link_menu">{'Blog'}</a></li>
          <li className="navigation__list navigation__module-icon">
              <ul className="navigation">
                <li className="navigation__list"><a href='#' className="navigation__link"><img className="" src={search} alt="immage search" /></a></li>
                <li className="navigation__list"><a href='#' className="navigation__link"><img className="navigation__profile" src={login} alt="immage login" /></a></li>
              </ul>
          </li>
            
        </ul>
  );
}

export default Navigation;