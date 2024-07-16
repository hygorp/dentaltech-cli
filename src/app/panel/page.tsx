"use client"

import {Container} from "@/components/ui/container";
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
        <Container title={"Painel - Dentaltech"}>
            <Header/>
            <Bounce show={isLoading} size={"large"}/>
        </Container>
    )
}

export default Panel;
