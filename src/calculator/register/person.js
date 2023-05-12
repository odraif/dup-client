
import React from 'react';
import TextField from '@mui/material/TextField';
import "../style/form.css";
import { useForm } from 'react-hook-form';

function Person(props) {
    const { next, userdata } = props;
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        await userdata(data);
        await next();
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="group">
                        <TextField id="filled-basic" {...register("Nom", { pattern: /^[A-Za-z\s]+$/i })} label="Nom" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("Prenom", { pattern: /^[A-Za-z\s]+$/i })} label="Prénom" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("CIN")} label="CIN" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("Email")} label="Email" type='email' variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("NumTel", { pattern: /^[0-9]+$/i })} title='only numbers' label="Numero de telephone" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("Adresse")} label="Adresse" variant="standard" margin="dense" />
                    </div>
                    <div>
                        <input type="submit" value="Suivant" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Person;