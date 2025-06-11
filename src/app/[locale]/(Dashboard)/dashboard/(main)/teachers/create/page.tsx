import DashSection from "@/lib/ui/components/global/Section/Section";
import { DashContenTitle } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import CreateTeacherForm from "@/lib/ui/forms/teacher/CreateTeacherForm";

export default function Create() {
    return (
        <DashSection>
            <DashContenTitle>Create Teacher</DashContenTitle>
            <div className="mb-5"></div>
            <CreateTeacherForm />
        </DashSection>
    )
}