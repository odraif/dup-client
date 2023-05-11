import React, { useState } from 'react';
import Person from './person';
import Entreprise from './entreprise';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

const Type = (props) => {
    const [choice,setchoice] = useState(0);
    const {next} = props

    switch(choice){
        case 1:
            return(<Person next={next}></Person>);
        case 2 :
            return(<Entreprise next={next}></Entreprise>);
        default:
            return(
                <>
                    <button onClick={async () => setchoice(1)}>
                    <FontAwesomeIcon icon={faUser} />
                        person</button>
                    <button onClick={async () => setchoice(2)}>
                    <FontAwesomeIcon icon={faBuilding} />
                        entreprise</button>
                </>
            );
    }
}

export default Type;
