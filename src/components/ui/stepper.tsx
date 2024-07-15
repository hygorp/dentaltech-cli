import {cn} from "@/lib/utils";
import React from "react";
import {Separator} from "@/components/ui/separator";
import {Check} from "lucide-react";

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
    index?: number
    separator?: boolean
    isActive?: boolean
    isCompleted?: boolean
}

const Stepper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div ref={ref} className={cn("flex flex-row items-center mb-6", className)} {...props} />
    )
)
Stepper.displayName = "Stepper"

const Step = React.forwardRef<HTMLDivElement, StepProps>(
    ({className, index, separator, isActive, isCompleted, ...props}, ref) => (
        <>
            <div
                ref={ref}
                className={cn("flex flex-row items-center gap-2", className)}
                {...props}
            >
                <StepDisplay isActive={isActive} isCompleted={isCompleted}>
                    {isCompleted ? <Check className="w-5 h-5 text-white dark:text-accent"/> : index}
                </StepDisplay>
            </div>
            {separator && (
                <div className="w-1/2">
                    <Separator
                        orientation="horizontal"
                        className={cn(
                            "p-0.5 transition-colors duration-300 ease-linear",
                            isCompleted ? "bg-primary" : "bg-accent"
                        )}
                    />
                </div>
            )}
        </>
    )
)
Step.displayName = "Step"

const StepDisplay = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { isActive?: boolean; isCompleted?: boolean }
>(({className, children, isActive, isCompleted, ...props}, ref) => (
    <div
        ref={ref}
        className={cn(
            "w-10 h-10 flex justify-center items-center rounded-full font-bold transition-colors duration-300 ease-linear",
            isActive ? "bg-primary text-white dark:text-accent" : isCompleted ? "bg-primary text-white" : "bg-accent text-neutral-400",
            className
        )}
        {...props}
    >
        {children}
    </div>
))
StepDisplay.displayName = "StepDisplay"

const StepStatus = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({className, children, ...props}, ref) => (
        <div ref={ref} className={cn(className)} {...props}>
            {children}
        </div>
    )
)
StepStatus.displayName = "StepStatus"

export {Stepper, Step, StepDisplay, StepStatus}
