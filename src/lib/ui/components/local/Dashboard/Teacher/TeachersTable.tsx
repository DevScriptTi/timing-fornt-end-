import { getTeachers } from "@/lib/server/actions/teacher/getTeachers";
import { DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "../DashCrudContent";
import TeacherActions from "@/lib/ui/forms/teacher/actions";
import CreateTeacherKey from "@/lib/ui/forms/teacher/createKey";

interface TeachersTableProps {
    page: string;
}

export default async function TeachersTable({ page }: TeachersTableProps) {
    const currentPage = parseInt(page) || 1;
    const teachers = await getTeachers(currentPage);

    return (
        <>
            <DashContentTable>
                <TableThead list={['Username', 'Key', 'Name', 'Date of Birth', 'Last', 'Wilaya - Baladiya', 'Email', 'Settings']} />
                <tbody>
                    {teachers?.data.map((teacher) => (
                        <TableTr key={teacher.id}>
                            <TableTdMain value={teacher.username} />
                            <TableTd>
                                {teacher.key?.value || <CreateTeacherKey teacher={teacher} />}
                            </TableTd>
                            <TableTd>
                                {teacher.name}
                            </TableTd>
                            <TableTd>
                                {teacher.date_of_birth}
                            </TableTd>
                            <TableTd>
                                {teacher.last}
                            </TableTd>
                            <TableTd>
                                {teacher.baladiya.wilaya.name} - {teacher.baladiya.name}
                            </TableTd>
                            <TableTd>
                                {teacher.key?.user?.email || 'No Account'}
                            </TableTd>
                            <TableTd>
                                <TeacherActions teacher={teacher} />
                            </TableTd>
                        </TableTr>
                    ))}
                </tbody>
            </DashContentTable>
        </>
    )
}

