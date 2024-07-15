import React, {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Input} from "@/components/ui/input";

const IconInputPassword = ({ ...props }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={`flex items-center pr-2 border rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-offset-2 ${props.className}`}>
            <Input
                {...props}
                className={"border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 max-h-[38px]"}
                type={isVisible ? "text" : "password"}
            />
            {isVisible ?
                <EyeOff strokeWidth={1.5} className={"w-6 h-6 text-gray-500 cursor-pointer dark:text-neutral-300"} onClick={() => setIsVisible(!isVisible)}/>
                :
                <Eye strokeWidth={1.5} className={"w-6 h-6 text-gray-500 cursor-pointer dark:text-neutral-300"} onClick={() => setIsVisible(!isVisible)}/>
            }
        </div>
    )
}

export default IconInputPassword;