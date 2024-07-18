"use client"

import {MainContainer} from "@/components/ui/main-container";
import Header from "@/components/ui/header";
import {Bounce} from "@/components/ui/bounce";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "@/contexts/app-context";
import {useRouter} from "next/navigation";

const Panel = () => {
    const {isAuthenticated} = useContext(AppContext)
    const {push} = useRouter();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        isAuthenticated ? (() => {
            push("/panel");
            setIsLoading(false);
        })() : (() => {
            push("/login");
            setIsLoading(false);
        })()
    }, [isAuthenticated, push]);

    return (
        <MainContainer title={"Painel - Dentaltech"}>
            <Header/>
            <Bounce show={isLoading} size={"large"}/>
        </MainContainer>
    )
}

export default Panel;
