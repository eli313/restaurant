import React from "react";
import "././MenuPage.css"
import Cards from "./Cards";

const MenuPage = () => {
    return ( 
        <section className="menu-section">
            <div className="menu">
                <div className="menu-titlebar">
                    <div className="menu-titlebar_titles">
                        <div>غذای اصلی</div>
                        <div>پیش غذا</div>
                        <div>دسر</div>
                        <div>نوشیدنی</div>
                    </div>
                </div>
                <div className="menu-cards">
                    <Cards/>
                </div>
            </div>
        </section>
     );
}
 
export default MenuPage;