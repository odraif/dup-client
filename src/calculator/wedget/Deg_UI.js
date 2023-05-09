import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import "../style/radio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons";
import { faStar ,faLayerGroup} from "@fortawesome/free-solid-svg-icons";

import Data from "../data/formComponent.json"

function DegUI(props) {
    library.add(faObjectUngroup,faStar,faLayerGroup);

    const { next ,back} = props;
    const [selectedItems, setSelectedItems] = useState();


    function handleRadioChange(event) {
        const selectedValue = event.target.value;
        setSelectedItems(selectedValue)
      };

    const show = () => {
        console.log(selectedItems)
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
                            onChange={handleRadioChange}
                        />
                        <label htmlFor={item.value}>
                            <FontAwesomeIcon icon={[item.type, item.icon]} />
                            {item.value}
                        </label>
                    </p>
                ))}

            </div>
            <div style={{ marginTop: "20px" }}>
                <button onClick={back}>presedent</button>
                <button onClick={show}>show selected</button>
                <button onClick={next}>Suivant</button>
            </div>
        </>
    )
}
export default DegUI;
