"use client"

import {Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import SpecialtyValidations from "@/validations/specialty-validation";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Bounce} from "@/components/ui/bounce";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {CreateSpecialty} from "@/services/specialty-service";
import {toast} from "@/components/ui/use-toast";

const SpecialtyCreateForm = ({token}: { token: string }) => {
    const {push} = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFormikSubmit = async (specialty: Specialty) => {
        setIsLoading(true);

        try {
            await CreateSpecialty({specialty, token}).then((status) => {
                if (status === 201) {
                    toast({
                        title: "Pronto!",
                        description: "Especialidade criada com sucesso.",
                        variant: "success"
                    })
                }
            })
        } catch (error) {
            toast({
                title: "Erro",
                description: "Houve uma falha no servidor.",
                variant: "error"
            })
        } finally {
            setIsLoading(false)
            push("/settings/specialties/redirect")
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} size={"default"}>
                    <Plus className={"mr-2 w-4 h-4"}/>
                    Nova
                </Button>
            </DialogTrigger>
            <DialogContent className={"md:w-2/3 lg:w-2/5 px-10 py-10"}>
                <DialogTitle>
                    <div className={"flex flex-col justify-center mb-5"}>
                        <h1 className={"text-primary text-2xl font-bold md:text-2xl lg:text-3xl"}>
                            Nova Especialidade
                        </h1>

                        <small className="text-xs text-muted-foreground font-medium leading-6 md:text-sm lg:text-sm">
                            Certifique-se de preencher corretamente as informações.
                        </small>
                    </div>
                </DialogTitle>
                <DialogBody>
                    <Bounce show={isLoading} size={"large"}/>
                    <Formik
                        initialValues={{
                            specialty: "",
                            description: ""
                        }}
                        validationSchema={SpecialtyValidations}
                        onSubmit={async (values) => {
                            values.specialty = values.specialty.trim()
                            values.description = values.description.trim()

                            const specialty: Specialty = {
                                specialty: values.specialty,
                                description: values.description
                            }

                            await handleFormikSubmit(specialty)
                        }}
                    >
                        {({errors, touched}) => (
                            <Form tabIndex={0}>
                                <div className={"flex flex-col gap-5"}>
                                    <div className={"w-full flex flex-col md:flex-col lg:flex-row gap-5"}>
                                        <div className={"w-full flex flex-col space-y-1.5 gap-1"}>
                                            <Label htmlFor={"specialty"}>Especialidade</Label>
                                            <Input
                                                name={"specialty"}
                                                type={"text"}
                                                placeholder={"Ex. Ortodontia"}
                                                className={`
                                                ${!errors.specialty || !touched.specialty ?
                                                    ''
                                                    :
                                                    'border-red-500 dark:border-red-600 focus-visible:ring-2 focus-visible:ring-red-400'
                                                }`
                                                }
                                            />
                                            <ErrorMessage
                                                name={"specialty"}
                                                component={"div"}
                                                className={"text-xs text-red-500"}
                                            />
                                        </div>
                                    </div>

                                    <div className={"w-full flex flex-col md:flex-col lg:flex-row gap-5 mt-2"}>
                                        <div className={"w-full flex flex-col space-y-1.5 gap-1"}>
                                            <Label htmlFor={"description"}>Descrição</Label>
                                            <Field
                                                as={Textarea}
                                                name={"description"}
                                                placeholder={"Digite a descrição aqui"}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 flex justify-between">
                                    <Button type={"submit"}>
                                        Salvar
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </DialogBody>
                <DialogDescription/>
            </DialogContent>
        </Dialog>
    )
}

export default SpecialtyCreateForm
