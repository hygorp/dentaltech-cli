"use client"

import {Bounce} from "@/components/ui/bounce";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const SpecialtyRedirectPage = () => {
    const { push } = useRouter();

    useEffect(() => {
        push("/settings/specialties")
    }, [push]);

    return (
        <Bounce show={true} size={"large"}/>
    )
}

export default SpecialtyRedirectPage;
