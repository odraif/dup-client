import React, { useState } from 'react';
import Person from './person';
import Entreprise from './entreprise';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import "../style/form.css"
const Type = (props) => {
    const [choice, setchoice] = useState(0);
    const { next, data } = props
    const back = (val)=>{
        setchoice(val)
    }

    switch (choice) {
        case 1:
            return (<Person next={next} back={back} userdata={data}></Person>);
        case 2:
            return (<Entreprise next={next} back={back} userdata={data}></Entreprise>);
        default:
            return (
                <>
                    <div className='cont'>
                        <button className='choiceButton' style={{minWidth:"150px"}} onClick={async () => setchoice(1)}>
                            <FontAwesomeIcon icon={faUser} />
                            <br></br>
                            person</button>
                        <button className='choiceButton' style={{minWidth:"150px"}} onClick={async () => setchoice(2)}>
                            <FontAwesomeIcon icon={faBuilding} />
                            <br></br>
                            entreprise</button>
                    </div>
                </>
            );
    }
}

export default Type;
