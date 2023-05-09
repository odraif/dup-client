import React, { useState } from 'react';
import Platform from './wedget/platform';
import Needed from './wedget/Needed';
import Npage from './wedget/N_pages';
import DegUI from './wedget/Deg_UI';
import Features from './wedget/Features';
import Services from './wedget/Services';

function Calculator() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        platform: "",
        needed: "",
        N_page: "",
        deg_UI: "",
        features: "",
        services: "",
    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const next = () => {
        setCurrentStep(currentStep + 1);
    };
    const back = () => {
        setCurrentStep(currentStep - 1);
    };
    switch (currentStep) {
        case 1:
            return (
                <Platform
                    data={formData}
                    handleChange={handleChange}
                    next={next}
                />
            );
        case 2:
            return (
                <>
                    <Needed
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </>
            );
        case 3:
            return (
                <>
                    <Npage
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </>
            );
        case 4:
            return (
                <>
                    <DegUI
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                </>
            );
        case 5:
            return (
                <Features
                    data={formData}
                    handleChange={handleChange}
                    next={next}
                    back={back}
                />
            );
        case 6:
            return (
                <>
                    <Services
                        data={formData}
                        handleChange={handleChange}
                        back={back}
                    />
                </>
            );
        default:
            return (<>hello default</>)
    }
}
export default Calculator;
