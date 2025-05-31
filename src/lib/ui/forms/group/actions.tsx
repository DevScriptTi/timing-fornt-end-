"use server";
import { Group } from "@/lib/server/types/group/group";
import Link from "next/link";
import { Pencil, Timer } from "lucide-react";
import DeleteGroup from "./delete";

export default async function GroupActions({ group }: { group: Group }) {
    return (
        <div
            className="flex items-center gap-1"
        >
            <Link href={`/dashboard/group/${group.id}`}>
                <Pencil className="text-green-700 dark:text-green-400" size={16} />
            </Link>
            <DeleteGroup group={group} />
            <Link href={`/dashboard/groups/timing/${group.id}`}>
                <Timer className="text-green-700 dark:text-green-400" size={16} />
            </Link>
        </div>
    )
}