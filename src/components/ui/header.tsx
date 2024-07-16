import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyleTheme,
} from "@/components/ui/navigation-menu";
import {
    Bell,
    CalendarCheck,
    CalendarCog,
    LifeBuoy,
    LogOut,
    Mail,
    Menu,
    MessageCircle,
    Moon,
    Palette,
    Settings,
    Stethoscope,
    Sun,
    User,
    UserCheck,
    UserCog,
    Users,
    Wallet,
} from "lucide-react";
import Link from "next/link";
import React, {useContext} from "react";
import {useTheme} from "next-themes";
import {Separator} from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuItemTheme,
    DropdownMenuItemThemeDanger,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuSubTriggerTheme,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {toast} from "@/components/ui/use-toast";
import {Label} from "@/components/ui/label";
import {AppContext} from "@/contexts/app-context";

const Header = () => {
    const {session, logout} = useContext(AppContext)
    const {setTheme} = useTheme()

    const handleLogout = async () => {
        toast({
            title: "Atenção!",
            description: "Você será desconectado.",
            variant: "warning"
        })

        setTimeout(() => {
            logout(session?.username ?? "", session?.sessionId ?? "", session?.token ?? "")
            window.location.href = "/"
        }, 3000)
    }

    return (
        <nav className={"flex items-center bg-background py-2.5 px-4 border-b lg:justify-between lg:px-24"}>
            <div id={"mobile"} className={"flex items-center mr-4 lg:hidden"}>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className={"group text-primary rounded-full p-2 hover:bg-primary dark:hover:bg-accent border-0 outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:text-white data-[state=open]:bg-primary dark:data-[state=open]:text-white dark:data-[state=open]:bg-accent"}>
                        <Menu className={"w-7 h-7 group-hover:text-white dark:text-white"}/>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align={"start"}
                                         className={"block md:block lg:hidden w-56 mt-3 dark:text-white"}>
                        <DropdownMenuGroup>
                            <Link href={"/panel"}>
                                <DropdownMenuItem className={DropdownMenuItemTheme()}>
                                    <CalendarCheck className={"w-4 h-4 mr-2"}/>
                                    <Label className={"cursor-pointer"}>
                                        Agenda
                                    </Label>
                                </DropdownMenuItem>
                            </Link>

                            <Link href={"/panel/patients"}>
                                <DropdownMenuItem className={DropdownMenuItemTheme()}>
                                    <Users className={"w-4 h-4 mr-2"}/>
                                    <Label className={"cursor-pointer"}>
                                        Pacientes
                                    </Label>
                                </DropdownMenuItem>
                            </Link>

                            <Link href={"/panel/mail"}>
                                <DropdownMenuItem className={DropdownMenuItemTheme()}>
                                    <Mail className={"w-4 h-4 mr-2"}/>
                                    <Label className={"cursor-pointer"}>
                                        Email
                                    </Label>
                                </DropdownMenuItem>
                            </Link>

                            <Link href={"/financial"}>
                                <DropdownMenuItem className={DropdownMenuItemTheme()}>
                                    <Wallet className={"w-4 h-4 mr-2"}/>
                                    <Label className={"cursor-pointer"}>
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
                                <Settings className={"w-4 h-4 mr-2"}/>
                                <Label>
                                    Configurações
                                </Label>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent className={"block md:block lg:hidden ml-2"}>
                                    <DropdownMenuItem>
                                        <Stethoscope className={"mr-2 w-4 h-4"}/>
                                        <span>Dentistas</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <UserCheck className={"mr-2 w-4 h-4"}/>
                                        <span>Especialidades</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CalendarCog className={"mr-2 w-4 h-4"}/>
                                        <span>Horários</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className={DropdownMenuSubTriggerTheme()}>
                                <User className={"w-4 h-4 mr-2"}/>
                                <Label>
                                    Conta
                                </Label>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent className={"block md:block lg:hidden ml-2"}>
                                    <DropdownMenuItem>
                                        <UserCog className={"mr-2 w-4 h-4"}/>
                                        <span>Perfil</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <MessageCircle className={"mr-2 w-4 h-4"}/>
                                        <span>chats</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <LifeBuoy className={"mr-2 w-4 h-4"}/>
                                        <span>Suporte</span>
                                    </DropdownMenuItem>
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
                                <Link href={"/panel/patients"} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyleTheme()}>
                                        <Users className={"w-5 h-5"}/>
                                        Pacientes
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <Separator orientation="vertical"/>
                            </div>

                            <NavigationMenuItem>
                                <Link href={"/panel/mail"} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyleTheme()}>
                                        <Mail className={"w-5 h-5"}/>
                                        Email
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <Separator orientation="vertical"/>
                            </div>

                            <NavigationMenuItem>
                                <Link href={"/panel/financial"} legacyBehavior passHref>
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

            <div className={"hidden md:hidden lg:block"}>
                <div className={"flex flex-row justify-center items-center gap-2"}>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className={"group cursor-pointer"}>
                                <div
                                    className={"p-2 rounded-full hover:bg-pigment-indigo-50 dark:hover:bg-accent data-[state=open]:bg-primary dark:data-[state=open]:bg-accent"}>
                                    <Bell
                                        className={"w-5 h-5 text-neutral-700 dark:text-white group-hover:text-primary group-data-[state=open]:text-white dark:group-data-[state=open]:text-primary"}/>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align={"end"} className={"mt-4 w-52"}>
                                <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className={"group cursor-pointer"}>
                                <div
                                    className={"p-2 rounded-full hover:bg-pigment-indigo-50 dark:hover:bg-accent data-[state=open]:bg-primary dark:data-[state=open]:bg-accent"}>
                                    <Settings
                                        className={"w-5 h-5 text-neutral-700 dark:text-white group-hover:text-primary group-data-[state=open]:text-white dark:group-data-[state=open]:text-primary"}/>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align={"end"} className={"mt-4 w-52"}>
                                <DropdownMenuLabel>Configurações</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>
                                    <Stethoscope className={"mr-2 w-4 h-4"}/>
                                    <span>Dentistas</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <UserCheck className={"mr-2 w-4 h-4"}/>
                                    <span>Especialidades</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CalendarCog className={"mr-2 w-4 h-4"}/>
                                    <span>Horários</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <Palette className="mr-2 h-4 w-4"/>
                                        <span>Tema</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent className={"ml-2"}>
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
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className={"group cursor-pointer"}>
                                <div
                                    className={"p-2 rounded-full hover:bg-pigment-indigo-50 dark:hover:bg-accent data-[state=open]:bg-primary dark:data-[state=open]:bg-accent"}>
                                    <User
                                        className={"w-5 h-5 text-neutral-700 dark:text-white group-hover:text-primary group-data-[state=open]:text-white dark:group-data-[state=open]:text-primary"}/>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align={"end"} className={"mt-4 w-52"}>
                                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>
                                    <UserCog className={"mr-2 w-4 h-4"}/>
                                    <span>Perfil</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MessageCircle className={"mr-2 w-4 h-4"}/>
                                    <span>Chats</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LifeBuoy className={"mr-2 w-4 h-4"}/>
                                    <span>Suporte</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem onClick={() => handleLogout()}>
                                    <LogOut className={"mr-2 w-4 h-4"}/>
                                    <span>Sair</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
