import React from "react";

const MainContainer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
}
>(({title, ...props}, ref) => {
    return (
        <>
            <title>{title}</title>

            <main
                className={"h-dvh"}
                ref={ref}
                {...props}
            />
        </>
    )
})

MainContainer.displayName = "MainContainer"

export {MainContainer}