import React, { useEffect, useState } from 'react';
import Platform from './wedget/platform';
import Needed from './wedget/Needed';
import Npage from './wedget/N_pages';
import DegUI from './wedget/Deg_UI';
import Features from './wedget/Features';
import Services from './wedget/Services';
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

    // const handleReset = async () => {
    //     await setFormData(init);
    //     await setprice([]);
    //     await setcout(0);
    //     await setCurrentStep(1);
    // }

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
        return (
            <>
                <div style={{display:"flex",lineHeight:"2px",justifyContent:"center",marginBottom:"20px"}}>
                    <div style={{marginRight:"30px"}}>
                        <h3>STE DIGITIZE YOUR PROJECT</h3>
                        <h5>N 18 AV ITTANE Z.I TASSILA DCHEIRA EL JIHADIA</h5>
                        <h5>-8000 AGADIR MAROC</h5>
                        <h5>80000 AGADIR</h5>
                        <h5>Tél: 0761513522</h5>
                        
                    </div>
                    <div>
                        {Object.entries(userData).map(([key, value]) => (
                            <p key={key}>
                                <strong>{key}:</strong> {value}
                            </p>
                        ))}
                    </div>
                </div>
                <table>
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
                                <td>
                                    <p>{calculatePriceSum(formData[key])}$</p>
                                </td>
                            </tr>

                        </>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td><p>Total Price: {cout}$</p></td>
                    </tr>
                </table >
            </>
        );
    }
    // const showRes = () => {
    //     console.log(formData);
    //     console.log(userData);
    // }

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
                <>  <button onClick={()=> window.print()} className='dont-print'>Print</button>
                    {/* <button onClick={handleReset} className='dont-print'>reset</button>
                    <button onClick={showRes} className='dont-print'>list</button> */}
                    <List></List>
                </>
            );
        default:
            return (<Type
                next={next}
                data={handleUserData}
            ></Type>)
    }
}
export default Calculator;
