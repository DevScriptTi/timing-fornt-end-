import { Check, Loader2, Plus } from "lucide-react";
import Button from "../../components/global/Buttons/Button";
import Modal, { openModal } from "../../components/global/Modal/Modal";
import { Input } from "../../components/global/Inputs/inputs";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SimpleSelect } from "../../components/global/Inputs/SimpleSelect";
import { getDays, getModules, getTeachers, reserveClassRome, validClassRoom } from "@/lib/server/actions/groupTiming/GroupTimingActions";
import { useEffect, useState } from "react";
import { ClassroomsResponse, ClassRoomPayload } from "@/lib/server/types/validClasses/ValidClasses";
import { DaysResponse } from "@/lib/server/types/days/days";
import { ModulesAllResponse } from "@/lib/server/types/modulesAll/ModulesAll";
import { TeachersResponse } from "@/lib/server/types/teachersAll/teachersAll";

const FormSchema = z.object({
    "start_time": z.string(),
    "end_time": z.string(),
    "day": z.string({
        required_error: "Day is required"
    }).refine((val) => ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].includes(val), {
        message: "Invalid day"
    }),
    "type": z.string({
        required_error: "Type is required"
    }).refine((val) => ["td", "tp", "course"].includes(val), {
        message: "Invalid type"
    }).optional(),
    "class_rome_id": z.coerce.number().optional(),
    "day_id": z.coerce.number().optional(),
    "module_id": z.coerce.number().optional(),
    "teacher_id": z.coerce.number().optional(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function LessenTimingForm({ groupId }: { groupId: number }) {
    const [classes, setClasses] = useState<(ClassroomsResponse)>([]);
    const [days, setDays] = useState<(DaysResponse)>();
    const [modules, setModules] = useState<(ModulesAllResponse)>();
    const [teachers, setTeachers] = useState<(TeachersResponse)>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [daysData, modulesData, teachersData] = await Promise.all([
                    getDays(groupId),
                    getModules(),
                    getTeachers()
                ]);
                console.log(daysData, modulesData, teachersData);
                setDays(daysData);
                setModules(modulesData);
                setTeachers(teachersData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
    });
    console.log(errors)
    const onSubmit: SubmitHandler<FormSchemaType> = async (data: FormSchemaType) => {
        if (classes?.length === 0) {
            const data_payload: ClassRoomPayload = {
                start_time: data.start_time,
                end_time: data.end_time,
                day: data.day as "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun"
            }
            try {
                const response = await validClassRoom(groupId, data_payload);
                setClasses(response);
            } catch (error) {
                console.error('Error fetching classes:', error);
            }
        } else {
            const data_payload: ClassRoomPayload = {
                start_time: data.start_time,
                end_time: data.end_time,
                day: data.day as "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun",
                day_id: data.day_id,
                class_rome_id: data.class_rome_id,
                module_id: data.module_id,
                teacher_id: data.teacher_id,
                type: data.type as "td" | "tp" | "course"
            }
            try {
                const response = await reserveClassRome(groupId, data_payload);
                if (response.success) {
                    console.log(response.message);
                } else {
                    console.log(response.message);
                }
            } catch (error) {

                console.error('Error fetching classes:', error);
            }
            
        }
    }
    return (
        <div className="my-6">
            <Button icon={<Plus />} mode="filled" onClick={() => openModal("lessen-timing-form")}>
                Add Lessen
            </Button>
            <Modal id="lessen-timing-form" >
                <div
                    className="w-1/3 flex flex-col gap-4 items-center justify-center p-4 bg-surface-container dark:bg-dark-surface-container rounded-lg"
                >
                    <h1 className="text-title-large font-bold text-on-surface dark:text-dark-on-surface">Find A Valid Class</h1>
                    {isSubmitSuccessful && !isSubmitting && (
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <Check size={24} className="text-green-500" />
                            <p className="text-green-500">Lessen added successfully</p>
                        </div>
                    )}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4 items-center justify-center"
                    >
                        {
                            classes?.length === 0 ? (
                                <>
                                    <Input<FormSchemaType> error={errors.start_time?.message} register={register} label="start_time" title="Start Time" placeholder="Start Time (HH:MM:SS)" />
                                    <Input<FormSchemaType> error={errors.end_time?.message} register={register} label="end_time" title="End Time" placeholder="End Time (HH:MM:SS)" />
                                    <SimpleSelect
                                        register={register("day")}
                                        error={errors.day?.message}
                                        label="day"
                                        title="Day"
                                    >
                                        <option value="">Select a day</option>
                                        <option value="mon">Monday</option>
                                        <option value="tue">Tuesday</option>
                                        <option value="wed">Wednesday</option>
                                        <option value="thu">Thursday</option>
                                        <option value="fri">Friday</option>
                                        <option value="sat">Saturday</option>
                                        <option value="sun">Sunday</option>
                                    </SimpleSelect>
                                </>
                            ) : (
                                <>
                                    <SimpleSelect
                                        register={register("class_rome_id")}
                                        error={errors.class_rome_id?.message}
                                        label="class_rome_id"
                                        title="Class"
                                    >
                                        <option value="">Select a class</option>
                                        {classes?.map((class_) => (
                                            <option key={class_.id} value={class_.id}>{class_.number}</option>
                                        ))}
                                    </SimpleSelect>
                                    <Input<FormSchemaType> error={errors.start_time?.message} register={register} label="start_time" title="Start Time" placeholder="Start Time (HH:MM:SS)" />
                                    <Input<FormSchemaType> error={errors.end_time?.message} register={register} label="end_time" title="End Time" placeholder="End Time (HH:MM:SS)" />
                                    <SimpleSelect
                                        register={register("day_id")}
                                        error={errors.day_id?.message}
                                        label="day_id"
                                        title="Day"
                                    >
                                        <option value="">Select a day</option>
                                        {days?.map((day) => (
                                            <option key={day.id} value={day.id}>{day.name}</option>
                                        ))}
                                    </SimpleSelect>
                                    <SimpleSelect
                                        register={register("module_id")}
                                        error={errors.module_id?.message}
                                        label="module_id"
                                        title="Module"
                                    >
                                        <option value="">Select a module</option>
                                        {modules?.map((module) => (
                                            <option key={module.id} value={module.id}>{module.name}</option>
                                        ))}
                                    </SimpleSelect>
                                    <SimpleSelect
                                        register={register("teacher_id")}
                                        error={errors.teacher_id?.message}
                                        label="teacher_id"
                                        title="Teacher"
                                    >
                                        <option value="">Select a teacher</option>
                                        {teachers?.map((teacher) => (
                                            <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                                        ))}
                                    </SimpleSelect>
                                    <SimpleSelect
                                        register={register("type")}
                                        error={errors.type?.message}
                                        label="type"
                                        title="Type"
                                    >
                                        <option value="">Select a type</option>
                                        <option value="td">TD</option>
                                        <option value="tp">TP</option>
                                        <option value="course">Course</option>
                                    </SimpleSelect>
                                </>
                            )
                        }
                        <div
                            className="w-full flex justify-end"
                        >
                            <Button type="submit" icon={isSubmitting ? <Loader2 className="animate-spin" /> : <Plus />} mode="filled">Find</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}