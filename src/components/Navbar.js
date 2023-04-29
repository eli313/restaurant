import React from "react";
import "./Navbar.css"
import logo from "../Assets/Images/Color=Green, Size=Big.svg"
import search from "../Assets/Images/search/search-normal-1.svg"
import cart from "../Assets/Images/Shop/shopping-cart.svg"
import account from "../Assets/Images/account/frame.svg"
import arrowDown from "../Assets/Images/Arrows/arrow-down-1.svg"

const Navbar = () => {
    return ( 
        <section className="nav-section">
            <div className="navbar">
                <div>
                    <img src={logo}/>
                </div>
                <div className="navbar-links">
                    <a>صفحه اصلی</a>
                    <a>شعبه</a>
                    <a>
                        منو
                        <img src={arrowDown} />
                        </a>
                    <a>
                        اعطای نمایندگی
                        <img src={arrowDown} />
                        </a>
                    <a>درباره ما</a>
                    <a>تماس با ما</a>
                </div>
                
                <div className="navbar-buttons">
                    <button><img src={search}/></button>
                    <button><img src={cart}/></button>
                    <button><img src={account}/></button>
                </div>
                <div className="navbar-burgerMenu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
     );
}
 
export default Navbar;