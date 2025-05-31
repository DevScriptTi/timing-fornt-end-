import { getSectionTiming } from "@/lib/server/actions/sectionTiming/SectionTimingActions";
import TimingTable from "./timingTable";
import { getGroupTiming } from "@/lib/server/actions/groupTiming/GroupTimingActions";


export default async function TimingPage({ params }: { params: { group: number } }) {
    const { group } = await params;
    const data = await getGroupTiming(group);

    return (
        <TimingTable data={data} group={group} />
    );
}
