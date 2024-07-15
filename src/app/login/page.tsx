"use client"

import {Container} from "@/components/ui/container";
import {Bounce} from "@/components/ui/bounce";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {AppContext} from "@/contexts/app-context";
import {ToggleTheme} from "@/components/ui/toggle-theme";
import {Form, Formik, FormikValues} from "formik";
import LoginValidation from "@/validations/login-validation";
import {LoginForm} from "@/app/login/components/login-form";
import {toast} from "@/components/ui/use-toast";

const Login = () => {
    const {isAuthenticated, login} = useContext(AppContext)
    const {push} = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        isAuthenticated ? push("/panel") : (() => {
            push("/login");
            setIsLoading(false);
        })()
    }, [isAuthenticated, push]);

    const handleFormikSubmit = async (values: FormikValues) => {
        setIsLoading(true)

        try {
            await login(values.username, values.password).then((status) => {
                if (status === 200) {
                    push("/panel")
                } else if (status === 401) {
                    toast({
                        title: "Ops...",
                        description: "Usuário ou senha incorretos.",
                        variant: "warning"
                    })
                } else if (status === 409) {
                    toast({
                        title: "Atenção!",
                        description: "Você possui uma sessão ativa.",
                        variant: "warning"
                    })
                }
            })
        } catch (error) {
            toast({
                title: "Ops...",
                description: "Houve uma falha.",
                variant: "error"
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Container title={"Dentaltech - Login"} className={"h-screen flex flex-col justify-center items-center"}>
            <Bounce show={isLoading} size={"large"}/>
            <ToggleTheme className="absolute right-0 top-0 m-5"/>

            <Formik
                initialValues={{username: "", password: ""}}
                validationSchema={LoginValidation}
                onSubmit={async (values) => {
                    values.username = values.username.trim().toLowerCase()
                    values.username = values.username.trim()

                    await handleFormikSubmit(values)
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <LoginForm
                            title={"Login"}
                            errors={errors}
                            touched={touched}
                        />
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default Login;
