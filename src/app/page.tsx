"use client";

import {useContext, useEffect} from "react";
import {AppContext} from "@/contexts/app-context";
import {useRouter} from "next/navigation";
import {Bounce} from "@/components/ui/bounce";

const Home = () => {
    const { isAuthenticated } = useContext(AppContext);
    const { push } = useRouter();

    useEffect(() => {
        isAuthenticated ? push("/panel") : push("/login")
    }, [isAuthenticated, push]);

    return (<Bounce show={true} size={"large"}/>)
}

export default Home;
