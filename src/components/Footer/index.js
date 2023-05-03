import './styles.css';
import LqdiBlueLogo from '../../assets/logo-lqdi-positivo-azul.svg';

import {
    Container,
    Grid,
    Typography
} from "@mui/material";

function Footer() {
    const AdressComponent = ({ title, adress, phone }) => {
        return (
            <>
                <div style={{ marginBottom: '1rem' }}>
                    <Typography
                        style={{ fontFamily: 'Satoshi' }}
                        className='title'
                    >
                        {title}
                    </Typography>
                    <Typography
                        style={{ fontFamily: 'Satoshi-Light' }}
                        className='subTitle'
                    >
                        {adress}
                    </Typography>

                    <Typography
                        style={{ fontFamily: 'Satoshi-Light', marginTop: '1.4rem' }}
                        className='subTitle'
                    >
                        {phone}
                    </Typography>
                </div>
            </>
        )
    }

    return (
        <div style={{ backgroundColor: '#000' }} className='footerAlign'>
            <Container maxWidth="xl">
                <Grid container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                    <Grid item xs={5}>
                        <img src={LqdiBlueLogo} alt="Lqdi base blue logo" />
                    </Grid>

                    <Grid item xs={7}>
                        <Grid container>
                            <Grid item xs={6}>
                                <AdressComponent
                                    title="Brasil"
                                    adress="Rua da Consolação, 4393º andar, Consolação São Paulo"
                                    phone="+55 11 3280-0283"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <AdressComponent
                                    title="Portugal"
                                    adress="Av. República Nº6 - 1º Andar Lisboa"
                                    phone="+351 916 029 443"
                                />
                                <AdressComponent
                                    title="Holanda"
                                    adress="Jasykoffstraat 631506AT ZaandamThe Netherlands"
                                    phone="+31 622 333 744"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;