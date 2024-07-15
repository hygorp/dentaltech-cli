import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {navigationMenuTriggerStyleTheme} from "@/components/ui/navigation-menu"
import {
    Bell, CalendarCheck, LogOut, Menu, Moon, Palette,
    Stethoscope, Sun, User, UserPlus, UserRoundPlus,
    Users, UserSearch, Wallet,
} from "lucide-react";
import Link from "next/link";
import React, {useContext} from "react";
import {AuthenticationContext} from "@/contexts/authentication-context";
import {useTheme} from "next-themes";
import {Separator} from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem, DropdownMenuItemTheme, DropdownMenuItemThemeDanger, DropdownMenuItemThemeSub,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuSubTriggerTheme,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {toast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";

const Header = () => {
    const {userSession, logout} = useContext(AuthenticationContext)
    const {setTheme} = useTheme()

    const handleLogout = async () => {
        toast({
            title: "Atenção!",
            description: "Você será desconectado.",
            action: (<ToastAction altText={""}/>),
            variant: "warning"
        })

        setTimeout(() => {
            logout(userSession?.username ?? "", userSession?.sessionId ?? "", userSession?.token ?? "")
            location.href = "/"
        }, 5000)
    }

    return (
        <nav className={"flex items-center py-2.5 px-4 border-b lg:justify-between lg:px-24"}>
            <div id={"mobile"} className={"flex items-center mr-4 lg:hidden"}>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className={"group text-primary rounded-full p-2 hover:bg-primary dark:hover:bg-accent border-0 outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:text-white data-[state=open]:bg-primary dark:data-[state=open]:text-white dark:data-[state=open]:bg-accent"}>
                        <Menu className={"w-7 h-7 group-hover:text-white dark:text-white"}/>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align={"start"}
                                         className={"block md:block lg:hidden w-60 mt-3 dark:text-white"}>
                        <DropdownMenuLabel className={"flex"}>
                            <User className={"w-4 h-4 mr-2"}/>
                            {userSession?.username}
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator/>

                        <DropdownMenuGroup>
                            <Link href={"/panel"}>
                                <DropdownMenuItem className={DropdownMenuItemTheme()}>
                                    <CalendarCheck className={"w-4 h-4 mr-2"}/>
                                    <Label>
                                        Agenda
                                    </Label>
                                </DropdownMenuItem>
                            </Link>

                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className={DropdownMenuSubTriggerTheme()}>
                                    <Users className={"w-4 h-4 mr-2"}/>
                                    <Label>
                                        Pacientes
                                    </Label>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent className={"block md:block lg:hidden ml-2"}>
                                        <Link href={"/patients/new"}>
                                            <DropdownMenuItem className={DropdownMenuItemThemeSub()}>
                                                <UserPlus className="mr-2 h-4 w-4"/>
                                                Novo
                                            </DropdownMenuItem>
                                        </Link>

                                        <Link href={"/patients"}>
                                            <DropdownMenuItem className={DropdownMenuItemThemeSub()}>
                                                <UserSearch className="mr-2 h-4 w-4"/>
                                                Consultar
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className={DropdownMenuSubTriggerTheme()}>
                                    <Stethoscope className={"w-4 h-4 mr-2"}/>
                                    <Label>
                                        Especialistas
                                    </Label>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent className={"block md:block lg:hidden ml-2"}>
                                        <Link href={"/panel/specialists/new"}>
                                            <DropdownMenuItem className={DropdownMenuItemThemeSub()}>
                                                <UserPlus className="mr-2 h-4 w-4"/>
                                                Novo
                                            </DropdownMenuItem>
                                        </Link>

                                        <Link href={"/panel/specialists"}>
                                            <DropdownMenuItem className={DropdownMenuItemThemeSub()}>
                                                <UserSearch className="mr-2 h-4 w-4"/>
                                                Consultar
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <Link href={"/financial"}>
                                <DropdownMenuItem className={DropdownMenuItemTheme()}>
                                    <Wallet className={"w-4 h-4 mr-2"}/>
                                    <Label>
                                        Financeiro
                                    </Label>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator/>

                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className={DropdownMenuSubTriggerTheme()}>
                                <Bell className={"w-4 h-4 mr-2"}/>
                                <Label>
                                    Notificações
                                </Label>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent className={"block md:block lg:hidden ml-2"}>

                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className={DropdownMenuSubTriggerTheme()}>
                                <Palette className={"w-4 h-4 mr-2"}/>
                                <Label>
                                    Tema
                                </Label>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent className={"block md:block lg:hidden ml-2"}>
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        <Sun className={"w-4 h-4 mr-2"}/>
                                        Claro
                                    </DropdownMenuItem>

                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        <Moon className={"w-4 h-4 mr-2"}/>
                                        Escuro
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSeparator/>

                        <DropdownMenuItem className={DropdownMenuItemThemeDanger()} onClick={() => handleLogout()}>
                            <LogOut className={"w-4 h-4 mr-2"}/>
                            <Label>
                                Logout
                            </Label>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className={"flex flex-row items-center"}>
                <div id={"logo"} className={"mr-8"}>
                    <h1
                        className={"logo-font text-primary dark:text-white text-4xl cursor-pointer"}
                        title={"Dentaltech"}
                        onClick={() => location.href = "/panel"}
                    >
                        Dentaltech
                    </h1>
                </div>

                <div className="hidden md:hidden lg:block h-5 items-center space-x-4 mr-4">
                    <Separator orientation="vertical"/>
                </div>

                <div id={"routines"} className={"hidden md:hidden lg:block"}>
                    <NavigationMenu>
                        <NavigationMenuList className={"gap-2"}>
                            <NavigationMenuItem>
                                <Link href={"/panel"} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyleTheme()}>
                                        <CalendarCheck className={"w-5 h-5"}/>
                                        Agenda
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <Separator orientation="vertical"/>
                            </div>

                            <NavigationMenuItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className={navigationMenuTriggerStyleTheme()}>
                                        <Users className={"w-5 h-5"}/>
                                        Pacientes
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className={"w-auto mt-3"}>
                                        <Link href={"/panel/patients/new"}>
                                            <DropdownMenuItem className={"cursor-pointer"}>
                                                <UserRoundPlus className="mr-2 h-4 w-4"/>
                                                Novo
                                            </DropdownMenuItem>
                                        </Link>

                                        <DropdownMenuSeparator/>

                                        <Link href={"/panel/patients"}>
                                            <DropdownMenuItem className={"cursor-pointer"}>
                                                <UserSearch className="mr-2 h-4 w-4"/>
                                                Listar Todos
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavigationMenuItem>

                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <Separator orientation="vertical"/>
                            </div>

                            <NavigationMenuItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className={navigationMenuTriggerStyleTheme()}>
                                        <Stethoscope className={"w-5 h-5"}/>
                                        Especialistas
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className={"w-auto mt-3"}>
                                        <Link href={"/panel/specialists/new"}>
                                            <DropdownMenuItem className={"cursor-pointer"}>
                                                <UserRoundPlus className="mr-2 h-4 w-4"/>
                                                Novo
                                            </DropdownMenuItem>
                                        </Link>

                                        <DropdownMenuSeparator/>

                                        <Link href={"/panel/specialists"}>
                                            <DropdownMenuItem className={"cursor-pointer"}>
                                                <UserSearch className="mr-2 h-4 w-4"/>
                                                Listar Todos
                                            </DropdownMenuItem>
                                        </Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavigationMenuItem>

                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <Separator orientation="vertical"/>
                            </div>

                            <NavigationMenuItem>
                                <Link href={"/financial"} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyleTheme()}>
                                        <Wallet className={"w-5 h-5"}/>
                                        Financeiro
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>

            <div id={"controls"} className={"hidden md:hidden lg:block"}>
                <div className={"flex flex-row justify-center items-center gap-2"}>
                    <div id={"notifications"} className={"p-3 rounded-full hover:bg-pigment-indigo-50 dark:hover:bg-accent group cursor-pointer"}>
                        <div className={""}>
                            <Bell className={"w-5 h-5 text-neutral-700 group-hover:text-primary dark:text-white"}/>
                        </div>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger
                            asChild
                            className={"w-[44px] h-[44px] rounded-full hover:bg-pigment-indigo-50 dark:hover:bg-accent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 group"}
                        >
                            <Button variant="outline" size="icon">
                                <Moon
                                    className="w-5 h-5 text-neutral-700 group-hover:text-primary dark:group-hover:bg-accent dark:text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                />

                                <Sun
                                    className="absolute w-5 h-5 text-neutral-700 dark:text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={"mt-4 hidden md:block lg:block"}>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className={"w-4 h-4 mr-2"}/>
                                Claro
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className={"w-4 h-4 mr-2"}/>
                                Escuro
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div id={"user"} className={"p-3 rounded-full hover:bg-pigment-indigo-50 dark:hover:bg-accent group cursor-pointer"}>
                        <div className={""}>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <User className={"w-5 h-5 text-neutral-700 group-hover:text-primary dark:text-white"}/>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className={"w-44 mt-6 mr-24 hidden md:block lg:block "}>
                                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <User className={"mr-2 w-5 h-5"}/>
                                            <span>{userSession?.username}</span>
                                            <DropdownMenuShortcut></DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem className={"cursor-pointer"} onClick={() => handleLogout()}>
                                            <LogOut className="mr-2 h-4 w-4"/>
                                            <span>Log out</span>
                                            <DropdownMenuShortcut></DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
