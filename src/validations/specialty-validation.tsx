import * as Yup from "yup";

const SpecialtyValidations = () => {
    return Yup.object({
        specialty:
            Yup.string()
                .required("Especialidade é Obrigatório.")
                .trim()
        ,
    })
}

export default SpecialtyValidations