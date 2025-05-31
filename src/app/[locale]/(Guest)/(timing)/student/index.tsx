import TimingTableGroup from "./groupTimng";
import TimingTableSection from "./sectionTimng";
import { getGroups } from "@/lib/server/actions/group/groupActions";

export default async function Index() {
    const data = await getGroups();
    return (
        <>
            <TimingTableSection data={data.timeTableSection} section={data.timeTableGroup.timeable_id} />
            <hr className="h-1 bg-primary dark:bg-dark-primary" />
            <TimingTableGroup data={data.timeTableGroup} group={data.timeTableGroup.timeable_id} />
        </>
    )
}