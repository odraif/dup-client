import React from "react";
import Button from '@mui/material/Button';
// import Pic from "./circuit-icon-png-18.png";
// import logo from "../nav/logo.png";
import "./intro.css";
import About from "../../about/about";


export default function FirstContent(props) {
    const { next } = props;
    document.title = "Home | Bienvevue"

    const handlegoclick = (val) => {
        next(val)
    }
    return (
        <>
            <div className="introCentre" >
                <div style={{zIndex:"100"}}>
                    <About></About>
                </div>
                <div>
                    <div className="introBtn">
                        <Button
                            variant="contained"
                            className="m-auto"
                            onClick={async () => { handlegoclick(2) }}
                            style={{ margin: "10px", padding: "10px 20px", minWidth: "100px", backgroundColor: "#fff", color: "#041560", fontWeight: "bold" }}> Nos projet</Button>
                        <Button
                            variant="outlined"
                            onClick={async () => { handlegoclick(1) }}
                            className="m-auto mt-3 animbutton"
                            style={{ borderColor: "#fff", color: "#fff", padding: "10px 20px", margin: "10px", minWidth: "100px", fontWeight: "bold" }}> Calculer le coût</Button>
                    </div>
                </div>
            </div >
        </>
    );
}