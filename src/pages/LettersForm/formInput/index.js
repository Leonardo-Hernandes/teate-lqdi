import * as React from 'react';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const CustomInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: '#F1F4F9',
        color: '#000',
        fontSize: 16,
        width: '100%',
        height: '30px',
        padding: '10px 12px',
        borderRadius: '45px',
        marginBottom: '20px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
    },
}));

const CustomMultlineInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: '#F1F4F9',
        color: '#000',
        fontSize: 16,
        width: '100%',
        height: '30px',
        padding: '10px 12px',
        borderRadius: '20px',
        marginBottom: '20px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
    },
}));

function FormTextField({ rows }) {

    return rows ? <CustomMultlineInput
        id="form-input"
        fullWidth
        multiline
        rows={rows}
    /> : <CustomInput
        id="form-input"
        fullWidth
    />
}

export default FormTextField;