import React from "react";

const Container = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({...props}, ref) => {
    return (
        <>
            <div
                className={"mx-6 my-6 p-10 md:mx-6 md:my-6 md:p-10 lg:mx-24 lg:my-6 lg:p-10 border rounded-lg"}
                ref={ref}
                {...props}
            />
        </>
    )
})

Container.displayName = "Container"

export {Container}