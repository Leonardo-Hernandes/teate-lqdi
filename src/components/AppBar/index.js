import { Button, Grid, Typography } from "@mui/material";
import LqdiLogo from '../../assets/logo-lqdi-positivo.svg';

import './styles.css';

function AppBar() {
    return (
        <Grid container className='AppBar'>
            <Grid item xs={6} className='logo'>
                <img src={LqdiLogo} alt="LQDI base logo" />
            </Grid>
            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={8} className='alignContent'>
                        <Typography>
                            Agende uma reunião conosco
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className='alignContent'>
                        <Button variant="contained" className='button'>
                            Começar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AppBar;