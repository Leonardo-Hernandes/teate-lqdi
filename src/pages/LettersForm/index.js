import FormInput from './formInput';

import {
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from "@mui/material";

import './styles.css';

function LettersForm() {

    const MakeInput = ({ title, rows }) => {
        return (
            <>
                <Typography className="formTitle">
                    {title}
                </Typography>
                <FormInput rows={rows} />
            </>
        )
    }

    return (
        <Container maxWidth="xl" style={{marginBottom: "5rem"}}>
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
                    <Grid container>
                        <div className="formBox">
                            <MakeInput title="Seu nome (requerido)" />
                            <MakeInput title="Seu E-mail (requerido)" />
                            <MakeInput title="Assunto" />
                            <MakeInput title="Mensagem" rows={4} />
                            <Button variant="contained" className='formButton'>
                                Enviar
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LettersForm;