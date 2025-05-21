import Button from "@/lib/ui/components/global/Buttons/Button";
import {
    DashContent,
    DashContentAction,
    DashContenTitle,
    DashContentStat,
    DashContentStatItem,
    DashContentTable,
    TableTd,
    TableTdMain,
    TableThead,
    TableTr
} from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import { Pencil, Timer, Trash, UserPen } from "lucide-react";
import Link from "next/link";

type Module = {
    id: number;
    name: string;
}[];

export default function ModulesPage() {
    const modules: Module = [
        {
            id: 1,
            name: "Algorithms"
        },
        {
            id: 2,
            name: "Linear Algebra"
        }
    ];

    return (
        <DashContent>
            <DashContenTitle>Modules</DashContenTitle>
            <DashContentStat>
                <DashContentStatItem title="Total Modules" value={modules.length.toString()} icon={<UserPen size={80} />} />
            </DashContentStat>
            <DashContentAction>
                <Button mode="filled" icon={<UserPen size={24} />}>Create Module</Button>
            </DashContentAction>
            <DashContentTable>
                <TableThead list={['Module Name', 'Settings']} />
                <tbody>
                    {modules.map((module) => (
                        <TableTr key={module.id}>
                            <TableTdMain value={module.name} />
                            <TableTd>
                                <div className="flex items-center gap-1">
                                    <Link href={`/dashboard/modules/${module.id}`}>
                                        <Pencil className="text-green-700 dark:text-green-400" size={16} />
                                    </Link>
                                    <Link href={`/dashboard/modules/${module.id}`}>
                                        <Trash className="text-error dark:text-dark-error" size={16} />
                                    </Link>
                                    <Link href={`/dashboard/modules/${module.id}/schedule`}>
                                        <Timer className="text-secondary dark:text-dark-secondary" size={16} />
                                    </Link>
                                </div>
                            </TableTd>
                        </TableTr>
                    ))}
                </tbody>
            </DashContentTable>
        </DashContent>
    );
}
