import { getTeacherTiming } from "@/lib/server/actions/group/groupActions";
import Index from ".";

export default async function Teacher() {
    const data = await getTeacherTiming();
    return (
        <Index data={data} />
    )
}