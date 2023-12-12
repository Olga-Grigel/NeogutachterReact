import './ImmageHeader.css';

function ImmageHeader({ path }) {
    return (
        <div className="containwithimmage"><img className="immage" src={path} alt="immage" /></div>
    );
}

export default ImmageHeader;