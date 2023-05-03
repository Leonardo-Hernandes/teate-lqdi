import * as React from 'react';

import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useRegistrationForm } from '../useRegistrationForm';

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

function FormTextField({
    rows,
    value,
    id,
    type
}) {
    const formik = useRegistrationForm();

    return rows ? <CustomMultlineInput
        id="form-input"
        fullWidth
        multiline
        rows={rows}
    /> : <CustomInput
        id="name"
        label="Nome"
        type="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        // id={id}
        // type={type}
        // value={value}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        fullWidth
    />
}

export default FormTextField;