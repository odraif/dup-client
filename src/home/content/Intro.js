import React from "react";
import Button from '@mui/material/Button';

import "./intro.css";
export default function FirstContent() {
    return (
        <div className="introCentre" >
            <div style={{ minHeight: "100px" }} className="introBar">
                <p style={{ color: "#fff" }} >
                    <b>Digitalise</b> votre entreprise
                    pour améliorer la communication interne et externe ainsi que
                    l’engagement avec votre  client.</p>
            </div>
            <div className="introBtn">
                <Button variant="contained" className="m-auto" style={{ margin: "10px",padding:"10px 20px", minWidth: "200px", backgroundColor: "#fff", color: "#041560", fontWeight: "bold" }}> Nos projet</Button>
                <Button variant="outlined" style={{ borderColor: "#fff", color: "#fff",padding:"10px 20px", margin: "10px", minWidth: "200px", fontWeight: "bold" }}> Calculer le coût</Button>
            </div>
        </div >
    );
}