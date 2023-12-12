import './Navigation.css';
import NavigationLink from "../NavigationLink/NavigationLink.jsx"
import pencil from '../../images/pencil.svg';
import telephone from '../../images/telephone.svg';
import partner from '../../images/partner.svg';
import search from '../../images/search.svg';
import login from '../../images/login.svg';


function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__list"><NavigationLink icon={pencil} text={"Online anfrage"} /></li>
      <li className="navigation__list"><NavigationLink icon={telephone} text={"Telefonisch anfragen"} /></li>
      <li className="navigation__list"><NavigationLink icon={partner} text={"Partner verden"} /></li>
      <li className="navigation__list"><a href='#' className="navigation__link navigation__linkmargin navigation__link_menu">{'Blog'}</a></li>
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