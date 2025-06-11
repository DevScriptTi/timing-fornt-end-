"use client";

import { Student } from "@/lib/server/types/student/student";
import { Trash2 } from "lucide-react";
import { deleteStudent } from "@/lib/server/actions/student/studentActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteStudentProps {
    student: Student;
}

export default function DeleteStudent({ student }: DeleteStudentProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteStudent(student.id);
            router.refresh();
        } catch (error) {
            console.error('Error deleting student:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`
                text-red-700 dark:text-red-400 
                hover:text-red-800 dark:hover:text-red-300 
                disabled:opacity-50
                transition-all duration-200
                ${isDeleting ? 'animate-spin' : ''}
            `}
        >
            <Trash2 size={16} />
        </button>
    );
}