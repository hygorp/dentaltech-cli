import * as React from "react"

import {cn} from "@/lib/utils"
import {Field} from "formik";
import {IMaskInput} from "react-imask";
import {Search} from "lucide-react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
}

export interface MaskedInputProps extends InputProps {
    mask?: string
    setValue?: string
}

const Input = React.forwardRef<HTMLInputElement, MaskedInputProps>(
    ({className, type, mask, setValue, ...props}, ref) => {
        return (
            <Field
                as={IMaskInput}
                value={setValue}
                type={type}
                className={cn("" +
                    "flex " +
                    "h-10" +
                    " w-full " +
                    "rounded-md " +
                    "border " +
                    "border-input " +
                    "bg-background " +
                    "px-3 " +
                    "py-2 " +
                    "text-sm " +
                    "ring-offset-background " +
                    "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)}
                ref={ref}
                mask={mask}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

const InputSearch = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, ...props}, ref) => {
        return (
            <div className={cn("group flex flex-row items-center h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50")}>
                <Search className={"min-w-4 min-h-4 mr-2 text-muted-foreground group-focus-within:text-primary"}/>
                <input
                    type={type}
                    className={cn("min-w-full h-full bg-transparent border-none focus:outline-none", className)}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
InputSearch.displayName = "InputSearch"

export {Input, InputSearch}
