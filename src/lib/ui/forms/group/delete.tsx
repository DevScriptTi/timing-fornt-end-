"use client";

import { Group } from "@/lib/server/types/group/group";
import { Trash2 } from "lucide-react";
import { deleteGroup } from "@/lib/server/actions/group/groupActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteGroupProps {
    group: Group;
}

export default function DeleteGroup({ group }: DeleteGroupProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteGroup(group.id);
            router.refresh();
        } catch (error) {
            console.error('Error deleting group:', error);
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