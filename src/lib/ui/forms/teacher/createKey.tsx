"use client";

import { Teacher } from "@/lib/server/types/teacher/teacher";
import { Key } from "lucide-react";
import { createTeacherKey } from "@/lib/server/actions/teacher/teacherActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CreateKeyProps {
    teacher: Teacher;
}

export default function CreateKey({ teacher }: CreateKeyProps) {
    const router = useRouter();
    const [isCreating, setIsCreating] = useState(false);

    const handleCreateKey = async () => {
        try {
            setIsCreating(true);
            const result = await createTeacherKey(teacher.id);
            if (result.success && result.key) {
                // You can handle the key here if needed
                console.log('New key created:', result.key);
            }
            router.refresh();
        } catch (error) {
            console.error('Error creating key:', error);
        } finally {
            setIsCreating(false);
        }
    };

    return (
        <button
            onClick={handleCreateKey}
            disabled={isCreating}
            className={`
                text-blue-700 dark:text-blue-400 
                hover:text-blue-800 dark:hover:text-blue-300 
                disabled:opacity-50
                transition-all duration-200
                ${isCreating ? 'animate-spin' : ''}
            `}
        >
            <Key size={16} />
        </button>
    );
} 