import React from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {ErrorMessage, FormikErrors, FormikTouched} from "formik";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import IconInputPassword from "@/components/ui/icon-input-password";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const LoginForm = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    errors: FormikErrors<any>,
    touched: FormikTouched<any>
}
>(({title, errors, touched, ...props}, ref) => {
    return (
        <div ref={ref} {...props}>
            <Card className={"min-w-[400px] w-full md:w-[450px] lg:w-[550px] p-5"}>
                <CardHeader>
                    <div className={"flex flex-col items-start"}>
                        <h1 className={"text-gray-700 dark:text-white text-2xl cursor-pointer"}>{title}</h1>

                        <h1 className={"logo-font text-primary text-5xl cursor-pointer"}
                            title={"Dentaltech"}>Dentaltech</h1>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className={"grid w-full items-center gap-4 mt-1"}>
                        <div className={"flex flex-col space-y-1.5 gap-1"}>
                            <Label htmlFor={"username"} className={"text-gray-700 dark:text-white"}>Usuário</Label>
                            <Input
                                name={"username"}
                                type={"text"}
                                className={`
                                    ${!errors.username || !touched.username ?
                                        ''
                                        :
                                        'border-red-500 dark:border-red-600 focus-visible:ring-2 focus-visible:ring-red-400'
                                    }`
                                }
                            />
                            <ErrorMessage name={"username"} component={"div"} className={"text-xs text-red-500"}/>
                        </div>

                        <div className={"flex flex-col space-y-1.5 gap-1"}>
                            <Label htmlFor={"password"} className={"text-gray-700 dark:text-white"}>Senha</Label>
                            <IconInputPassword
                                name={"password"}
                                className={`
                                    ${!errors.password || !touched.password ?
                                        'focus-within:ring-primary'
                                        :
                                        'border-red-500 dark:border-red-600 focus-visible:ring-2 focus-within:ring-red-400'
                                    }`
                                }
                            />
                            <ErrorMessage name={"password"} component={"div"} className={"text-xs text-red-500"}/>
                        </div>

                        <div className={"flex justify-between"}>
                            <div className={"flex items-center space-x-2"}>
                                <Checkbox name={"remember"} value={"remember"} className={"border border-gray-300"}/>
                                <Label htmlFor={"remember"}
                                       className={"text-gray-700 dark:text-white"}>Lembrar-me</Label>
                            </div>

                            <div className={"flex items-center space-x-2"}>
                                <Link
                                    href={"/reset-password"}
                                    className={"text-sm font-medium text-gray-700 hover:underline dark:text-white"}
                                >
                                    Esqueci minha Senha
                                </Link>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className={"flex flex-col"}>
                    <Button type={"submit"} className={"w-full"}>Entrar</Button>
                </CardFooter>
            </Card>
        </div>
    )
})

LoginForm.displayName = "LoginForm"

export {LoginForm}