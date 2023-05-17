import React from 'react';
import TextField from '@mui/material/TextField';
import "../style/form.css";
import { useForm } from 'react-hook-form';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#6F7E8C',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#E0E3E7',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&:before, &:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        '&:before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

const Entreprise = (props) => {
    const { back,next, userdata } = props;
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await userdata(data);
        await next();
    };
    const outerTheme = useTheme();
    const inputStyles = {
        color: 'white', // Set your desired input color here
      };
    return (
        <div className='view-card'>
            <div className="container ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("NomEntrepise")} label="Nom d'entrepise" variant="standard" required margin="dense" />
                        </div>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("RC", { pattern: /^[0-9]+$/i })} label="R.C" variant="standard" required margin="dense" />
                        </div>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("Patente", { pattern: /^[0-9]+$/i })} label="Patente" variant="standard" required margin="dense" />
                        </div>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("IF", { pattern: /^[0-9]+$/i })} label="I.F" variant="standard" required margin="dense" />
                        </div>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("ICE", { pattern: /^[0-9]+$/i })} label="ICE" variant="standard" required margin="dense" />
                        </div>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("Adresse")} label="Adresse" variant="standard" required margin="dense" />
                        </div>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("SiteWeb")} label="SiteWeb" variant="standard" margin="dense" />
                        </div>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("NomPersonnel")} label="Nom personnel" variant="standard" required margin="dense" />
                        </div>
                        <div className="group">
                            <TextField id="filled-basic" inputProps={{ style: inputStyles }} {...register("ResponsableServie")} label="Responsable du service" variant="standard" required margin="dense" />
                        </div>
                        <div className='groupbtn'>
                            <button onClick={()=> back(0)} className='autbtn'>Présedent</button>
                            <input type="submit" value="Suivant" className='btn'/>
                        </div>
                    </ThemeProvider>
                </form>
            </div>
        </div>
    );
}

export default Entreprise;
