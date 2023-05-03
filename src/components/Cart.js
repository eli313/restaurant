import React from "react";
import "./Cart.css"

import shop from "../Assets/Images/Shop/shopping-cart.svg"
import add from "../Assets/Images/Essentials/tick-square.svg"
import money from "../Assets/Images/Cart/wallet-1.svg"
import arrowRight from "../Assets/Images/Arrows/arrow-right-3.svg"
import trash from "../Assets/Images/Essentials/trash.svg"

const Cart = () => {
    return ( 
        <section className="cart">
            <div className="cart-tab">
                <div className="cart-tab_items">
                    <img src={shop} />
                    <span>سبد خرید</span>
                    <span>..........................................</span>
                </div>
                <div className="cart-tab_items">
                    <img src={add} />
                    <span>تکمیل اطلاعات</span>
                    <span>..........................................</span>
                </div>
                <div className="cart-tab_items">
                    <img src={money} />
                    <span>پرداخت</span>
                </div>
            </div>
            <div className="cart-tab_mobile">
                <img src={arrowRight} />
                <h5>سبد خرید</h5>
                <img src={trash} />
            </div>
            <div className="cart-items">
                <div className="cart-items_blank">
                    <p>شما در حال حاضر هیچ سفارشی ثبت نکرده اید!</p>
                    <button className="button_stroke">منوی رستورانت</button>
                </div>
            </div>
        </section>
     );
}
 
export default Cart;