"use server";
import { Teacher } from "@/lib/server/types/teacher/teacher";
import Link from "next/link";
import { Pencil } from "lucide-react";
import DeleteTeacher from "./delete";

export default async function TeacherActions({ teacher }: { teacher: Teacher }) {
    return (
        <div
            className="flex items-center gap-1"
        >
            <Link href={`/dashboard/teacher/${teacher.id}`}>
                <Pencil className="text-green-700 dark:text-green-400" size={16} />
            </Link>
            <DeleteTeacher teacher={teacher} />
        </div>
    )
}