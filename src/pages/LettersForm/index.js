import react, { useState } from 'react';
import FormInput from './formInput';
import api from '../../axios/config';

import {
    Alert,
    Button,
    Container,
    Grid,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";

import './styles.css';
import { useRegistrationForm } from './useRegistrationForm';

function LettersForm() {
    const [openSuccess, setOpenSuccess] = useState();
    const [openError, setOpenError] = useState();
    const [isLoading, setIsLoading] = useState();
    const formik = useRegistrationForm();

    const handleSubmit = async () => {
        setIsLoading(true);
        const payload = makePayload(formik.values)

        try {
            await api.post("/api/register", payload)

            setOpenSuccess(true)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setOpenError(true)
            setIsLoading(false)
        }
    }

    const makePayload = (data) => {
        const payload = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.subject
        }

        return payload;
    }

    const handleCloseSuccess = () => {
        setOpenSuccess(false);
    }

    const handleCloseError = () => {
        setOpenError(false);
    }

    const MakeInput = ({
        title,
        rows,
        value,
        onChange,
        id,
        type
    }) => {
        return (
            <>
                <Typography className="formTitle">
                    {title}
                </Typography>
                <FormInput
                    rows={rows}
                    value={value}
                    onChange={onChange}
                    id={id}
                    type={type}
                />
            </>
        )
    }

    return (
        <Container maxWidth="xl" style={{ marginBottom: "5rem" }}>
            <Grid container>
                <Grid item xs={6}>
                    <Typography className="lettersFormTitle">
                        Viva uma nova experiência de comunicação integrada com foco nos resultados.
                    </Typography>
                    <Typography className="lettersFormSubTitle">
                        Escreva-nos sobre o seu projeto
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <div className="formBox">
                            {/* <MakeInput
                                title="Seu nome (requerido)"
                                id="name"
                                label="Nome"
                                type="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                error={formik.touched.name && formik.errors.name}
                                helperText={formik.touched.name && formik.errors.name}
                            />

                            <MakeInput title="Seu E-mail (requerido)" />
                            <MakeInput title="Assunto" />
                            <MakeInput title="Mensagem" rows={4} /> */}
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <Typography className="formTitle">
                                        {"Seu nome (requerido)"}
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        id="name"
                                        type="name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        error={formik.touched.name && formik.errors.name}
                                        helperText={formik.touched.name && formik.errors.name}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography className="formTitle">
                                        {"Seu E-mail (requerido)"}
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        error={formik.touched.email && formik.errors.email}
                                        helperText={formik.touched.email && formik.errors.email}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography className="formTitle">
                                        Assunto
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        id="subject"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.subject}
                                        error={formik.touched.subject && formik.errors.subject}
                                        helperText={formik.touched.subject && formik.errors.subject}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography className="formTitle">
                                        Mensagem
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        id="message"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message}
                                        error={formik.touched.message && formik.errors.message}
                                        helperText={formik.touched.message && formik.errors.message}
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        className='formButton'
                                        onClick={handleSubmit}
                                    >
                                        {isLoading ? 'Carregando' : 'Cadastrar'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                    Cadastro efetuado com sucesso!
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                    Ops, email ja cadastrado, tente novamente com outro por favor!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default LettersForm;