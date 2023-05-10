import React, { useEffect, useState } from 'react';
import Platform from './wedget/platform';
import Needed from './wedget/Needed';
import Npage from './wedget/N_pages';
import DegUI from './wedget/Deg_UI';
import Features from './wedget/Features';
import Services from './wedget/Services';

function Calculator() {
    const [currentStep, setCurrentStep] = useState(1);
    const [price, setprice] = useState([]);
    const [cout, setcout] = useState(0);
    const [formData, setFormData] = useState({
        Platform: "",
        Needed: "",
        Npage: "",
        DegUI: "",
        Features: "",
        Services: "",
    });


    useEffect(() => {
        let ans = 0
        price && price.map((item) => (ans += Number(item.price)))
        setcout(ans)
        console.log(price)

    }, [price])




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
    const showRes = () => {
        console.log(formData)
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
                    {cout}
                </>
            );
        case 7:
            return (
                <>
                    {cout}
                    <button onClick={showRes}>list</button>
                </>
            );
        default:
            return (<>hello default</>)
    }
}
export default Calculator;
