"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import {Check} from "lucide-react"
import {useField, useFormikContext} from "formik"

import {cn} from "@/lib/utils"

const CheckboxForm = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & { name: string, value: string }
>(({className, name, value, ...props}, ref) => {
    const [field] = useField({name})
    const {setFieldValue} = useFormikContext()

    const isChecked = Array.isArray(field.value) ? field.value.includes(value) : field.value

    const handleChange = (checked: any) => {
        if (checked) {
            setFieldValue(name, Array.isArray(field.value) ? [...field.value, value] : value).then()
        } else {
            setFieldValue(name, Array.isArray(field.value) ? field.value.filter((item) => item !== value) : "").then()
        }
    }

    return (
        <CheckboxPrimitive.Root
            ref={ref}
            checked={isChecked}
            onCheckedChange={handleChange}
            className={cn(
                "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                isChecked ? "bg-primary text-primary-foreground" : "bg-background text-foreground",
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
                <Check className="h-4 w-4"/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
})
CheckboxForm.displayName = CheckboxPrimitive.Root.displayName

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({className, ...props}, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-accent-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
            className
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
        >
            <Check className="h-4 w-4"/>
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {CheckboxForm, Checkbox}
