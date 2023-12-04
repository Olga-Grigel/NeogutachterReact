import './HomePage.css';
import ImmageHeader from '../ImmageHeader/ImmageHeader'
//const immage1 = require("../../images/photo1.png")
import image1 from '../../images/photo1.png';
import image2 from '../../images/photo2.png';
import image3 from '../../images/photo3.png';

function HomePageHeader() {
  return (
    <div className="homepage">
      <div className="homepage_blockwithbutton">
        <div className="homepage_blockwithtext">
          <h1 className="homepage_title homepage_margin">Hier den besten <br/>Kfz-Gutachter finden!</h1>
          <h2 className="homepage_title homepage_highlighting">Wir übernehmen</h2>
          <h2 className="homepage_title homepage_highlighting">das für dich.</h2>
        </div>
        <div className="homepage_containbutton"> 
          <button className="homepage_button"><p className="homepage_button-text">Gutachter kostenlos anfragen</p><div className="homepage_button-arrow"></div></button>
        </div>
        <div className="homepage_arrow"></div>
      </div>
      <div className="homepage_containwithimmages">        
      <div className="homepage_containwithimmage"><ImmageHeader path = {image1} /></div>
        {/* <ImmageHeader path = {image1} /> */}
        {/* { <ImmageHeader path = {image2} />}
        { <ImmageHeader path = {image3} />} */}
        
      </div>
      
    </div>
  );
}

export default HomePageHeader;
