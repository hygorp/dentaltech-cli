import * as Yup from "yup";

const LoginValidation = () => {
    return Yup.object({
        username:
            Yup.string()
                .required("Usuário é obrigatório"),
        password:
            Yup.string()
                .required("Senha é obrigatório")
    })
}

export default LoginValidation;