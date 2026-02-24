import { NavLink } from "react-router";
import img3 from "../assets/img/img3.png";


export default function Kampaniya() {
    return (
        <section className="container campaigns-section">
            <div className="card-wrapper">
                <NavLink className="promo-card nav-link" aria-current="page" to="/cardDetailes">
                    <div className="promo-image">
                        <img src={img3} alt="kampaniya" />
                    </div>
                    <p className="card-title">
                        “Araz” və “akart”dan əla fürsət!
                    </p>
                </NavLink>
                <NavLink className="promo-card nav-link" aria-current="page" to="/cardDetailes">
                    <div className="promo-image">
                        <img src={img3} alt="kampaniya" />
                    </div>
                    <p className="card-title">
                        “Araz” və “akart”dan əla fürsət!
                    </p>
                </NavLink>
                <NavLink className="promo-card nav-link" aria-current="page" to="/cardDetailes">
                    <div className="promo-image">
                        <img src={img3} alt="kampaniya" />
                    </div>
                    <p className="card-title">
                        “Araz” və “akart”dan əla fürsət!
                    </p>
                </NavLink>
                <NavLink className="promo-card nav-link" aria-current="page" to="/cardDetailes">
                    <div className="promo-image">
                        <img src={img3} alt="kampaniya" />
                    </div>
                    <p className="card-title">
                        “Araz” və “akart”dan əla fürsət!
                    </p>
                </NavLink>
                <NavLink className="promo-card nav-link" aria-current="page" to="/cardDetailes">
                    <div className="promo-image">
                        <img src={img3} alt="kampaniya" />
                    </div>
                    <p className="card-title">
                        “Araz” və “akart”dan əla fürsət!
                    </p>
                </NavLink>
                <NavLink className="promo-card nav-link" aria-current="page" to="/cardDetailes">
                    <div className="promo-image">
                        <img src={img3} alt="kampaniya" />
                    </div>
                    <p className="card-title">
                        “Araz” və “akart”dan əla fürsət!
                    </p>
                </NavLink>
            </div>
        </section>
    )
}
