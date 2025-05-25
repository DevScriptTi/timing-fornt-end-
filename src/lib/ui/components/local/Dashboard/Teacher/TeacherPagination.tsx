import { TeacherResponse } from "@/lib/server/types/teacher/teacher"
import { DashContentPagination, DashContentPaginationItem } from "../DashCrudContent"
import { getTeachers } from "@/lib/server/actions/teacher/getTeachers";

interface TeacherPaginationProps {
    data: TeacherResponse;
    currentPage: number;
}

export default async function TeacherPagination({ currentPage }: TeacherPaginationProps) {
    const data = await getTeachers(currentPage);

    return (
        <DashContentPagination>
            {/* Previous button */}
            {data.prev_page_url && (
                <DashContentPaginationItem 
                    href={`/dashboard?page=${currentPage - 1}`}
                >
                    Previous
                </DashContentPaginationItem>
            )}

            {/* Page numbers */}
            {data.links.slice(1, -1).map((link, index) => (
                link.url && (
                    <DashContentPaginationItem 
                        key={index} 
                        href={`/dashboard?page=${index + 1}${currentPage === index + 1 ? '&active' : ''}`}
                    >
                        {link.label}
                    </DashContentPaginationItem>
                )
            ))}

            {/* Next button */}
            {data.next_page_url && (
                <DashContentPaginationItem 
                    href={`/dashboard?page=${currentPage + 1}`}
                >
                    Next
                </DashContentPaginationItem>
            )}
        </DashContentPagination>
    )
}