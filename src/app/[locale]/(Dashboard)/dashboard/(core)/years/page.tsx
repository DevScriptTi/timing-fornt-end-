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

type Year = {
    id: number;
    name: string;
    departement: {
        id: number;
        name: string;
    };
}[];

export default function YearsPage() {
    const years: Year = [
        {
            id: 1,
            name: "First Year",
            departement: {
                id: 1,
                name: "Computer Science"
            }
        },
        {
            id: 2,
            name: "Second Year",
            departement: {
                id: 2,
                name: "Mathematics"
            }
        }
    ];

    return (
        <DashContent>
            <DashContenTitle>Years</DashContenTitle>
            <DashContentStat>
                <DashContentStatItem title="Total Years" value={years.length.toString()} icon={<UserPen size={80} />} />
            </DashContentStat>
            <DashContentAction>
                <Button mode="filled" icon={<UserPen size={24} />}>Create Year</Button>
            </DashContentAction>
            <DashContentTable>
                <TableThead list={['Year Name', 'Department', 'Settings']} />
                <tbody>
                    {years.map((year) => (
                        <TableTr key={year.id}>
                            <TableTdMain value={year.name} />
                            <TableTd>{year.departement.name}</TableTd>
                            <TableTd>
                                <div className="flex items-center gap-1">
                                    <Link href={`/dashboard/years/${year.id}`}>
                                        <Pencil className="text-green-700 dark:text-green-400" size={16} />
                                    </Link>
                                    <Link href={`/dashboard/years/${year.id}`}>
                                        <Trash className="text-error dark:text-dark-error" size={16} />
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
