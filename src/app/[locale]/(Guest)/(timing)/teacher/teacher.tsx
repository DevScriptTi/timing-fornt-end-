import { getTeacherTiming } from "@/lib/server/actions/group/groupActions";
import Index from ".";
import { getUser } from "@/lib/server/actions/auth/getUser";

export default async function Teacher() {
    const data = await getTeacherTiming();
    const user = await getUser();
    return (
        <Index data={data} user={user} />
    )
}