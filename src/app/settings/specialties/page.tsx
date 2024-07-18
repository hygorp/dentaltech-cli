"use client"

import {Separator} from "@/components/ui/separator";
import {SettingsContainer} from "@/app/settings/components/settings-container";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "@/contexts/app-context";
import {useRouter} from "next/navigation";
import {findByFilters} from "@/services/specialty-service";
import {Pagination, PaginationContent, PaginationItem} from "@/components/ui/pagination";
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {InputSearch} from "@/components/ui/input";
import SpecialtyCreateForm from "@/app/settings/specialties/components/specialty-create-form";
import SpecialtyViewDescription from "@/app/settings/specialties/components/specialty-view-description";
import SpecialtyUpdateForm from "@/app/settings/specialties/components/specialty-update-form";
import SpecialtyDelete from "@/app/settings/specialties/components/specialty-delete";

const SpecialtiesSettings = () => {
    const {isAuthenticated, session} = useContext(AppContext);
    const { push } = useRouter()

    const token = session?.token ?? ""

    const [searchByName, setSearchByName] = useState<string>("")
    const [specialties, setSpecialties] = useState<Specialty[]>([]);

    const [totalPages, setTotalPages] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0)

    useEffect(() => {
        const loadResources = async () => {
            isAuthenticated ? (() => {
                push("/settings/specialties");

                findByFilters(searchByName, 5, currentPage, token).then((data) => {
                    setSpecialties(data.content)
                    setTotalPages(Array.from({length: data.totalPages}))
                })
            })() : (() => {
                push("/login");
            })()
        }
        loadResources().then()
    }, [isAuthenticated, push, searchByName, currentPage, token]);

    return (
        <SettingsContainer title={"Configurações de Especialidades - Dentaltech"} route={"specialties"}>
            <div>
                <h3 className="text-lg font-medium">Especialidades</h3>
                <p className="text-sm text-muted-foreground">
                    Crie, Atualize as configurações de Especialidades.
                </p>
            </div>

            <Separator/>

            <div className="flex gap-5 items-center">
                <InputSearch
                    placeholder="Buscar especialidade..."
                    value={searchByName}
                    onChange={(e) => setSearchByName(e.target.value)}
                />

                <SpecialtyCreateForm token={token}/>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className={"min-w-[50px]"}>#</TableHead>
                        <TableHead>Especialidade</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {specialties.map((specialty: Specialty) => (
                        <TableRow key={specialty.id}>
                            <TableCell className={"w-[100px]"}>{specialty.id}</TableCell>
                            <TableCell>{specialty.specialty}</TableCell>
                            <TableCell className="text-right space-x-3.5">
                                <SpecialtyViewDescription specialty={specialty}/>
                                <SpecialtyUpdateForm specialty={specialty} token={token}/>
                                <SpecialtyDelete specialty={specialty} token={token}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                type={"button"}
                                variant={"ghost"}
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage == 0}
                            >
                                <ChevronLeft className={"w-4 h-4"}/>
                                Anterior
                            </Button>
                        </PaginationItem>

                        <PaginationItem>
                            <Button
                                type={"button"}
                                variant={"ghost"}
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage == (totalPages.length - 1)}
                            >
                                Próximo
                                <ChevronRight className={"w-4 h-4"}/>
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </SettingsContainer>
    )
}

export default SpecialtiesSettings
