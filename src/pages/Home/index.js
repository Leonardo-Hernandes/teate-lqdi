import './styles.css';

import Phone from '../../assets/images/phone.png';
import Buildings from '../../assets/images/buildings.png';
import Meeting from '../../assets/images/meeting.png';
import AppBar from '../../components/AppBar';


import {
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';

function Home() {

    return (
        <Container maxWidth="xl">
            <AppBar/>
            <div style={{ marginTop: "5rem" }}>
                <Grid container>
                    <Grid item xs={5}>
                        <Typography className='homeTitle'>
                            Construímos estratégias, design e tecnologia de ponta para o seu negócio
                        </Typography>
                        <Typography className='homeSubTitle'>
                            Converse com nossa equipe sobre o seu projeto.
                        </Typography>
                        <Button variant="contained" className='homeButton'>
                            Começar
                        </Button>
                        {/* <img src={Phone} /> */}
                    </Grid>

                    <Grid item xs={7}>
                        <Grid container>
                            <Grid item xs={6}>
                                <img src={Phone} />
                                <img src={Buildings} />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={Meeting} />

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </div>

        </Container>
    )
}

export default Home;