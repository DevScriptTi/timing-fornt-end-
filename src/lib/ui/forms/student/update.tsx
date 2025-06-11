import { getStudent } from "@/lib/server/actions/student/getStudent";
import UpdateStudentForm from "./UpdateForm";
import { Suspense } from "react";
import StudentUpdateSkeleton from "@/lib/ui/components/local/Dashboard/Student/StudentUpdateSkeleton";

export default async function UpdateStudent({ student }: { student: number }) {
    return (
        <Suspense fallback={<StudentUpdateSkeleton />}>
            <UpdateStudentContent student={student} />
        </Suspense>
    );
}

async function UpdateStudentContent({ student }: { student: number }) {
    const student_ = await getStudent(Number(student));
    return <UpdateStudentForm student={student_} />;
}
