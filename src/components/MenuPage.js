import React from "react";
import "././MenuPage.css"
import Cards from "./Cards";
import search from "../Assets/Images/search/search-normal.svg"

const MenuPage = () => {
    return ( 
        <section className="menu-section">
            <div className="menu">
                <div className="menu-titlebar">
                    <div className="menu-titlebar_titles">
                        <h3>غذای اصلی</h3>
                        <h3>پیش غذا</h3>
                        <h3>دسر</h3>
                        <h3>نوشیدنی</h3>
                    </div>
                </div>
                <div className="menu-search">
                    <input placeholder="جستجو"/>
                    <img src={search} />
                </div>
                <div className="menu-cards">
                    <Cards/>
                </div>
            </div>
        </section>
     );
}
 
export default MenuPage;