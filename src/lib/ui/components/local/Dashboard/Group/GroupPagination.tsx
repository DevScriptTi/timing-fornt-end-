import { GroupResponse } from "@/lib/server/types/group/group"
import { DashContentPagination, DashContentPaginationItem } from "../DashCrudContent"
import { getGroups } from "@/lib/server/actions/group/getGroups";

interface GroupPaginationProps {
    data: GroupResponse;
    currentPage: number;
}

export default async function GroupPagination({ currentPage }: GroupPaginationProps) {
    const data = await getGroups(currentPage);

    return (
        <DashContentPagination>
            {/* Previous button */}
            {data.prev_page_url && (
                <DashContentPaginationItem 
                    href={`/dashboard/groups?page=${currentPage - 1}`}
                >
                    Previous
                </DashContentPaginationItem>
            )}

            {/* Page numbers */}
            {data.links.slice(1, -1).map((link, index) => (
                link.url && (
                    <DashContentPaginationItem 
                        key={index} 
                        href={`/dashboard/groups?page=${index + 1}${currentPage === index + 1 ? '&active' : ''}`}
                    >
                        {link.label}
                    </DashContentPaginationItem>
                )
            ))}

            {/* Next button */}
            {data.next_page_url && (
                <DashContentPaginationItem 
                    href={`/dashboard/groups?page=${currentPage + 1}`}
                >
                    Next
                </DashContentPaginationItem>
            )}
        </DashContentPagination>
    )
}