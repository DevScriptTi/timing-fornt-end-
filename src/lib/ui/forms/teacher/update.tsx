import { getTeacher } from "@/lib/server/actions/teacher/getTeacher";
import UpdateTeacherForm from "./UpdateForm";
import { Suspense } from "react";
import TeacherUpdateSkeleton from "@/lib/ui/components/local/Dashboard/Teacher/TeacherUpdateSkeleton";

export default async function UpdateTeacher({ teacher }: { teacher: number }) {
    return (
        <Suspense fallback={<TeacherUpdateSkeleton />}>
            <UpdateTeacherContent teacher={teacher} />
        </Suspense>
    );
}

async function UpdateTeacherContent({ teacher }: { teacher: number }) {
    const teacher_ = await getTeacher(Number(teacher));

    return <UpdateTeacherForm teacher={teacher_} />;
}
