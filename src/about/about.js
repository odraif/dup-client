import React from 'react';
import logo from "../home/nav/logo.png";
import "./style.css"

const About = (props) => {
    const {go}=props;
    return (
        <div className='aboutcontent'>
            <div className='aboutheader'> 
                <div>
                    <img src={logo} alt="logo" className='aboutlogo'/>
                </div>
                <div className='aboutbar'></div>
                <div><h1>D.U.P</h1></div>
            </div>
            <div className='aboutname'>
                <h2>DIGITIZE YOUR PRODUCTION</h2>
            </div>
            <div className='aboutpara'>
                <p>
                    DUP est une agence crée en 2020, spécialisée dans le dévleoppement
                    informatique et la création de logiciels spécifique et des site web.
                    Elle a fondé son savoir-faire et sa réputation dans des analyses
                    fonctionnelles et techniques rigoureuses, basées sur le besoin et la
                    compréhension de clients.
                </p>
                <p>
                    Une équipe de programmeurs confirmés, maîtrisant parfaitement les
                    différents langages de programmation, s’engage à développer dans les
                    règles de l’art l’application demandée.
                </p>
            </div>
            <div className='aboutbutton'>
                <button className='btn' onClick={()=>go(3)}>Contact-nous</button>
            </div>
        </div>
    );
}

export default About;
