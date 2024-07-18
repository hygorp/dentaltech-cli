import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const bounceVariants = cva('flex-col items-center justify-center', {
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

const loaderVariants = cva('flex text-primary dark:text-primary-foreground', {
    variants: {
        size: {
            small: 'text-4xl',
            medium: 'text-6xl',
            large: 'text-8xl',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

interface BounceContentProps extends VariantProps<typeof bounceVariants>, VariantProps<typeof loaderVariants> {
    className?: string;
    children?: React.ReactNode;
}

export function Bounce({ size, show, children, className }: BounceContentProps) {
    return (
        <div className={bounceVariants({ show })}>
            <div className="w-full h-full fixed top-0 left-0 opacity-80 bg-white dark:invert">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="flex flex-col justify-center items-center text-primary dark:text-primary-foreground">
                        {children}
                        <span className={cn(loaderVariants({ size }), className)}>
                            <div className="animate-bounce [animation-delay:-0.4s]">.</div>
                            <div className="animate-bounce [animation-delay:-0.6s]">.</div>
                            <div className="animate-bounce [animation-delay:-0.8s]">.</div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
