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

    const { next,data ,prices} = props;
    const [selectedItems, setSelectedItems] = useState();


    function handleRadioChange(event,radio) {
        setSelectedItems(radio)
      };
    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems])



    const goToNext = async () => {
        await prices(selectedItems)
        await data((prevChildData) => ({
            ...prevChildData,
            DegUI: selectedItems,
          }));
        await next()
    };
    return (
        <>
            <div className="radio-with-Icon">
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
                            {item.value}
                        </label>
                    </p>
                ))}

            </div>
            <div style={{ marginTop: "20px" }} className="btnposition">
                <button onClick={goToNext} className="btn">Suivant</button>
            </div>
        </>
    )
}
export default DegUI;
