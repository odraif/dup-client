import React from "react";
import Button from '@mui/material/Button';
import Pic from "./circuit-icon-png-18.png";
import "./intro.css";


export default function FirstContent(props) {
    const {next}=props;

    const handlegoclick =()=>{
        next()
    }
    return (
        <>
            <div className="introCentre" >
                <img src={Pic} alt="digital marketing" />
                <div className="introBtn">
                    <Button
                        variant="contained"
                        className="m-auto"
                        style={{ margin: "10px", padding: "10px 20px", minWidth: "100px", backgroundColor: "#fff", color: "#041560", fontWeight: "bold" }}> Nos projet</Button>
                    <Button
                        variant="outlined"
                        onClick={handlegoclick}
                        className="m-auto mt-3 animbutton"
                        style={{ borderColor: "#fff", color: "#fff", padding: "10px 20px", margin: "10px", minWidth: "100px", fontWeight: "bold" }}> Calculer le coût</Button>
                </div>
            </div >
        </>
    );
}