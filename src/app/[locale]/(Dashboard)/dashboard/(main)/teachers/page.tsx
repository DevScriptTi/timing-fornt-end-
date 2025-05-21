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
    modules: {
        id: number;
        name: string;
    }[];
}[]
export default function StudentsPage() {
    const students: Student = [
        {
            id: 1,
            username: "student01",
            key: { value: "SKEY001", user: { email: "ahmed.benali@email.com" } },
            name: "Ahmed",
            last: "Benali",
            modules: [
                {
                    id: 1,
                    name: "Compalation",
                },
                {
                    id: 2,
                    name: "Web Development",
                },
                {
                    id: 3,
                    name: "Operating Systems",
                },
            ],
        },
        {
            id: 2,
            username: "student02",
            key: { value: "SKEY002", user: { email: "fatima.zohra@email.com" } },
            name: "Fatima",
            last: "Zohra",
            modules: [
                {
                    id: 1,
                    name: "Compalation",
                },
                {
                    id: 2,
                    name: "Web Development",
                },
                {
                    id: 3,
                    name: "Operating Systems",
                },
            ],

        },
        {
            id: 3,
            username: "student03",
            key: { value: "SKEY003", user: { email: "youssef.boualem@email.com" } },
            name: "Youssef",
            last: "Boualem",
            modules: [
                {
                    id: 1,
                    name: "Compalation",
                },
                {
                    id: 2,
                    name: "Web Development",
                },
                {
                    id: 3,
                    name: "Operating Systems",
                },
            ],

        },
        {
            id: 4,
            username: "student04",
            key: { value: "SKEY004", user: { email: "amina.cherif@email.com" } },
            name: "Amina",
            last: "Cherif",
            modules: [
                {
                    id: 1,
                    name: "Compalation",
                },
                {
                    id: 2,
                    name: "Web Development",
                },
                {
                    id: 3,
                    name: "Operating Systems",
                },
            ],

        },
    ];
    return (
        <DashContent>
            <DashContenTitle>Teachers</DashContenTitle>
            <DashContentStat>
                <DashContentStatItem title="Students" value="24" icon={<UserPen size={80} />} />
            </DashContentStat>
            <DashContentAction>
                <Button mode="filled" icon={<UserPen size={24} />}>Create Teacher</Button>
            </DashContentAction>
            <DashContentTable>
                <TableThead list={['Username', 'Key', 'Name', 'Last', 'Email', 'Modules', 'Settings']} />
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
                                    {
                                        student.modules.map((module) => (
                                            <div key={module.id} className="text-sm text-gray-500 dark:text-gray-400">
                                                {module.name}
                                            </div>
                                        ))
                                    }
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