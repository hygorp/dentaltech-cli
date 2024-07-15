import {createContext} from "react";

interface AppContext {
    login:  (username: string, password: string) => Promise<number>;
    logout: (username: string, sessionId: string, token: string) => Promise<void>;
    isAuthenticated: boolean;
    session: ClientSession | undefined;
}

export const AppContext = createContext({} as AppContext)