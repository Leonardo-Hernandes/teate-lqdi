import Keyboard from '../../assets/images/keyboard.png';
import Tablet from '../../assets/images/tablet.png';
import TextField from '../../components/textField';
import Facebook from '../../assets/icons/feFacebook2.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Linkedin from '../../assets/icons/linkedin.svg';

import {
    Container,
    Grid,
    Typography
} from "@mui/material";

import './styles.css';

function Letters() {




    const Letter = ({ image, title, subTitle }) => {
        return (
            <>
                <div style={{ padding: "3rem" }}>
                    <img src={image} />
                    <Typography className='lettersTitle'>
                        {title}
                    </Typography>
                    <Typography className='lettersSubTitle'>
                        {subTitle}
                    </Typography>
                    
                    <Typography
                    className='lettersSubTitle'
                    style={{marginTop: '4rem'}}
                    >
                    Ir para o artigo
                    </Typography>
                </div>
            </>
        )
    }

    const Icon = ({image}) => {
        return (
            <div className='icon'>
                <img src={image}/>
            </div>
        )
    }

    return (
        <div style={{ backgroundColor: "#fff" }}>
            <Container maxWidth="xl">
                <Grid container style={{height: "75vh"}}>
                    <Grid item xs={7}>
                        <Grid container style={{ height: '100%'}}>
                            <Grid item xs={6} style={{height: '95%'}}>
                                <Letter
                                    title="Por que é importante ter um site de qualidade?"
                                    subTitle="Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão..."
                                    image={Keyboard}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Letter
                                    title="6 dicas para trabalhar com marketing digital com verba limitada"
                                    subTitle="Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão..."
                                    image={Tablet}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <div className='receiveBox'>
                            <Container>
                                <Grid container>
                                    <Grid item xs={9}>
                                        <Typography className='receiveBoxTitle'>
                                            Receba os nossos artigo de interesse na sua caixa de entrada.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField className="input" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography className='receiveBoxSubTitle'>
                                            Siga-nos em nossas mídias sociais
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Icon image={Instagram}/>
                                            <Icon image={Facebook}/>
                                            <Icon image={Linkedin}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Letters;