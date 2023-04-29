import React from "react";
import "./About.css"
import arrowLeft from "../Assets/Images/Arrows/arrow-left.svg"
import person from "../Assets/Images/user.svg"
import diagram from "../Assets/Images/diagram.svg";
import home from "../Assets/Images/home-wifi.svg";
import menu from "../Assets/Images/menu-board.svg"
import background from "../Assets/Images/Image.jpg"

const About = () => {
    return ( 
        <section className="about-section">
                {/* <img src={background} /> */}
            <div className="about">
                <div className="about-icons">
                    <div>
                        <div>
                            <img src={person}/>
                            <span>
                                پرسنلی مجرب و حرفه ای
                            </span>
                        </div>
                        <div>
                            <img src={diagram}/>
                            <span>
                                کیفیت بالای غذاها
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={home}/>
                            <span>
                                محیطی دلنشین و آرام
                            </span>
                        </div>
                        <div>
                            <img src={menu}/>
                            <span>
                            منوی متنوع
                            </span>
                        </div>
                    </div>
                </div>
                <div className="about-disc">
                    <h4>رستوران های زنجیره های ترخینه</h4>
                    <caption>مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.</caption>
                    <div>
                        <button className="button_stroke">
                            <img src={arrowLeft} />
                        اطلاعات بیشتر</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;