import { StudentResponse } from "@/lib/server/types/student/student"
import { DashContentPagination, DashContentPaginationItem } from "../DashCrudContent"
import { getStudents } from "@/lib/server/actions/student/getStudents";

interface StudentPaginationProps {
    data: StudentResponse;
    currentPage: number;
}

export default async function StudentPagination({ currentPage }: StudentPaginationProps) {
    const data = await getStudents(currentPage);

    return (
        <DashContentPagination>
            {/* Previous button */}
            {data.prev_page_url && (
                <DashContentPaginationItem 
                    href={`/dashboard/students?page=${currentPage - 1}`}
                >
                    Previous
                </DashContentPaginationItem>
            )}

            {/* Page numbers */}
            {data.links.slice(1, -1).map((link, index) => (
                link.url && (
                    <DashContentPaginationItem 
                        key={index} 
                        href={`/dashboard/students?page=${index + 1}${currentPage === index + 1 ? '&active' : ''}`}
                    >
                        {link.label}
                    </DashContentPaginationItem>
                )
            ))}

            {/* Next button */}
            {data.next_page_url && (
                <DashContentPaginationItem 
                    href={`/dashboard/students?page=${currentPage + 1}`}
                >
                    Next
                </DashContentPaginationItem>
            )}
        </DashContentPagination>
    )
}