import DashSection from "@/lib/ui/components/global/Section/Section";
import { DashContenTitle } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import CreateStudentForm from "@/lib/ui/forms/student/CreateStudentForm";

export default function Create() {
    return (
        <DashSection>
            <DashContenTitle>Create Student</DashContenTitle>
            <div className="mb-5"></div>
            <CreateStudentForm />
        </DashSection>
    )
}