import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import "../style/checkbox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Data from "../data/formComponent.json"

function Platform(props) {
    library.add(faAndroid, faApple, faGlobe);

    const { next } = props;
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedItems((prevSelectedItems) =>
            event.target.checked
                ? [...prevSelectedItems, value]
                : prevSelectedItems.filter((item) => item !== value)
        );
        console.log("clicked");
    }

    const show = () => {
        console.log(selectedItems)
    }

    return (
        <>
            <div className="radio-with-Icon">
                {Data && Data.platforms.map((item) => (
                    <p className="radioOption-Item" key={item.id}>
                        <input type="checkbox"
                            name="Platform"
                            id={item.value}
                            value={item.value}
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            checked={selectedItems.includes(item.value)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="web">
                            <FontAwesomeIcon icon={[item.type, item.icon]} />
                            {item.value}
                        </label>
                    </p>
                ))}

            </div>
            <div style={{ marginTop: "20px" }}>
                <button onClick={next}>Suivant</button>
                <button onClick={show}>show selected</button>
            </div>
        </>
    )
}
export default Platform;