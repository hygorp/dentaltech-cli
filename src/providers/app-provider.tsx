import React, {useEffect} from "react";
import {destroyCookie, parseCookies, setCookie} from "nookies";
import {AppContext} from "@/contexts/app-context";

export function AppContextProvider({children}: { children: React.ReactNode }) {
    const API_URL: string = process.env.API_URI ?? "";
    const ORIGIN: string = process.env.ORIGIN ?? "";

    const [session, setSession] = React.useState<ClientSession>();
    const isAuthenticated = !!session

    useEffect(() => {
        const {"dt_session": sessionId} = parseCookies()
        const {"dt_jwtoken": token} = parseCookies()

        const tokenValidation = async () => {
            try {
                const response = await fetch(API_URL.concat(API_URL.concat("/token/validation")), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Origin": ORIGIN,
                        "Session": sessionId,
                        "Authorization": "Bearer ".concat(token)
                    }
                })

                if (response.ok) {
                    return response.json()
                } else {
                    destroyCookie(undefined, "dt_session")
                    destroyCookie(undefined, "dt_jwtoken")
                }
            } catch (error) {
                throw new Error("Unable to validate token.")
            }
        }

        tokenValidation().then((session) => setSession(session))
    }, [API_URL, ORIGIN]);

    const login = async (username: string, password: string): Promise<number> => {
        try {
            const response = await fetch(API_URL.concat(API_URL.concat("/user/auth/login")), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": ORIGIN
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })

            if (response.ok) {
                const session: ClientSession = await response.json()

                setCookie(undefined, "dt_session", session.sessionId, {
                    maxAge: 60 * 60 * 8
                })

                setCookie(undefined, "dt_jwtoken", session.token, {
                    maxAge: 60 * 60 * 8
                })

                setSession(session)
            }

            return response.status
        } catch (error) {
            throw new Error("Unable to login.")
        }
    }

    const logout = async (username: string, sessionId: string, token: string): Promise<void> => {
        try {
            await fetch(API_URL.concat(API_URL.concat("/user/auth/logout")), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": ORIGIN,
                    "Username": username,
                    "Session": sessionId,
                    "Authorization": "Bearer ".concat(token)
                }
            })
        } catch (error) {
            throw new Error("Unable to logout.")
        }
    }

    return (
        <AppContext.Provider value={{login, logout, isAuthenticated, session}}>
            {children}
        </AppContext.Provider>
    )
}
