import { getSections } from "@/lib/server/actions/section/getSections";
import { DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "../DashCrudContent";
import SectionActions from "@/lib/ui/forms/section/actions";

interface SectionsTableProps {
    page: string;
}

export default async function SectionsTable({ page }: SectionsTableProps) {
    const currentPage = parseInt(page) || 1;
    const sections = await getSections(currentPage);

    return (
        <>
            <DashContentTable>
                <TableThead list={['Number', 'Year', 'Department', 'Groups', 'Settings']} />
                <tbody>
                    {sections?.data.map((section) => (
                        <TableTr key={section.id}>
                            <TableTdMain value={section.number.toString()} />
                            <TableTd>
                                {section.year.name}
                            </TableTd>
                            <TableTd>
                                {section.year.department.name}
                            </TableTd>
                            <TableTd>
                                {section.groups_count}
                            </TableTd>
                            <TableTd>
                                <SectionActions section={section} />
                            </TableTd>
                        </TableTr>
                    ))}
                </tbody>
            </DashContentTable>
        </>
    )
}

