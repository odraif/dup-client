import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import "../style/checkbox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,

} from '@fortawesome/free-regular-svg-icons';
import {
    faMagnifyingGlass,
    faMap,
    faSwatchbook,
    faReceipt,
    faArrowRightToBracket,
    faComments,
    faQrcode,
    faCubes,
    faStar,
    faStarHalf,
    faMessage,
    faFile,
    faDatabase,
    faListCheck,
    faHeadset,
    faCube,
    faCalendarDays,
    faStarHalfStroke

} from "@fortawesome/free-solid-svg-icons";
import Data from "../data/formComponent.json"

function Features(props) {
    library.add(
        faMagnifyingGlass,
        faMap,
        faSwatchbook,
        faCalendarDays,
        faCreditCard,
        faReceipt,
        faComments,
        faQrcode,
        faCubes,
        faStar,
        faStarHalf,
        faMessage,
        faFile,
        faDatabase,
        faListCheck,
        faHeadset,
        faCube,
        faStarHalfStroke,
        faArrowRightToBracket
    );

    const { next ,back} = props;
    const [selectedItems, setSelectedItems] = useState([]);



    function handleCheckboxChange(event) {
        const value = event.target.value;
        const checked = event.target.checked;

        if (checked) {
            setSelectedItems([...selectedItems, value]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== value));
        }
    }

    const show = () => {
        console.log(selectedItems)
    }

    return (
        <>
            <div className="radio-with-Icon flex-w">
                {Data && Data.Features.map((item) => (
                    <p className="radioOption-Item" key={item.id}>
                        <input
                            type="checkbox"
                            name="Features"
                            id={item.value}
                            value={item.value}
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            checked={selectedItems.includes(item.value)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={item.value}>
                            <FontAwesomeIcon icon={[item.type, item.icon]} className="calicon"/>
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
export default Features;
