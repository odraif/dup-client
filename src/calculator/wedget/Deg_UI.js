import React, { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import "../style/radio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons";
import { faStar, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import Data from "../data/formComponent.json"

function DegUI(props) {
    library.add(faObjectUngroup, faStar, faLayerGroup);

    const { next, data, prices } = props;
    const [selectedItems, setSelectedItems] = useState();
    const[button,setbutton] = useState(true)


    function handleRadioChange(event, radio) {
        setSelectedItems(radio)
        setbutton(false)
    };
    useEffect(() => {
        var show = document.getElementById("anime");
        setTimeout(()=>{
            show.classList.remove("cardAnime");
        },2000)
    }, [])



    const goToNext = async () => {
        var show = document.getElementById("anime");
        await prices(selectedItems)
        await data((prevChildData) => ({
            ...prevChildData,
            DegUI: selectedItems,
        }));

        await show.classList.add("cardout");

        await setTimeout(()=>{
            next();
        },1000 ) ;
    };
    return (
        <>
            <div className="radio-with-Icon cardin" id="anime">
                {Data && Data.DegUI.map((item) => (
                    <p className="radioOption-Item" key={item.id}>
                        <input
                            type="radio"
                            name="DegUI"
                            id={item.value}
                            value={item.value}
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            onChange={event => handleRadioChange(event, item)}
                        />
                        <label htmlFor={item.value}>
                            <FontAwesomeIcon icon={[item.type, item.icon]} className="calicon" />
                            <div style={{ display: "flex", flexDirection: "column", marginTop: "-10px" }}>
                                <p><strong>{item.value}</strong></p>
                                <p style={{ marginTop: "-10px" }}>{item.price}DH</p>
                            </div>
                        </label>
                    </p>
                ))}

            </div>
            <div style={{ marginTop: "20px" }} className="btnposition">
                <button onClick={goToNext} className="btn" disabled={button}>Suivant</button>
            </div>
        </>
    )
}
export default DegUI;
