import React from 'react';
import TextField from '@mui/material/TextField';
import "../style/form.css";

const Entreprise = (props) => {
    const { next } = props;
    const submitAndNext = () => {
        next()
    }
    return (
        <div>
            <div class="container">
                <form>
                    <div class="group">
                        <TextField id="filled-basic" label="Nom d'entrepise" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="R.C" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="Patente" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="I.F" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="ICE" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="Adresse" variant="standard" margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="SiteWeb" variant="standard" margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="Nom personnel" variant="standard" required margin="dense"/>
                    </div>
                    <div class="group">
                        <TextField id="filled-basic" label="Responsable du servie" variant="standard" required margin="dense"/>
                    </div>
                </form>
            </div>
            <button onClick={submitAndNext}>Suivant</button>
        </div>
    );
}

export default Entreprise;
