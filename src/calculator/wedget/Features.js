import React, { useState, useEffect } from "react";
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

    const { data, next, back, prices, oldprices, updatePrice } = props;
    const [selectedItems, setSelectedItems] = useState([]);



    function handleCheckboxChange(event, box) {
        const checked = event.target.checked;

        if (checked) {
            setSelectedItems([...selectedItems, box]);
            prices(box)
        } else {
            const updatedProducts = selectedItems.filter(
                selectedItems => selectedItems !== box
            );
            setSelectedItems(updatedProducts);
            if (oldprices) {
                updatePrice(oldprices.filter(price => price.id !== box.id));
            }
        }
    }
    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems])
    const show = () => {
        console.log(selectedItems)
    }
    const goToNext = async () => {
        await data((prevChildData) => ({
            ...prevChildData,
            Features: selectedItems,
        }));
        await next();
    }
    return (
        <>
            <div className="radio-with-Icon flex-w">
                {Data && Data.Features.map((item) => (
                    <p className="radioOption-Item" key={item.id}>
                        <input
                            type="checkbox"
                            name="Platform"
                            id={item.value}
                            value={item}
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            checked={selectedItems.includes(item)}
                            onChange={event => handleCheckboxChange(event, item)}
                        />
                        <label htmlFor={item.value}>
                            <FontAwesomeIcon icon={[item.type, item.icon]} className="calicon" />
                            {item.value}
                        </label>
                    </p>
                ))}

            </div>
            <div style={{ marginTop: "20px" }}>
                <button onClick={back}>presedent</button>
                <button onClick={show}>show selected</button>
                <button onClick={goToNext}>Suivant</button>
            </div>
        </>
    )
}
export default Features;