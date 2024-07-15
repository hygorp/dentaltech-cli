import React from 'react';
import {cn} from '@/lib/utils';
import {VariantProps, cva} from 'class-variance-authority';
import {Loader2} from 'lucide-react';

const spinnerVariants = cva('flex-col items-center justify-center', {
    variants: {
        show: {
            true: 'flex',
            false: 'hidden',
        },
    },
    defaultVariants: {
        show: true,
    },
});

const loaderVariants = cva('animate-spin text-primary dark:text-primary-foreground', {
    variants: {
        size: {
            small: 'size-6',
            medium: 'size-8',
            large: 'size-12',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

interface SpinnerContentProps
    extends VariantProps<typeof spinnerVariants>,
        VariantProps<typeof loaderVariants> {
    className?: string;
    children?: React.ReactNode;
}

export function Spinner({size, show, children, className}: SpinnerContentProps) {
    return (
        <div className={spinnerVariants({show})}>
            <div className={"w-full h-full fixed top-0 left-0 opacity-75 bg-white dark:invert"}>
                <div className={"flex justify-center items-center mt-[50vh]"}>
                    <span className={"flex flex-col justify-center items-center text-primary dark:text-primary-foreground"}>
                        <Loader2
                            className={cn(loaderVariants({size}), className)}
                        />
                        {children}
                    </span>
                </div>
            </div>
        </div>
    );
}
