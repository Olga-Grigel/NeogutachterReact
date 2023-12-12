import './NavigationLink.css';


function NavigationLink({ icon, text }) {
  return (
    <a href='#' className="navigation__link navigation__linkmargin"><img className="navigation__icon" src={icon} alt="immage icon" />{text}</a>
  );
}

export default NavigationLink;