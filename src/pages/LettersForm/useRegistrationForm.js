import { useFormik } from "formik";
import * as yup from "yup";

export const useRegistrationForm = () => {
    const nameValidationRegex = /^[a-zA-Z \u00C0-\u024F\']+$/;

    const validationSchema = yup.object({
        name: yup
            .string()
            .trim()
            .min(4, "O nome deve conter no mínimo 4 caracteres")
            .matches(
                nameValidationRegex,
                "Nome inválido. Este campo não pode conter números ou caracteres especiais"
            )
            .required("Campo obrigatório. Por favor, digite seu nome"),
        email: yup
            .string()
            .email("Email inválido, por favor digite seu email novamente")
            .trim()
            .required("Campo obrigatório. Por favor, digite seu email"),
       subject: yup.string().trim(),
       message: yup.string().trim(),
    });

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    return useFormik({
        initialValues,
        initialErrors: { name: "initial error" },
        validationSchema,
        onSubmit: () => { },
    });
};
