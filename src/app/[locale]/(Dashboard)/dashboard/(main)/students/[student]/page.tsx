import { DashContent, DashContenTitle } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import UpdateStudent from "@/lib/ui/forms/student/update";

export default async function EditStudentPage({ params }: { params: { student: string } }) {
    return (
        <DashContent>
            <DashContenTitle>Edit Student</DashContenTitle>
            <div className="mb-5"></div>
            <UpdateStudent student={Number((await params).student)} />
        </DashContent>
    )
}