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
import axios from 'axios';
import Swal from 'sweetalert2';


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

    const handleReset =  () => {
        Swal.fire({
            title: 'Vous êtes sûr?',
            text: "êtes-vous sûr de vouloir initialisez la calculateur?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Effacer',
            cancelButtonText:"Annueller"
          }).then(async (result) => {
            if (result.isConfirmed) {
                await setFormData(init);
                await setprice([]);
                await setcout(0);
                await setCurrentStep(1);
            }
          })
    }

    const handleUserData = (data) => {
        setuserData(data)
    }

    const handleData = (data) => {
        setFormData(data);
        console.log("the data:");
        console.log(formData);
        //console.log(formData)
        //console.log(userData)
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
    function calculatePriceSum(data) {
        let sum = 0;

        if (Array.isArray(data)) {
            data.forEach((item) => {
                sum += item.price;
            });
        } else {
            sum = data.price;
        }

        return sum;
    }


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
        const Slice = String(year).slice(2, 4)
        const dstime = Slice + String(month + 1) + "- 020";

        useEffect(()=>{
              async function fetchData() {
                try {
                    await axios.post('http://localhost:8000/api/demande/store', formData);
                    // Handle the response data here
                    
                  } catch (error) {
                    // Handle error 
                    console.error(error);
                  }
              }
              fetchData();
        },[]);

        Swal.fire(
            'Votre demande à été envoyer avec succes',
            "Ne oublie pas d'imprimer le devis",
            'success'
          )

        return (
            <>
                <div style={{ backgroundColor: "#fff" ,padding:"10px"}}>
                    <div style={{ display: "flex", lineHeight: "2px", justifyContent: "space-between", marginBottom: "20px" }}>
                        <div>
                            <img src={Logo} alt='' style={{ width: "50px" }} />
                        </div>
                        <div style={{ width: "300px" }}>
                            <h3>Devis DV{dstime}</h3>
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
                                <div key={key}>
                                    <p>
                                        <strong>{key}:</strong> {value}
                                    </p>
                                </div>

                            ))}
                        </div>
                    </div>
                    <table>
                        <thead></thead>
                        <tbody>
                        </tbody>
                        <tfoot></tfoot>

                        <tr>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td colSpan="2" style={{ fontSize: "13px", border: "none", textAlign: "end", lineHeight: "10px" }}>Montants exprimés en Dirham</td>
                        </tr>
                        <tr>
                            <th colSpan="2" style={{ width: "60%" }}>Désignation</th>
                            <th>TVA</th>
                            <th>HT</th>
                            <th>TTC</th>
                        </tr>
                        {Object.keys(formData).map((key) => (
                            <>{
                                key === "Email" || key === "Cout"? "":
                                (
                                    <tr key={key}>
                                    <th>{key}</th>
                                    <td style={{ lineHeight: "17px" }}>
                                        {Array.isArray(formData[key])
                                            ? formData[key].map((item) => (
                                                <>
                                                    {" "+item.value + " "}|
                                                </>

                                            ))

                                            : (
                                                <>
                                                    {" "+formData[key].value + " "}|
                                                </>

                                            )}

                                    </td>
                                    <td>20%</td>
                                    <td>
                                        <p>{Number(calculatePriceSum(formData[key]) / 1.2).toFixed(2)}</p>
                                    </td>
                                    <td>
                                        <p>{Number(calculatePriceSum(formData[key])).toFixed(2)}</p>
                                    </td>
                                </tr>

                                )
                            }
                                
                            </>
                        ))}
                        <tr>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }} colSpan="2"><p>Total HT </p></td>

                            <td style={{ border: "none" }}><p>{(Number(cout) / 1.2).toFixed(2)}</p></td>
                        </tr>
                        <tr>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }} colSpan="2"><p>Total TVA 20% </p></td>

                            <td style={{ border: "none" }}><p>{(Number(cout) - (Number(cout) / 1.2)).toFixed(2)}</p></td>
                        </tr>
                        <tr style={{backgroundColor: "#fff"}}>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }}></td>
                            <td style={{ border: "none" }} colSpan="2"><p>Total TTC </p></td>

                            <td style={{ border: "none" }}><p>{Number(cout).toFixed(2)}</p></td>
                        </tr>
                    </table >
                    <div style={{ marginTop: "35%" }}>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ lineHeight: "2px", fontSize: "15px" }}>Capital de 10 000 MAD-R.C.:25271-Patente:49704138</p>
                            <p style={{ lineHeight: "2px", fontSize: "15px" }}>I.F.:51708439-ICE:003003499000049-Numéro TVA:51708430</p>
                        </div >
                    </div>
                </div>
            </>
        );
    }


    switch (currentStep) {
        case 1:

            return (

                <>
                    <div style={{ marginTop: "5%" }}>
                        <h3 style={{ textAlign: "center", color: "white" }}>Pour quelles plateformes souhaitez-vous développer le produit ?</h3>
                    </div>
                    <Platform
                        data={handleData}
                        next={next}
                        prices={addprice}
                        oldprices={price}
                        updatePrice={updatePrice}
                    />
                    <div className='cout-viewer'>
                        <p>
                            {"Le cout: " + cout}DH
                        </p>
                        <button onClick={handleReset} className="autbtn">Effacer</button>
                    </div>
                </>
            );
        case 2:
            return (
                <>
                    <div style={{ marginTop: "5%" }}>
                        <h3 style={{ textAlign: "center", color: "white" }}>Que voulez-vous obtenir ?</h3>
                    </div>
                    <Needed
                        data={handleData}
                        next={next}
                        prices={addprice}
                    />
                    <div className='cout-viewer'>
                        <p>
                            {"Le cout: " + cout}DH
                        </p>
                        <button onClick={handleReset} className="autbtn">Effacer</button>
                    </div>
                </>
            );
        case 3:
            return (
                <>
                    <div style={{ marginTop: "5%" }}>
                        <h3 style={{ textAlign: "center", color: "white" }}>Combien d'écrans uniques y aura-t-il dans l'application ?</h3>
                    </div>
                    <Npage
                        data={handleData}
                        next={next}
                        prices={addprice}
                    />
                    <div className='cout-viewer'>
                        <p>
                            {"Le cout: " + cout}DH
                        </p>
                        <button onClick={handleReset} className="autbtn">Effacer</button>
                    </div>
                </>
            );
        case 4:
            return (
                <>
                    <div style={{ marginTop: "5%" }}>
                        <h3 style={{ textAlign: "center", color: "white" }}>Quel est le degré de développement de l'interface de l'application ?</h3>
                    </div>
                    <DegUI
                        data={handleData}
                        next={next}
                        prices={addprice}
                    />
                    <div className='cout-viewer'>
                        <p>
                            {"Le cout: " + cout}DH
                        </p>
                        <button onClick={handleReset} className="autbtn">Effacer</button>
                    </div>
                </>
            );
        case 5:
            return (
                <>
                    <div style={{ marginTop: "5%" }}>
                        <h3 style={{ textAlign: "center", color: "white" }}>Quelles fonctionnalités souhaitez-vous inclure dans l'application ?</h3>
                    </div>
                    <Features
                        data={handleData}
                        next={next}
                        prices={addprice}
                        oldprices={price}
                        updatePrice={updatePrice}
                    />
                    <div className='cout-viewer'>
                        <p>
                            {"Le cout: " + cout}DH
                        </p>
                        <button onClick={handleReset} className="autbtn">Effacer</button>
                    </div>
                </>
            );
        case 6:
            return (
                <>
                    <div style={{ marginTop: "5%" }}>
                        <h3 style={{ textAlign: "center", color: "white" }}>Avec quelles services tiers devez-vous interagir ?</h3>
                    </div>
                    <Services
                        data={handleData}
                        next={next}
                        userEmail={userData.Email}
                        formData={formData}
                        total={cout}
                        prices={addprice}
                        oldprices={price}
                        updatePrice={updatePrice}
                    />
                    <div className='cout-viewer'>
                        <p>
                            {"Le cout: " + cout}DH
                        </p>
                        <button onClick={handleReset} className="autbtn">Effacer</button>
                    </div>
                </>
            );
        case 7:
            return (
                <>
                    <div className='centerbtn'>
                        <button onClick={() => { window.print() }} className='dont-print btn'>Print</button>
                    </div>
                    <div style={{ padding: "20px" }} className="printable-section">
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
