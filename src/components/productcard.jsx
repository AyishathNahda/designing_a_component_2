// write product card here

import React from "react";
import ViewProductButton from "./button";

const productCard =()=>{
    const prodImage="https://i5.walmartimages.com/seo/RKSTN-Headphones-Wireless-Bluetooth-Over-Ear-Lightweight-Hi-Fi-Stereo-Foldable-Travel-Lightning-Deals-Today-Clearance_045f38ee-9b56-42d0-8767-487ffb1f982f.2ec04ecd19d9d9d06427faa94c7c078d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF";
    const prodName="RKSTN Bluetooth Headphones Headphones Bluetooth Headphones";
    const price="$17.97";

    return (
        <div className="product-card">
        <img src={prodImage} alt={prodName} className="product-image" />
        <h3 className="product-name">{prodName}</h3>
        <p className="product-price">{price}</p>
        <ViewProductButton />

        </div>
    );
};

export default productCard;



