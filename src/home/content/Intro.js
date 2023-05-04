import React, { useEffect } from "react";
import Button from '@mui/material/Button';

function FirstContent() {


    useEffect(() => {

    }, []);
    const content = {
        display: "flex",
        marginTop: "2%"
    }
    const para = {
        color: "#fff",
        padding: "5%",
        fontSize: "3rem",
    }
    const bar = {
        borderColor: "#fff",
        height: "2px",
        width: "500px",
        margin: "0 0 0 -80px",
        backgroundColor: "#fff",
        transform: "rotate(90deg)",
        borderRadius: "20px",
        position: "relative",
        top: "40vh"
    }
    const views = {
        width: "55%",
        margin: "2%"
    }
    const buttons = {
        display: "flex",
        flexDirection: "column",
        width: "40%",
        padding: "5%",
        marginLeft: "-200px",

    }
    const btn1 = {
        border: "1px solid  #ccffff",
        width: "80%",
        backgroundColor: "#ccffff",
        color: "#286385",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "20px 20px",
        borderRadius: "20px",
        margin: "auto",
    }
    const btn2 = {
        border: "1px solid #fff",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "20px 20px",
        margin: "auto",
        borderRadius: "20px",
        marginTop: "-90px",

    }
    //responsive 600px view
    const Rcontent = {
        display: "flex",
        marginTop: "2%",
        flexDirection: "column",
    }
    const Rpara = {
        color: "#fff",
        padding: "5%",
        fontSize: "2.3rem",
    }
    const Rbar = {
        borderColor: "#fff",
        height: "2px",
        width: "60%",
        backgroundColor: "#fff",
        borderRadius: "20px",
        position: "relative",
        top: "-20px",
        margin:"auto"
    }
    const Rviews = {
        margin: "2%"
    }
    const Rbuttons = {
        display: "flex",
        flexDirection: "column",
        padding: "5%",
       

    }
    const Rbtn1 = {
        border: "1px solid  #ccffff",
        width: "80%",
        backgroundColor: "#ccffff",
        color: "#286385",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "5px 5px",
        borderRadius: "20px",
        margin: "auto",
    }
    const Rbtn2 = {
        border: "1px solid #fff",
        width: "80%",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "5px 5px",
        margin: "10px auto auto auto",

        borderRadius: "20px",
       

    }

        if(window.innerWidth > 600){
            console.log("mini")

            return(<>
                <div style={{ margin: "auto" }}>
                <div style={content}>
                    <div style={views}>
                        <p style={para}><b>Digitalise</b> votre entreprise
                            pour améliorer la communication interne et externe ainsi que
                            l’engagement avec votre  client.</p>
                    </div>
                    <div style={bar}>
                    </div>
                    <div style={buttons}>
                        {/* <button style={btn1}>Nos projet</button>
                        <button style={btn2}>Calculer le coût</button> */}
                        <Button variant="contained" style={btn1}>Nos projet</Button>
                        <Button variant="outlined" style={btn2}>Calculer le coût</Button>
                    </div>
                </div>
                <div></div>
            </div>
                </>)
        }else{
            console.log("full")
            return(<>
                <div style={{ margin: "auto" }}>
                <div style={Rcontent}>
                    <div style={Rviews}>
                        <p style={Rpara}><b>Digitalise</b> votre entreprise
                            pour améliorer la communication interne et externe ainsi que
                            l’engagement avec votre  client.</p>
                    </div>
                    <div style={Rbar}>
                    </div>
                    <div style={Rbuttons}>
                        {/* <button style={btn1}>Nos projet</button>
                        <button style={btn2}>Calculer le coût</button> */}
                        <Button variant="contained" style={Rbtn1}>Nos projet</Button>
                        <Button variant="outlined" style={Rbtn2}>Calculer le coût</Button>
                    </div>
                </div>
                <div></div>
            </div>
                </>)
        }

}
export default FirstContent;