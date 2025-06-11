import { getStudents } from "@/lib/server/actions/student/getStudents";
import { DashContentStat, DashContentStatItem } from "../DashCrudContent";
import { UserCog } from "lucide-react";

export default async function StudentStat() {
    const students = await getStudents()
    return (
        <DashContentStat>
            <DashContentStatItem title="Students" value={students?.total.toString()} icon={<UserCog size={80} />} />
        </DashContentStat>
    )
}