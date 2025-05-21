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
import { Pencil, Timer, TimerIcon, Trash, UserPen } from "lucide-react";
import Link from "next/link";

type Section = {
    id: number;
    name: string;
    year: {
        id: number;
        name: string;
        departement: {
            id: number;
            name: string;
        };
    };
}[];

export default function SectionsPage() {
    const sections: Section = [
        {
            id: 1,
            name: "Section A",
            year: {
                id: 1,
                name: "First Year",
                departement: {
                    id: 1,
                    name: "Computer Science"
                }
            }
        },
        {
            id: 2,
            name: "Section B",
            year: {
                id: 2,
                name: "Second Year",
                departement: {
                    id: 1,
                    name: "Computer Science"
                }
            }
        }
    ];

    return (
        <DashContent>
            <DashContenTitle>Sections</DashContenTitle>
            <DashContentStat>
                <DashContentStatItem title="Total Sections" value={sections.length.toString()} icon={<UserPen size={80} />} />
            </DashContentStat>
            <DashContentAction>
                <Button mode="filled" icon={<UserPen size={24} />}>Create Section</Button>
            </DashContentAction>
            <DashContentTable>
                <TableThead list={['Section Name', 'Year', 'Department', 'Settings']} />
                <tbody>
                    {sections.map((section) => (
                        <TableTr key={section.id}>
                            <TableTdMain value={section.name} />
                            <TableTd>{section.year.name}</TableTd>
                            <TableTd>{section.year.departement.name}</TableTd>
                            <TableTd>
                                <div className="flex items-center gap-1">
                                    <Link href={`/dashboard/sections/${section.id}`}>
                                        <Pencil className="text-green-700 dark:text-green-400" size={16} />
                                    </Link>
                                    <Link href={`/dashboard/sections/${section.id}`}>
                                        <Trash className="text-error dark:text-dark-error" size={16} />
                                    </Link>
                                    <Link href={`/dashboard/sections/timing/${section.id}`}>
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