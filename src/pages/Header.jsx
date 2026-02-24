import callIcon from "../assets/img/call (1).png";
import dayAndNight from "../assets/img/day-and-night.png";
import food from "../assets/img/food.png";
import menu from "../assets/img/menu.png";
import shop from "../assets/img/shop.png";
import smartphone from "../assets/img/smartphone.png";
import { NavLink } from "react-router"

export default function Header() {
    return (
        <section>
            <header>
                <div className="container">
                    <div className="mode">
                        <div className="dark-mode">
                            <img src={dayAndNight} alt="dark-mode" />
                        </div>
                        <div>
                            <select name="language" className="lang-select">
                                <option value="az">AZ</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                        <div>
                            <button className="phone-btn">
                                <img src={callIcon} alt="phone" />
                                (012) 914
                            </button>
                        </div>
                    </div>
                    <nav>
                        <div className="logo">
                            <NavLink className="nav-link " aria-current="page" to="/">
                                <img width="150px" src="https://azertag.az/files/2023/3/1200x630/1701240575203419436_1200x630.jpg" alt="" />
                            </NavLink>
                        </div>
                        <div className="products-search">
                            <div className="products-btn">
                                <button type="button"> Məhsullar</button>
                            </div>
                            <form className="form" action="">
                                <input type="text" name="search" placeholder="Məhsullarda axtar" />
                            </form>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="" className="icon">
                                        <img className="links-logo" src={shop} alt="shop" />
                                        <p className="links-text">Mağazalar</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="icon">
                                        <img className="links-logo" src={smartphone} alt="smartphone" />
                                        <p className="links-text">Araz tətbiqi</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="icon">
                                        <img className="links-logo" src={food} alt="" />
                                        <p className="links-text">Seçimlərim</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="sup-nav">
                        <div className="sup-menu">
                            <ul>
                                <li>
                                    <NavLink className="nav-link " aria-current="page" to="/aboutUs">Haqqimizda</NavLink>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <NavLink className="nav-link " aria-current="page" to="/campaigns">Kampaniyalar</NavLink>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">Layihələr</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">Karyera</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">Xəbərlər</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">Bloq</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">Müştəri dəstəyi</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="">Əlaqə</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sup-btn">
                            <button className="btn1" type="button">Partnyor ol</button>
                            <button className="btn2" type="button">Endirim Jurnalı</button>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}
