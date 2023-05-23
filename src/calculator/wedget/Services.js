import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import "../style/checkbox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faBook, faCashRegister, faCommentSms, faFileInvoiceDollar, faLink } from "@fortawesome/free-solid-svg-icons";
import Data from "../data/formComponent.json"


function Services(props) {
    library.add(
        faCommentSms,
        faLink,
        faBook,
        faBarsProgress,
        faFileInvoiceDollar,
        faCashRegister
    );

    const {total,userEmail, data, next, prices, oldprices, updatePrice } = props;
    const [selectedItems, setSelectedItems] = useState([]);
    const [button, setbutton] = useState(false)



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
        setTimeout(() => {
            show.classList.remove("cardAnime");
        }, 2000)
    }, [])

    const goToNext = async () => {
        var show = document.getElementById("anime");
        await data((prevChildData) => ({
            ...prevChildData,
            Services: selectedItems,
            Email: userEmail,
            Cout: total,
        }));

        await show.classList.add("cardout");
        await setTimeout(() => {
            next();
        }, 1000);
    }

    return (
        <>
            <div className="view-card">
                <div className="radio-with-Icon flex-w cardin" id="anime">
                    {Data && Data.Services.map((item) => (
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
                    <button onClick={goToNext} className="btn" disabled={button}>Envoyer</button>
                </div>
            </div>
        </>
    )
}
export default Services
