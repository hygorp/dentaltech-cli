import React from "react";

const Container = React.forwardRef<
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

Container.displayName = "Container"

export {Container}