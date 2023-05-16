import React, { useEffect, useState } from 'react';
import Platform from './wedget/platform';
import Needed from './wedget/Needed';
import Npage from './wedget/N_pages';
import DegUI from './wedget/Deg_UI';
import Features from './wedget/Features';
import Services from './wedget/Services';
import Logo from "../home/nav/logo.png"
import "./style/tableCalcul.css"
import Type from './register/type';

function Calculator() {
    document.title = "Calculator";

    const [currentStep, setCurrentStep] = useState(0);
    const [price, setprice] = useState([]);
    const [cout, setcout] = useState(0);
    const [userData, setuserData] = useState();
    const [formData, setFormData] = useState({
        Platform: "",
        Needed: "",
        Npage: "",
        DegUI: "",
        Features: "",
        Services: "",
    });
    const init = {
        Platform: "",
        Needed: "",
        Npage: "",
        DegUI: "",
        Features: "",
        Services: "",
    };
    useEffect(() => {
        let sum = 0
        price && price.map((item) => (sum += Number(item.price)))
        setcout(sum)
        console.log(price)

    }, [price]);

    const handleReset = async () => {
        await setFormData(init);
        await setprice([]);
        await setcout(0);
        await setCurrentStep(1);
    }

    const handleUserData = (data) => {
        setuserData(data)
    }

    const handleData = (data) => {
        setFormData(data);
    };

    const addprice = (val) => {
        setprice([...price, val])

    };

    const updatePrice = (val) => {
        setprice(val)
    };

    const next = () => {
        setCurrentStep(currentStep + 1);
    };
    const back = () => {
        setCurrentStep(currentStep - 1);
    };
    const calculatePriceSum = (data) => {
        let sum = 0;

        if (Array.isArray(data)) {
            data.forEach((item) => {
                sum += item.price;
            });
        } else {
            sum = data.price;
        }

        return sum;
    };


    function List() {

        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds()
        const fullc = String(day) + "/" + String(month + 1) + "/" + String(year);
        const full = fullc;
        const time = String(hour) + ":" + String(minute) + ":" + String(seconds);
        const Slice = String(year).slice(2, 4) + String(month + 1) + "-" + "020";

        return (
            <>
                <div >
                    <div style={{ display: "flex", lineHeight: "2px", justifyContent: "space-between", marginBottom: "20px" }}>
                        <div>
                            <img src={Logo} alt='' style={{ width: "50px" }} />
                        </div>
                        <div>
                            <h3>Devis DV{Slice}</h3>
                            <p>Date de creation:{full} {time}</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", lineHeight: "2px", justifyContent: "space-between", marginBottom: "20px" }}>
                        <div style={{ backgroundColor: "#ddd", padding: "10px" }}>
                            <h3>STE DIGITIZE YOUR PROJECT</h3>
                            <h5>N 18 AV ITTANE Z.I TASSILA DCHEIRA EL JIHADIA</h5>
                            <h5>-8000 AGADIR MAROC</h5>
                            <h5>80000 AGADIR</h5>
                            <h5>Tél: 0761513522</h5>

                        </div>
                        <div style={{ width: "300px", padding: "10px" }}>
                            {Object.entries(userData).map(([key, value]) => (
                                <p key={key}>
                                    <strong>{key}:</strong> {value}
                                </p>
                            ))}
                        </div>
                    </div>
                    <table>
                        <tr>
                            <th colSpan="2">Désignation</th>
                            <th>TVA</th>
                            <th>HT</th>
                            <th>TTC</th>
                        </tr>
                        {Object.keys(formData).map((key) => (
                            <>
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>
                                        {Array.isArray(formData[key])
                                            ? formData[key].map((item) => (
                                                <>
                                                    {item.value + " "},
                                                </>

                                            ))
                                            : (
                                                <>
                                                    <p>{formData[key].value + " "},</p>
                                                </>

                                            )}
                                    </td>
                                    <td>20%</td>
                                    <td>
                                        <p>{calculatePriceSum(formData[key]) / 1.2}$</p>
                                    </td>
                                    <td>
                                        <p>{calculatePriceSum(formData[key])}$</p>
                                    </td>
                                </tr>

                            </>
                        ))}
                        <tr>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}><p>Total HT </p></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}><p>{Number(cout) / 1.2}$</p></td>
                        </tr>
                        <tr>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}><p>Total TVA 20% </p></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}><p>{Number(cout) - (Number(cout) / 1.2)}$</p></td>
                        </tr>
                        <tr>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}><p>Total TTC </p></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}><p>{cout}$</p></td>
                        </tr>
                    </table >
                </div>
                <div style={{ marginTop: "35%" }}>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ lineHeight: "2px", fontSize: "10px" }}>Capital de 10 000 MAD-R.C.:2571-Patente:49704318</p>
                        <p style={{ lineHeight: "2px", fontSize: "10px" }}>I.F.:51708439-ICE:003003499000049-Numéro TVA:51708430</p>
                    </div >
                </div>
            </>
        );
    }
    const showRes = () => {
        console.log(formData);
        console.log(userData);
    }

    switch (currentStep) {
        case 1:

            return (

                <>
                    <Platform
                        data={handleData}
                        next={next}
                        prices={addprice}
                        oldprices={price}
                        updatePrice={updatePrice}
                    />
                    <button onClick={handleReset}>reset</button>
                    {cout}
                </>
            );
        case 2:
            return (
                <>
                    <Needed
                        data={handleData}
                        next={next}
                        back={back}
                        prices={addprice}
                    />
                    <button onClick={handleReset}>reset</button>
                    {cout}
                </>
            );
        case 3:
            return (
                <>
                    <Npage
                        data={handleData}
                        next={next}
                        back={back}
                        prices={addprice}
                    />
                    <button onClick={handleReset}>reset</button>
                    {cout}
                </>
            );
        case 4:
            return (
                <>
                    <DegUI
                        data={handleData}
                        next={next}
                        back={back}
                        prices={addprice}
                    />
                    <button onClick={handleReset}>reset</button>
                    {cout}
                </>
            );
        case 5:
            return (
                <>
                    <Features
                        data={handleData}
                        next={next}
                        back={back}
                        prices={addprice}
                        oldprices={price}
                        updatePrice={updatePrice}
                    />
                    <button onClick={handleReset}>reset</button>
                    {cout}
                </>
            );
        case 6:
            return (
                <>
                    <Services
                        data={handleData}
                        back={back}
                        next={next}
                        prices={addprice}
                        oldprices={price}
                        updatePrice={updatePrice}
                    />
                    <button onClick={handleReset}>reset</button>
                    {cout}
                </>
            );
        case 7:
            return (
                <>  <button onClick={() => window.print()} className='dont-print'>Print</button>
                    <button onClick={handleReset} className='dont-print'>reset</button>
                    <button onClick={showRes} className='dont-print'>list</button>
                    <div style={{ padding: "20px" }}>
                        <List></List>
                    </div>
                </>
            );
        default:
            return (
                <>
                        <Type
                            next={next}
                            data={handleUserData}
                        ></Type>
                </>
            )
    }
}
export default Calculator;
