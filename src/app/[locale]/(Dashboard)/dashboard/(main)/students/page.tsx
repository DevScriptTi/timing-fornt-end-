import { getStudents } from "@/lib/server/actions/student/getStudents";
import Button from "@/lib/ui/components/global/Buttons/Button";
import DashSection from "@/lib/ui/components/global/Section/Section";
import StudentPagination from "@/lib/ui/components/local/Dashboard/Student/StudentPagination";
import StudentsTable from "@/lib/ui/components/local/Dashboard/Student/StudentsTable";
import StudentStat from "@/lib/ui/components/local/Dashboard/Student/StudentStat";
import { DashContentAction, DashContenTitle, DashContentPaginationSkeleton, DashContentStatItemSkeleton, DashContentTableSkeleton } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import {  Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

interface PageProps {
    searchParams: { page?: string }
}

export default async function page({ searchParams }: PageProps) {
    const page = (await searchParams).page || "1";
    const students = await getStudents(parseInt(page));

    return (
        <DashSection>
            <DashContenTitle>Students</DashContenTitle>
            <Suspense fallback={<DashContentStatItemSkeleton />}>
                <StudentStat />
            </Suspense>
            <DashContentAction>
                <CreateStudent />
            </DashContentAction>
            <Suspense fallback={<DashContentTableSkeleton />}>
                <StudentsTable page={page} />
            </Suspense>
            <Suspense fallback={<DashContentPaginationSkeleton />}>
                <StudentPagination data={students} currentPage={parseInt(page)} />
            </Suspense>
        </DashSection>
    )
}

function CreateStudent() {
    return (
        <Link href="/dashboard/students/create">
            <Button mode="filled" icon={<Plus />}>
                Create Student
            </Button>
        </Link>
    )
}