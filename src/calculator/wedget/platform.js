import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import "../style/checkbox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Data from "../data/formComponent.json"

function Platform(props) {
    library.add(faAndroid, faApple, faGlobe);

    const { data, next, prices, oldprices, updatePrice } = props;
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
        console.log(selectedItems);
    }, [selectedItems])
    const goToNext = async () => {
        await data((prevChildData) => ({
            ...prevChildData,
            Platform: selectedItems,
        }));

        await next();

    }

    return (
        <>
            <div className="radio-with-Icon">
                {Data && Data.platforms.map((item) => (
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
                <button onClick={goToNext}>Suivant</button>
            </div>
        </>
    )
}
export default Platform;