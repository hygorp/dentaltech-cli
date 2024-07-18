import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Info} from "lucide-react";

const SpecialtyViewDescription = ({specialty} : {specialty: Specialty}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className={"w-5 h-5 group"} variant={"ghost"} size={"icon"}>
                    <Info
                        className={"text-neutral-700 dark:text-primary w-4 h-4 group-hover:text-primary"}/>
                </Button>
            </PopoverTrigger>
            <PopoverContent align={"end"}>
                <p className={"text-sm leading-5"}>{specialty.description}</p>
            </PopoverContent>
        </Popover>
    )
}

export default SpecialtyViewDescription;
