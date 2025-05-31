import { getSections } from "@/lib/server/actions/section/getSections";
import { DashContentStat, DashContentStatItem } from "../DashCrudContent";
import { UserCog } from "lucide-react";

export default async function SectionStat() {
    const sections = await getSections()
    return (
        <DashContentStat>
            <DashContentStatItem title="Sections" value={sections?.total.toString()} icon={<UserCog size={80} />} />
        </DashContentStat>
    )
}