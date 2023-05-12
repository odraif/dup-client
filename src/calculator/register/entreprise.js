import React from 'react';
import TextField from '@mui/material/TextField';
import "../style/form.css";
import { useForm } from 'react-hook-form';

const Entreprise = (props) => {
    const { next, userdata } = props;
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await userdata(data);
        await next();
    };
    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="group">
                        <TextField id="filled-basic" {...register("NomEntrepise")} label="Nom d'entrepise" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("RC", { pattern: /^[0-9]+$/i })} label="R.C" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("Patente", { pattern: /^[0-9]+$/i })} label="Patente" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("IF", { pattern: /^[0-9]+$/i })} label="I.F" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("ICE", { pattern: /^[0-9]+$/i })} label="ICE" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("Adresse")} label="Adresse" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("SiteWeb")} label="SiteWeb" variant="standard" margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("NomPersonnel")} label="Nom personnel" variant="standard" required margin="dense" />
                    </div>
                    <div className="group">
                        <TextField id="filled-basic" {...register("ResponsableServie")} label="Responsable du service" variant="standard" required margin="dense" />
                    </div>
                    <div>
                        <input type="submit" value="Suivant"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Entreprise;
