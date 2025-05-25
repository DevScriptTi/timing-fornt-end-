"use client";

import { Teacher } from "@/lib/server/types/teacher/teacher";
import { Trash2 } from "lucide-react";
import { deleteTeacher } from "@/lib/server/actions/teacher/teacherActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteTeacherProps {
    teacher: Teacher;
}

export default function DeleteTeacher({ teacher }: DeleteTeacherProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteTeacher(teacher.id);
            router.refresh();
        } catch (error) {
            console.error('Error deleting teacher:', error);
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