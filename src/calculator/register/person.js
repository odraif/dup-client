
import React from 'react';
import TextField from '@mui/material/TextField';
import "../style/form.css";

function Person(props) {
    const { next } = props;
    const submitAndNext = async () => {
        await next()
    }
    return (
        <>
            <div class="container">
                <form>
                    <div class="group">
                        <TextField id="filled-basic" label="Nom" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="Prénom" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="CIN" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="Email" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="Numero de telephone" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="Adresse" variant="standard" required margin="dense"/>
                    </div>
                </form>
                
            </div>
            <button onClick={submitAndNext}>Suivant</button>
        </>
    );
}

export default Person;