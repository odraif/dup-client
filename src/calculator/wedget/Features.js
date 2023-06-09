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

    const { data, next, prices, oldprices, updatePrice } = props;
    const [selectedItems, setSelectedItems] = useState([]);
    const[button,setbutton] = useState(false)



    function handleCheckboxChange(event, box) {
        const checked = event.target.checked;

        if (checked) {
            setSelectedItems([...selectedItems, box]);
            prices(box)
            setbutton(false)
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
        var show = document.getElementById("anime");
        setTimeout(()=>{
            show.classList.remove("cardAnime");
        },2000)
    }, [])

    const goToNext = async () => {
        var show = document.getElementById("anime");
        await data((prevChildData) => ({
            ...prevChildData,
            Features: selectedItems,
        }));
        await show.classList.add("cardout");

        await setTimeout(()=>{
            next();
        },1000 ) ;
    }
    return (
        <>
            <div className="view-card">
                <div className="radio-with-Icon flex-w cardin" id="anime">
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
            </div>
        </>
    )
}
export default Features;
