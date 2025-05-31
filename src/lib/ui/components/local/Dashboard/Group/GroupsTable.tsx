import { getGroups } from "@/lib/server/actions/group/getGroups";
import { DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "../DashCrudContent";
import GroupActions from "@/lib/ui/forms/group/actions";
import CreateGroupKey from "@/lib/ui/forms/group/createKey";

interface GroupsTableProps {
    page: string;
}

export default async function GroupsTable({ page }: GroupsTableProps) {
    const currentPage = parseInt(page) || 1;
    const groups = await getGroups(currentPage);

    return (
        <>
            <DashContentTable>
                <TableThead list={['Number', 'Section', 'Year', 'Department', 'Students', 'Settings']} />
                <tbody>
                    {groups?.data.map((group) => (
                        <TableTr key={group.id}>
                            <TableTdMain value={group.number.toString()} />
                            <TableTd>
                                {group.section.number}
                            </TableTd>
                            <TableTd>
                                {group.section.year.name}
                            </TableTd>
                            <TableTd>
                                {group.section.year.department.name}
                            </TableTd>
                            <TableTd>
                                {group.students_count}
                            </TableTd>
                            <TableTd>
                                <GroupActions group={group} />
                            </TableTd>
                        </TableTr>
                    ))}
                </tbody>
            </DashContentTable>
        </>
    )
}

