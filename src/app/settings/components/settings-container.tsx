"use client"

import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "@/contexts/app-context";
import {useRouter} from "next/navigation";
import Header from "@/components/ui/header";
import {Bounce} from "@/components/ui/bounce";
import {Container} from "@/components/ui/container";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {CalendarCog, Stethoscope, UserCog} from "lucide-react";
import {MainContainer} from "@/components/ui/main-container";

const SettingsContainer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
    title?: string
    route?: string
}
>(({title, route, ...props}, ref) => {
    const {isAuthenticated} = useContext(AppContext)
    const {push} = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        isAuthenticated ? (() => {
                push(`/settings/${route ?? ""}`)
                setIsLoading(false)
            })()
            : (() => {
                push("/login")
                setIsLoading(false)
            })()
    }, [isAuthenticated, push, route]);
    
    return (
        <MainContainer title={title}>
            <Header/>
            <Bounce show={isLoading} size={"large"}/>

            <Container>
                <div>
                    <h3 className="text-2xl text-primary font-bold tracking-tight">
                        Configurações
                    </h3>
                    <p className="text-sm leading-1 [&:not(:first-child)]:mt-1">
                        Gerencie as configurações da sua conta e defina preferências.
                    </p>
                </div>
                <Separator className={"my-6"}/>
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-16 lg:space-y-0">
                    <aside className="-mx-3 lg:w-1/3">
                        <nav className={"flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"}>
                            <Button variant={"ghost"} className={`flex flex-row justify-start 
                                    ${route == undefined ? "bg-accent" : ""}`}
                                    onClick={() => push("/settings")}>
                                <UserCog className={"mr-2 w-4 h-4"}/>
                                Conta
                            </Button>
                            <Button variant={"ghost"} className={`flex flex-row justify-start 
                                    ${route == "specialists" ? "bg-accent" : ""}`}
                                    onClick={() => push("/settings/specialists")}>
                                <Stethoscope className={"mr-2 w-4 h-4"}/>
                                Dentistas
                            </Button>
                            <Button variant={"ghost"} className={`flex flex-row justify-start 
                                    ${route == "specialties" ? "bg-accent" : ""}`}
                                    onClick={() => push("/settings/specialties")}>
                                <UserCog className={"mr-2 w-4 h-4"}/>
                                Especialidades
                            </Button>
                            <Button variant={"ghost"} className={`flex flex-row justify-start 
                                    ${route == "schedule" ? "bg-accent" : ""}`}
                                    onClick={() => push("/settings/schedule")}>
                                <CalendarCog className={"mr-2 w-4 h-4"}/>
                                Dias e Horários
                            </Button>
                        </nav>
                    </aside>

                    <div className={"w-full space-y-6"} ref={ref} {...props}/>
                </div>
            </Container>
        </MainContainer>
    )
})

SettingsContainer.displayName = "SettingsContainer"

export {SettingsContainer}