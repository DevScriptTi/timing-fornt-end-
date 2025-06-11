import { getStudents } from "@/lib/server/actions/student/getStudents";
import { DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "../DashCrudContent";
import StudentActions from "@/lib/ui/forms/student/actions";
import CreateStudentKey from "@/lib/ui/forms/student/createKey";

interface StudentsTableProps {
    page: string;
}

export default async function StudentsTable({ page }: StudentsTableProps) {
    const currentPage = parseInt(page) || 1;
    const students = await getStudents(currentPage);

    return (
        <>
            <DashContentTable>
                <TableThead list={['Username', 'Key', 'Name', 'Date of Birth', 'Last', 'Section - Group', 'Year - Departement', 'Email', 'Settings']} />
                <tbody>
                    {students?.data.map((student) => (
                        <TableTr key={student.id}>
                            <TableTdMain value={student.username} />
                            <TableTd>
                                {student.key?.value || <CreateStudentKey student={student} />}
                            </TableTd>
                            <TableTd>
                                {student.name}
                            </TableTd>
                            <TableTd>
                                {student.last}
                            </TableTd>
                            <TableTd>
                                {student.date_of_birth}
                            </TableTd>

                            <TableTd>
                                {student.group.section?.number || 'No Section'} - {student.group?.number || 'No Group'}
                            </TableTd>
                            <TableTd>
                                {student.group.section?.year.name || 'No Year'} - {student.group.section?.year.department.name || 'No Department'}
                            </TableTd>
                            <TableTd>
                                {student?.key?.user?.email || 'No Email'}
                            </TableTd>
                            <TableTd>
                                <StudentActions student={student} />
                            </TableTd>
                        </TableTr>
                    ))}
                </tbody>
            </DashContentTable>
        </>
    )
}

