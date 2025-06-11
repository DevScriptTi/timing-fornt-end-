"use server";
import { Student } from "@/lib/server/types/student/student";
import Link from "next/link";
import { Pencil } from "lucide-react";
import DeleteStudent from "./delete";

export default async function StudentActions({ student }: { student: Student }) {
    return (
        <div
            className="flex items-center gap-1"
        >
            <Link href={`/dashboard/students/${student.id}`}>
                <Pencil className="text-green-700 dark:text-green-400" size={16} />
            </Link>
            <DeleteStudent student={student} />
        </div>
    )
}