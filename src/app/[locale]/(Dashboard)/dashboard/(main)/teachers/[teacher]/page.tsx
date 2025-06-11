import { DashContent, DashContenTitle } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import UpdateTeacher from "@/lib/ui/forms/teacher/update";

export default async function EditTeacherPage({ params }: { params: { teacher: string } }) {
    return (
        <DashContent>
            <DashContenTitle>Edit Teacher</DashContenTitle>
            <div className="mb-5"></div>
            <UpdateTeacher teacher={Number((await params).teacher)} />
        </DashContent>
    )
}