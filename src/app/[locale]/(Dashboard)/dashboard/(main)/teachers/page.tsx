import { getTeachers } from "@/lib/server/actions/teacher/getTeachers";
import Button from "@/lib/ui/components/global/Buttons/Button";
import DashSection from "@/lib/ui/components/global/Section/Section";
import TeacherPagination from "@/lib/ui/components/local/Dashboard/Teacher/TeacherPagination";
import TeachersTable from "@/lib/ui/components/local/Dashboard/Teacher/TeachersTable";
import TeacherStat from "@/lib/ui/components/local/Dashboard/Teacher/TeacherStat";
import { DashContentAction, DashContenTitle, DashContentPaginationSkeleton, DashContentStatItemSkeleton, DashContentTableSkeleton } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import {  Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

interface PageProps {
    searchParams: { page?: string }
}

export default async function page({ searchParams }: PageProps) {
    const page = (await searchParams).page || "1";
    const teachers = await getTeachers(parseInt(page));

    return (
        <DashSection>
            <DashContenTitle>Teachers</DashContenTitle>
            <Suspense fallback={<DashContentStatItemSkeleton />}>
                <TeacherStat />
            </Suspense>
            <DashContentAction>
                <CreateTeacher />
            </DashContentAction>
            <Suspense fallback={<DashContentTableSkeleton />}>
                <TeachersTable page={page} />
            </Suspense>
            <Suspense fallback={<DashContentPaginationSkeleton />}>
                <TeacherPagination data={teachers} currentPage={parseInt(page)} />
            </Suspense>
        </DashSection>
    )
}

function CreateTeacher() {
    return (
        <Link href="/dashboard/teachers/create">
            <Button mode="filled" icon={<Plus />}>
                Create Teacher
            </Button>
        </Link>
    )
}