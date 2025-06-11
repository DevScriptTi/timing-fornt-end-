"use client";

import { Input } from "@/lib/ui/components/global/Inputs/inputs";
import { Teacher } from "@/lib/server/types/teacher/teacher";
import { updateTeacher } from "@/lib/server/actions/teacher/teacherActions";
import { useForm } from "react-hook-form";
import Button from "@/lib/ui/components/global/Buttons/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";

const updateTeacherSchema = z.object({
    name: z.string()
        .min(1, "name is required")
        .regex(/^[A-Z]/, "First letter must be capital")
        .regex(/^[A-Z][a-z]*$/, "Only letters are allowed"),
    last: z.string()
        .min(1, "Last name is required")
        .regex(/^[A-Z]/, "First letter must be capital")
        .regex(/^[A-Z][a-z]*$/, "Only letters are allowed"),
    date_of_birth: z.string().optional(),
});

type UpdateTeacherFormData = z.infer<typeof updateTeacherSchema>;

interface UpdateTeacherFormProps {
    teacher: Teacher;
}

export default function UpdateTeacherForm({ teacher }: UpdateTeacherFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<UpdateTeacherFormData>({
        resolver: zodResolver(updateTeacherSchema),
        defaultValues: {
            name: teacher.name,
            last: teacher.last,
            date_of_birth: teacher.date_of_birth || "",
            // Ensure date_of_birth is a string, even if it's empty
        },
    });

    const onSubmit = async (data: UpdateTeacherFormData) => {
        try {
            await updateTeacher(teacher.id, data);

        } catch (error) {
            console.error('Error updating teacher:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md">
            {isSubmitSuccessful && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 rounded-lg">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <p className="font-medium text-green-800 dark:text-green-200">Teacher updated successfully!</p>
                </div>
            )}
            <Input
                label="name"
                title="Name"
                placeholder="Enter name (First letter capital)"
                error={errors.name?.message}
                register={register}
            />
            <Input
                label="last"
                title="Last Name"
                placeholder="Enter last name (First letter capital)"
                error={errors.last?.message}
                register={register}
            />
            <Input
                label="date_of_birth"
                title="Date of Birth"
                type="date"
                placeholder="Select date of birth"
                error={errors.date_of_birth?.message}
                register={register}
            />
            <Button
                type="submit"
                mode="filled"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Updating..." : "Update Teacher"}
            </Button>
        </form>
    );
}
