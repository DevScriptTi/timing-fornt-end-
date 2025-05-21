import { Admin } from "@/lib/server/types/admin/admin";
import Button from "@/lib/ui/components/global/Buttons/Button";
import { DashContent, DashContentAction, DashContenTitle, DashContentStat, DashContentStatItem, DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import AdminActions from "@/lib/ui/forms/admin/actions";
import { Pencil, Trash, UserPen } from "lucide-react";
import Link from "next/link";

type Student = {
    id: number;
    username: string;
    key: { value: string; user: { email: string } | null };
    name: string;
    last: string;
    group: {
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
        };
    };
}[]
export default function StudentsPage() {
    const students: Student = [
        {
            id: 1,
            username: "student01",
            key: { value: "SKEY001", user: { email: "ahmed.benali@email.com" } },
            name: "Ahmed",
            last: "Benali",
            group: {
                id: 1,
                name: "Groupe A",
                section: {
                    id: 1,
                    name: "Section 1",
                    year: {
                        id: 1,
                        name: "2023",
                        departement: {
                            id: 1,
                            name: "Informatique",
                        },
                    },
                },
            },
        },
        {
            id: 2,
            username: "student02",
            key: { value: "SKEY002", user: { email: "fatima.zohra@email.com" } },
            name: "Fatima",
            last: "Zohra",
            group: {
                id: 2,
                name: "Groupe B",
                section: {
                    id: 2,
                    name: "Section 2",
                    year: {
                        id: 2,
                        name: "2023",
                        departement: {
                            id: 2,
                            name: "Mathématiques",
                        },
                    },
                },
            },
        },
        {
            id: 3,
            username: "student03",
            key: { value: "SKEY003", user: { email: "youssef.boualem@email.com" } },
            name: "Youssef",
            last: "Boualem",
            group: {
                id: 3,
                name: "Groupe C",
                section: {
                    id: 3,
                    name: "Section 3",
                    year: {
                        id: 3,
                        name: "2023",
                        departement: {
                            id: 3,
                            name: "Physique",
                        },
                    },
                },
            },
        },
        {
            id: 4,
            username: "student04",
            key: { value: "SKEY004", user: { email: "amina.cherif@email.com" } },
            name: "Amina",
            last: "Cherif",
            group: {
                id: 4,
                name: "Groupe D",
                section: {
                    id: 4,
                    name: "Section 4",
                    year: {
                        id: 4,
                        name: "2023",
                        departement: {
                            id: 4,
                            name: "Chimie",
                        },
                    },
                },
            },
        },
    ];
    return (
        <DashContent>
            <DashContenTitle>Students</DashContenTitle>
            <DashContentStat>
                <DashContentStatItem title="Students" value="24" icon={<UserPen size={80} />} />
            </DashContentStat>
            <DashContentAction>
                <Button mode="filled" icon={<UserPen size={24} />}>Create Student</Button>
            </DashContentAction>
            <DashContentTable>
                <TableThead list={['Username', 'Key', 'Name', 'Last', 'Email', 'Section-Group', 'Year-Departement', 'Settings']} />
                <tbody>
                    {
                        students.map((student) => (
                            <TableTr key={student.id}>
                                <TableTdMain value={student.username} />
                                <TableTd>
                                    {student.key?.value}
                                </TableTd>
                                <TableTd>
                                    {student.name}
                                </TableTd>
                                <TableTd>
                                    {student.last}
                                </TableTd>
                                <TableTd>
                                    {student.key?.user?.email || 'No Account'}
                                </TableTd>
                                <TableTd>
                                    {student.group.name} - {student.group.section.name}
                                </TableTd>
                                <TableTd>
                                    {student.group.section.year.name} - {student.group.section.year.departement.name}
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center gap-1">
                                        <Link href={`/dashboard/admin/${student.id}`}>
                                            <Pencil className="text-green-700 dark:text-green-400" size={16} />
                                        </Link>
                                        <Link href={`/dashboard/admin/${student.id}`}>
                                            <Trash className="text-error dark:text-dark-error" size={16} />
                                        </Link>
                                    </div>
                                </TableTd>
                            </TableTr>
                        ))
                    }
                </tbody>
            </DashContentTable>
        </DashContent>
    )
}