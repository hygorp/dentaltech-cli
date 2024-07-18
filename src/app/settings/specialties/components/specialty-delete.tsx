"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Trash2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {DeleteSpecialty} from "@/services/specialty-service";
import {toast} from "@/components/ui/use-toast";
import {useState} from "react";
import {Bounce} from "@/components/ui/bounce";

const SpecialtyDelete = ({specialty, token}: { specialty: Specialty, token: string }) => {
    const {push} = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const specialtyId = specialty.id as number;

    const handleDelete = async (id: number) => {
        setIsLoading(true)

        try {
            await DeleteSpecialty(id, token).then((status) => {
                if (status === 204) {
                    toast({
                        title: "Pronto!",
                        description: "Especialidade excluída com sucesso.",
                        variant: "success"
                    })
                }

                if (status === 403) {
                    toast({
                        title: "Atenção!",
                        description: "Você não possui permissão.",
                        variant: "warning"
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
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className={"w-5 h-5 group"} variant={"ghost"} size={"icon"}>
                    <Trash2
                        className={"text-neutral-700 dark:text-primary w-4 h-4 group-hover:text-primary"}/>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <Bounce show={isLoading} size={"large"}/>
                <AlertDialogHeader>
                    <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                    <AlertDialogDescription>
                        A ação de deletar <strong>{specialty.specialty}</strong> não pode ser desfeita.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(specialtyId)}>
                        Continuar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SpecialtyDelete
