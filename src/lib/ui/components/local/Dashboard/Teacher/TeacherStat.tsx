import { getTeachers } from "@/lib/server/actions/teacher/getTeachers";
import { DashContentStat, DashContentStatItem } from "../DashCrudContent";
import { UserCog } from "lucide-react";

export default async function TeacherStat() {
    const teachers = await getTeachers()
    return (
        <DashContentStat>
            <DashContentStatItem title="Teachers" value={teachers?.total.toString()} icon={<UserCog size={80} />} />
        </DashContentStat>
    )
}