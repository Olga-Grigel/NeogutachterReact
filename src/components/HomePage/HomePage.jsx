import './HomePage.css';
import ImmageHeader from '../ImmageHeader/ImmageHeader.jsx'
import HomepageHeader from '../HomepageHeader/HomepageHeader.jsx'
import image1 from '../../images/photo1.png';
import image2 from '../../images/photo2.png';
import image3 from '../../images/photo3.png';

function HomePageHeader() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <div className="homepage__content">
        <div className="homepage__blockwithbutton">
          <div className="homepage__blockwithtext">
            <h1 className="homepage__title homepage__margin">Hier den besten <br />Kfz-Gutachter finden!</h1>
            <h2 className="homepage__title homepage__highlighting">Wir übernehmen</h2>
            <br />
            <h2 className="homepage__title homepage__highlighting">das für dich.</h2>
          </div>
          <div className="homepage__containbutton">
            <button className="homepage__button"><p className="homepage__button-text">Gutachter kostenlos anfragen</p><div className="homepage__button-arrow"></div></button>
            <div className="homepage__arrow"></div>
          </div>
        </div>
        <div className="homepage__containwithimmages">
          <div className="homepage__containwithimmage homepage__containwithimmage_man"><ImmageHeader path={image1} /></div>
          <div className="homepage__containwithimmage homepage__containwithimmage_car"><ImmageHeader path={image2} /></div>
          <div className="homepage__containwithimmage homepage__containwithimmage_like"><ImmageHeader path={image3} /></div>
        </div>
      </div >
    </div >
  );
}

export default HomePageHeader;
