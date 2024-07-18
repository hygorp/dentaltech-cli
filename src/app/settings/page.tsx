"use client"

import {useRouter} from "next/navigation";
import React, {useContext, useEffect} from "react";
import {AppContext} from "@/contexts/app-context";
import {SettingsContainer} from "@/app/settings/components/settings-container";
import {Separator} from "@/components/ui/separator";

const AppSettings = () => {
    const {isAuthenticated} = useContext(AppContext)
    const {push} = useRouter()

    useEffect(() => {
        isAuthenticated ? (() => {
                push("/settings")
            })()
            : (() => {
                push("/login")
            })()
    }, [isAuthenticated, push]);

    return (
        <SettingsContainer title={"Configurações de Conta - Dentaltech"}>
            <div>
                <h3 className="text-lg font-medium">Minha Conta</h3>
                <p className="text-sm text-muted-foreground">
                    Veja ou atualize suas configurações de Usuário.
                </p>
            </div>
            <Separator/>

        </SettingsContainer>
    )
}

export default AppSettings;
