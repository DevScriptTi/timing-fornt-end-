"use client";

import { Input } from "@/lib/ui/components/global/Inputs/inputs";
import {  Group, Student } from "@/lib/server/types/student/student";
import { updateStudent } from "@/lib/server/actions/student/studentActions";
import { useForm } from "react-hook-form";
import Button from "@/lib/ui/components/global/Buttons/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Department, Section, Year } from "@/lib/server/types/departments/allDepartments";
import { getAllDepartments } from "@/lib/server/actions/department/DepartmentActions";
import { SimpleSelect } from "../../components/global/Inputs/SimpleSelect";

const updateStudentSchema = z.object({
    name: z.string()
        .min(1, "name is required")
        .regex(/^[A-Z]/, "First letter must be capital")
        .regex(/^[A-Z][a-z]*$/, "Only letters are allowed"),
    last: z.string()
        .min(1, "Last name is required")
        .regex(/^[A-Z]/, "First letter must be capital")
        .regex(/^[A-Z][a-z]*$/, "Only letters are allowed"),
    date_of_birth: z.string().optional(),
    inscreption_number: z.string()
        .min(1, "Inscription number is required")
        .regex(/^\d+$/, "Only numbers are allowed"),
    group_id: z.string(),
    section_id: z.string(),
    year_id: z.string(),
    department_id: z.string(),
});

type UpdateStudentFormData = z.infer<typeof updateStudentSchema>;

interface UpdateStudentFormProps {
    student: Student;
}

export default function UpdateStudentForm({ student }: UpdateStudentFormProps) {
    const [departemnts, setDepartments] = useState<Department[]>([]);
    const [years, setYears] = useState<Year[]>([]);
    const [section, setSection] = useState<Section[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const {
        register,
        getValues,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<UpdateStudentFormData>({
        resolver: zodResolver(updateStudentSchema),
        defaultValues: {
            name: student.name,
            last: student.last,
            date_of_birth: student.date_of_birth || "",
            group_id: student.group_id.toString(),
            section_id: student.group?.section_id.toString(),
            year_id: student.group?.section?.year_id.toString(),
            department_id: student.group?.section?.year?.department_id.toString(),
            inscreption_number: student.inscreption_number,

            // Ensure date_of_birth is a string, even if it's empty
        },
    });

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const data = await getAllDepartments()
                setDepartments(data.departments);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };
        

        fetchDepartments();
        setValue("department_id", student.group?.section?.year?.department_id?.toString() || "");
        setValue("year_id", student.group?.section?.year_id?.toString() || "");
        setValue("section_id", student.group?.section_id?.toString() || "");
        setValue("group_id", student.group_id?.toString() || "");
        console.log("student", getValues());
        console.log("student", student);
    }, []);

    const onSubmit = async (data: UpdateStudentFormData) => {
        try {
            await updateStudent(student.id, {
                name : data.name,
                last : data.last,
                date_of_birth: data.date_of_birth,
                inscreption_number: data.inscreption_number,
                group_id: data.group_id ? Number(data.group_id) : undefined,

            });

        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md">
            {isSubmitSuccessful && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 rounded-lg">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <p className="font-medium text-green-800 dark:text-green-200">Student updated successfully!</p>
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
            <Input
                label="inscreption_number"
                title="Inscription Number"
                placeholder="Enter inscription number"
                error={errors.inscreption_number?.message}
                register={register}
            />
            <SimpleSelect
                title="Department"
                label="department_id"
                register={register("department_id")}
                error={errors.department_id?.message}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const departmentId = e.target.value;
                    if (departmentId) {
                        setValue("department_id", departmentId)
                        const selectedDepartment = departemnts.find(dept => dept.id === +departmentId);
                        setYears(selectedDepartment ? selectedDepartment.years : []);
                    } else {
                        setYears([]);
                    }
                }}
            >
                <option value="">Select Department</option>
                {departemnts.map((department) => (
                    <option key={department.id} value={department.id}>
                        {department.name}
                    </option>
                ))}
            </SimpleSelect>
            {
                watch('department_id') && (
                    <SimpleSelect
                        title="Year"
                        label="year_id"
                        register={register("year_id")}
                        error={errors.year_id?.message}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            const yearId = e.target.value;
                            if (yearId) {
                                setValue("year_id", yearId);
                                const selectedYear = years.find(year => year.id === +yearId);
                                setSection(selectedYear ? selectedYear.sections : []);
                            } else {
                                setSection([]);
                            }
                        }}
                    >
                        <option value={undefined}>Select Year</option>
                        {years.map((year) => (
                            <option key={year.id} value={year.id}>
                                {year.name}
                            </option>
                        ))}
                    </SimpleSelect>
                )
            }
            {
                watch('year_id') && (
                    <SimpleSelect
                        title="Section"
                        label="section_id"
                        register={register("section_id")}
                        error={errors.section_id?.message}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            const sectionId = e.target.value;
                            if (sectionId) {
                                setValue("section_id", sectionId);
                                const selectedSection = section.find(sec => sec.id === +sectionId);
                                setGroups(selectedSection ? selectedSection.groups : []);
                            } else {
                                setGroups([]);
                            }
                        }}

                    >
                        <option value="">Select Section</option>
                        {section.map((section) => (
                            <option key={section.id} value={section.id}>
                                {section.number}
                            </option>
                        ))}
                    </SimpleSelect>
                )
            }
            {
                watch('section_id') && (
                    <SimpleSelect
                        title="Group"
                        label="group_id"
                        register={register("group_id")}
                        error={errors.group_id?.message}
                    >
                        <option value="">Select Group</option>
                        {groups.map((group) => (
                            <option key={group.id} value={group.id}>
                                {group.number}
                            </option>
                        ))}
                    </SimpleSelect>
                )
            }
            <Button
                type="submit"
                mode="filled"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Updating..." : "Update Student"}
            </Button>
        </form>
    );
}
