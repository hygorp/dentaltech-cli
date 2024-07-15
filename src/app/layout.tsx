"use client"

import React from "react";
import {Inter} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
import {AppContextProvider} from "@/providers/app-provider";
import {ThemeProvider} from "@/providers/theme-provider";


const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <AppContextProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={inter.className}>
                <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem disableTransitionOnChange>
                    <Toaster/>
                    {children}
                </ThemeProvider>
                </body>
            </html>
        </AppContextProvider>
    )
}
