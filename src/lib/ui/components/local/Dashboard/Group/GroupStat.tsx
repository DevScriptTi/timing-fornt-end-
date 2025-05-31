import { getGroups } from "@/lib/server/actions/group/getGroups";
import { DashContentStat, DashContentStatItem } from "../DashCrudContent";
import { UserCog } from "lucide-react";

export default async function GroupStat() {
    const groups = await getGroups()
    return (
        <DashContentStat>
            <DashContentStatItem title="Groups" value={groups?.total.toString()} icon={<UserCog size={80} />} />
        </DashContentStat>
    )
}