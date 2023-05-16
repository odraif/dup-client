import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import "../style/radio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup, faWindowRestore, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import Data from "../data/formComponent.json"

function Needed(props) {
    library.add(faLayerGroup, faWindowRestore, faScrewdriverWrench);

    const { data,next, prices } = props;
    const [selectedItems, setSelectedItems] = useState();


    function handleRadioChange(event, radio) {
        const checked = event.target.checked;
        setSelectedItems(radio)
        console.log(checked)
    };

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems])


    const goToNext = async () => {
        await prices(selectedItems)
        await data((prevChildData) => ({
            ...prevChildData,
            Needed: selectedItems,
          }));
        await next()
    };

    return (
        <>
            <div className="radio-with-Icon">
                {Data && Data.needed.map((item) => (
                    <p className="radioOption-Item" key={item.id}>
                        <input
                            type="radio"
                            name="needed"
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
export default Needed;