import React from "react";
import food from "../Assets/Images/Food Picture.jpg"
import "./Cards.css"

const Cards = () => {
    return ( 
        <div className="card">
            <div className="card-image">
                <img src={food}/>
            </div>
            <div className="card-details">
                <div>
                    <h3>پاستا سبزیجات</h3>
                    <button className="card-details_like">like</button>
                </div>
                <div>
                    <p>پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده</p>
                    <div className="card-price">
                        <span>discount</span>
                        <span>150,000</span>
                    </div>
                </div>
                <div>
                    <span className="card-rating">rating</span>
                    <div className="card-button">
                        <button className="button_normal">
                            افزودن به سبد خرید
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Cards;