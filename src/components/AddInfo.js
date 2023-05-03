import React from "react";
import "./AddInfo.css"

const AddInfo = () => {
    return ( 
        <section className="addInfo container">
            <div className="addInfo-block">
            <div className="addInfo-shipment">
                <div className="addInfo-shipment_type">روش تحویل</div>
                <div className="addInfo-shipment_address">
                    آدرس ها
                </div>
                <div className="addInfo-shipment_disc">disc</div>
            </div>
            <div className="addInfo-items">
                <div>cart items</div>
                <div></div>
            </div>
            </div>
        </section>
     );
}
 
export default AddInfo;