import React from "react";
import "./Footer.css"
import telegram from "../Assets/Images/social/Device=Desktop, Social media=Telegram, State=Normal.svg"
import instagram from "../Assets/Images//social/Device=Desktop, Social media=Instagram, State=Normal.svg"
import twitter from "../Assets/Images/social/Device=Desktop, Social media=twitter, State=Normal.svg"

const Footer = () => {
    return ( 
        <section className="footer-section">
            <div className="footer">
                <div className="footer-comment">
                    <div>
                        <input type="text" maxLength={200} placeholder="پیام شما"/>
                        <button>ارسال پیام</button>
                    </div>
                    <div>
                        <h3>پیام به ترخینه</h3>
                        <input type="text" placeholder="نام و نام خانوادگی"/>
                        <input type="text" placeholder="شماره تماس"/>
                        <input type="email" placeholder="ایمیل آدرس (اختیاری)"/>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-links_branch">
                        <h3>شعبه های ترخینه</h3>
                        <a>شعبه اکباتان</a>
                        <a>شعبه چالوس</a>
                        <a>شعبه اقدسیه</a>
                        <a>شعبه ونک </a>
                    </div>
                    <div className="footer-links_access">
                        <h3>دسترسی آسان</h3>
                        <a>پرسش های متداول</a>
                        <a>قوانین ترخینه</a>
                        <a>حریم خصوصی</a>
                        <div className="footer-links_social">
                            <img src={telegram}/> 
                            <img src={instagram}/> 
                            <img src={twitter}/> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;