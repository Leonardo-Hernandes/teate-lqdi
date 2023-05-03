import * as React from 'react';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: '#000',
        color: '#fff',
        border: '2px solid #ced4da',
        fontSize: 16,
        width: '100%',
        height: '48px',
        padding: '10px 12px',
        borderRadius: '45px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            backgroundColor: '#fff',
            color: '#000',
            borderColor: '#000',
        },
    },
}));

function TextField() {
    return <BootstrapInput
        id="bootstrap-input"
        placeholder='Escreva aqui o seu e-mail'
    />
}

export default TextField;