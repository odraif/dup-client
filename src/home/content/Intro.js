import React, { useEffect } from "react";

function FirstContent() {


    useEffect(()=>{

    },[]);
    const content = {
        display: "flex",
        marginTop:"2%"
    }
    const para = {
        color: "#fff",
        padding: "5%",
        fontSize: "50px",
    }
    const bar = {
        borderColor: "#fff",
        height: "2px",
        width: "500px",
        margin:"0 0 0 -80px",
        backgroundColor: "#fff",
        transform: "rotate(90deg)",
        borderRadius: "20px",
        position:"relative",
        top:"40vh"
    }
    const views = {
        width:"55%",
        margin:"2%"
    }
    const buttons = {
        display: "flex",
        flexDirection: "column",
        width:"40%",
        padding: "5%",
        marginLeft:"-200px",
        
    }
    const btn1 = {
        border:"1px solid #fff",
        width:"80%",
        backgroundColor:"#fff",
        color:"#286385",
        fontSize:"20px",
        fontWeight:"bold",
        padding:"20px 20px",
        borderRadius: "20px",
        margin:"auto",
    }
    const btn2 = {
        border:"1px solid #fff",
        width:"100%",
        backgroundColor:"rgba(255, 255, 255, 0)",
        color:"#fff",
        fontSize:"20px",
        fontWeight:"bold",
        padding:"20px 20px",
        margin:"auto",
        borderRadius: "20px",
        marginTop:"-90px",
        
    }

    return (
        <div style={{margin:"auto"}}>
            <div style={content}>
                <div style={views}>
                    <p style={para}><b>Digitalise</b> votre entreprise 
                    pour améliorer la communication interne et externe ainsi que 
                    l’engagement avec votre  client.</p>
                </div>
                <div style={bar}>
                </div>
                <div style={buttons}>
                    <button style={btn1}>Nos projet</button>
                    <button style={btn2}>Calculer le coût</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}
export default FirstContent;