import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import "../style/radio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faSquareFull } from "@fortawesome/free-regular-svg-icons";

import Data from "../data/formComponent.json"

function Npage(props) {
    library.add(faSquareFull);

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
                {Data && Data.Npage.map((item) => (
                    <p className="radioOption-Item" key={item.id}>
                        <input
                            type="radio"
                            name="needed"
                            id={item.value}
                            value={item.value}
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            onChange={handleRadioChange}
                        />
                        <label htmlFor={item.value}>
                            <FontAwesomeIcon icon={[item.type, item.icon]}  className="calicon"/>
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
export default Npage;