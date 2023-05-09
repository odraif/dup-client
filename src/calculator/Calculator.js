import React, { useState } from 'react';
import Platform from './wedget/platform';

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
                    step {currentStep}
                </>
            );
        case 3:
            return (
                <>
                step {currentStep}
                </>
            );
        case 4:
            return (
                <>
                step {currentStep}
                </>
            );
        case 5:
            return (
                <>
                step {currentStep}
                </>
            );
        case 6:
            return (
                <>
                step {currentStep}
                </>
            );
            default:
               return(<>hello default</> )
    }
}
export default Calculator;
