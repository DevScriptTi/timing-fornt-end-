import { DashContentAction, DashContentPaginationSkeleton, DashContentStatItemSkeleton, DashContentTableSkeleton } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import { DashContenTitle } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import { getGroups } from "@/lib/server/actions/group/getGroups";
import DashSection from "@/lib/ui/components/global/Section/Section";
import { Suspense } from "react";
import Link from "next/link";
import Button from "@/lib/ui/components/global/Buttons/Button";
import GroupStat from "@/lib/ui/components/local/Dashboard/Group/GroupStat";
import GroupsTable from "@/lib/ui/components/local/Dashboard/Group/GroupsTable";
import GroupPagination from "@/lib/ui/components/local/Dashboard/Group/GroupPagination";
import { Plus } from "lucide-react";

interface PageProps {
    searchParams: { page?: string }
}               

export default async function page({ searchParams }: PageProps) {
    const page = (await searchParams).page || "1";
    const groups = await getGroups(parseInt(page));

    return (
        <DashSection>
            <DashContenTitle>Groups</DashContenTitle>
            <Suspense fallback={<DashContentStatItemSkeleton />}>
                <GroupStat />
            </Suspense>
            <DashContentAction>
                <CreateGroup />
            </DashContentAction>
            <Suspense fallback={<DashContentTableSkeleton />}>
                <GroupsTable page={page} />
            </Suspense>
            <Suspense fallback={<DashContentPaginationSkeleton />}>
                <GroupPagination data={groups} currentPage={parseInt(page)} />
            </Suspense>
        </DashSection>
    )
}

function CreateGroup() {
    return (
        <Link href="/dashboard/create">
            <Button mode="filled" icon={<Plus />}>
                Create Group
            </Button>
        </Link>
    )
}