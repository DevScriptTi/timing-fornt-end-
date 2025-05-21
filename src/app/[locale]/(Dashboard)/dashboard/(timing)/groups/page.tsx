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

type Group = {
    id: number;
    name: string;
    section: {
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
    }
}[];

export default function GroupsPage() {
    const groups: Group = [
        {
            id: 1,
            name: "Group 1",
            section: {
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
            }
        },
        {
            id: 2,
            name: "Group 2",
            section: {
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
        }
    ];

    return (
        <DashContent>
            <DashContenTitle>Groups</DashContenTitle>
            <DashContentStat>
                <DashContentStatItem title="Total Groups" value={groups.length.toString()} icon={<UserPen size={80} />} />
            </DashContentStat>
            <DashContentAction>
                <Button mode="filled" icon={<UserPen size={24} />}>Create Group</Button>
            </DashContentAction>
            <DashContentTable>
                <TableThead list={['Group Name', 'Section Name', 'Year', 'Department', 'Settings']} />
                <tbody>
                    {groups.map((group) => (
                        <TableTr key={group.id}>
                            <TableTdMain value={group.name} />
                            <TableTd>{group.section.name}</TableTd>
                            <TableTd>{group.section.year.name}</TableTd>
                            <TableTd>{group.section.year.departement.name}</TableTd>
                            <TableTd>
                                <div className="flex items-center gap-1">
                                    <Link href={`/dashboard/groups/${group.id}`}>
                                        <Pencil className="text-green-700 dark:text-green-400" size={16} />
                                    </Link>
                                    <Link href={`/dashboard/groups/${group.id}`}>
                                        <Trash className="text-error dark:text-dark-error" size={16} />
                                    </Link>
                                    <Link href={`/dashboard/groups/timing/${group.id}`}>
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