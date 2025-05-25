"use client";

import { Input } from "@/lib/ui/components/global/Inputs/inputs";
import { createeacher } from "@/lib/server/actions/teacher/teacherActions";
import { useForm } from "react-hook-form";
import Button from "@/lib/ui/components/global/Buttons/Button";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { CreateTeacherRequest } from "@/lib/server/types/teacher/teacher";

const createTeacherSchema = z.object({
    name: z.string()
        .min(1, "Name is required")
        .regex(/^[A-Z]/, "First letter must be capital")
        .regex(/^[A-Z][a-z]*$/, "Only letters are allowed"),
    last: z.string()
        .min(1, "Last name is required")
        .regex(/^[A-Z]/, "First letter must be capital")
        .regex(/^[A-Z][a-z]*$/, "Only letters are allowed"),
});

type CreateTeacherFormData = z.infer<typeof createTeacherSchema>;

export default function CreateTeacherForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<CreateTeacherFormData>({
        resolver: zodResolver(createTeacherSchema),
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            const timer = setTimeout(() => {
                router.refresh();
                router.push('/dashboard');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitSuccessful, router]);

    const onSubmit = async (data: CreateTeacherFormData) => {
        try {
            await createTeacher(data);
        } catch (error) {
            console.error('Error creating teacher:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md">
            {isSubmitSuccessful && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 animate-fade-in">
                    <CheckCircle2 size={20} />
                    <span>Teacher created successfully!</span>
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
            <Button
                type="submit"
                mode="filled"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Creating..." : "Create Teacher"}
            </Button>
        </form>
    );
}