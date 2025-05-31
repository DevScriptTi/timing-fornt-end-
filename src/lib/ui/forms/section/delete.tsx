"use client";

import { Section } from "@/lib/server/types/section/section";
import { Trash2 } from "lucide-react";
import { deleteSection } from "@/lib/server/actions/section/sectionActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteSectionProps {
    section: Section;
}

export default function DeleteSection({ section }: DeleteSectionProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteSection(section.id);
            router.refresh();
        } catch (error) {
            console.error('Error deleting section:', error);
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