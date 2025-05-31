"use server";
import { Section } from "@/lib/server/types/section/section";
import Link from "next/link";
import { Pencil, Timer } from "lucide-react";
import DeleteSection from "./delete";

export default async function SectionActions({ section }: { section: Section }) {
    return (
        <div
            className="flex items-center gap-1"
        >
            <Link href={`/dashboard/section/${section.id}`}>
                <Pencil className="text-green-700 dark:text-green-400" size={16} />
            </Link>
            <DeleteSection section={section} />
            <Link href={`/dashboard/sections/timing/${section.id}`}>
                <Timer className="text-green-700 dark:text-green-400" size={16} />
            </Link>
        </div>
    )
}