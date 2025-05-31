import { SectionResponse } from "@/lib/server/types/section/section"
import { DashContentPagination, DashContentPaginationItem } from "../DashCrudContent"
import { getSections } from "@/lib/server/actions/section/getSections";

interface SectionPaginationProps {
    data: SectionResponse;
    currentPage: number;
}

export default async function SectionPagination({ currentPage }: SectionPaginationProps) {
    const data = await getSections(currentPage);

    return (
        <DashContentPagination>
            {/* Previous button */}
            {data.prev_page_url && (
                <DashContentPaginationItem 
                    href={`/dashboard/sections?page=${currentPage - 1}`}
                >
                    Previous
                </DashContentPaginationItem>
            )}

            {/* Page numbers */}
            {data.links.slice(1, -1).map((link, index) => (
                link.url && (
                    <DashContentPaginationItem 
                        key={index} 
                        href={`/dashboard/sections?page=${index + 1}${currentPage === index + 1 ? '&active' : ''}`}
                    >
                        {link.label}
                    </DashContentPaginationItem>
                )
            ))}

            {/* Next button */}
            {data.next_page_url && (
                <DashContentPaginationItem 
                    href={`/dashboard/sections?page=${currentPage + 1}`}
                >
                    Next
                </DashContentPaginationItem>
            )}
        </DashContentPagination>
    )
}