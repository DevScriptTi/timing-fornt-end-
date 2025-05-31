import { getSectionTiming } from "@/lib/server/actions/sectionTiming/SectionTimingActions";
import TimingTable from "./timingTable";


export default async function TimingPage({ params }: { params: { section: number } }) {
    const { section } = await params;
    const data = await getSectionTiming(section);
    console.log('section', section);
    return (
        <TimingTable data={data} section={section} />
    );
}
