import React from "react";
import Button from '@mui/material/Button';
import Pic from "./circuit-icon-png-18.png"
import TV from "./digital_home.mp4"
import "./intro.css";

export default function FirstContent() {
    return (
        <>
            <div dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${TV}"
          class="home_Video"
        />,
      ` }}></div>
            <div className="introCentre" >
                <img src={Pic} alt="digital marketing" />
                <div className="introBtn">
                    <Button
                        variant="contained"
                        className="m-auto"
                        style={{ margin: "10px", padding: "10px 20px", minWidth: "200px", backgroundColor: "#fff", color: "#041560", fontWeight: "bold" }}> Nos projet</Button>
                    <Button
                        variant="outlined"
                        style={{ borderColor: "#fff", color: "#fff", padding: "10px 20px", margin: "10px", minWidth: "200px", fontWeight: "bold" }}> Calculer le coût</Button>
                </div>
            </div >
        </>
    );
}