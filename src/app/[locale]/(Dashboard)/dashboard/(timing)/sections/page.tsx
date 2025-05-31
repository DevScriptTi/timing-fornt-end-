import { DashContentAction, DashContentPaginationSkeleton, DashContentStatItemSkeleton, DashContentTableSkeleton } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import { DashContenTitle } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import { getSections } from "@/lib/server/actions/section/getSections";
import DashSection from "@/lib/ui/components/global/Section/Section";
import { Suspense } from "react";
import Link from "next/link";
import Button from "@/lib/ui/components/global/Buttons/Button";
import SectionStat from "@/lib/ui/components/local/Dashboard/Section/SectionStat";
import SectionsTable from "@/lib/ui/components/local/Dashboard/Section/SectionsTable";
import SectionPagination from "@/lib/ui/components/local/Dashboard/Section/SectionPagination";
import { Plus } from "lucide-react";

interface PageProps {
    searchParams: { page?: string }
}               

export default async function page({ searchParams }: PageProps) {
    const page = (await searchParams).page || "1";
    const sections = await getSections(parseInt(page));

    return (
        <DashSection>
            <DashContenTitle>Sections</DashContenTitle>
            <Suspense fallback={<DashContentStatItemSkeleton />}>
                <SectionStat />
            </Suspense>
            <DashContentAction>
                <CreateSection />
            </DashContentAction>
            <Suspense fallback={<DashContentTableSkeleton />}>
                <SectionsTable page={page} />
            </Suspense>
            <Suspense fallback={<DashContentPaginationSkeleton />}>
                <SectionPagination data={sections} currentPage={parseInt(page)} />
            </Suspense>
        </DashSection>
    )
}

function CreateSection() {
    return (
        <Link href="/dashboard/create">
            <Button mode="filled" icon={<Plus />}>
                Create Section
            </Button>
        </Link>
    )
}