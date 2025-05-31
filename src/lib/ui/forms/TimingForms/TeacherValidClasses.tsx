import { Check, Loader2, Plus } from "lucide-react";
import Button from "../../components/global/Buttons/Button";
import Modal, { openModal } from "../../components/global/Modal/Modal";
import { Input } from "../../components/global/Inputs/inputs";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SimpleSelect } from "../../components/global/Inputs/SimpleSelect";
import { getDays, validClassRoom } from "@/lib/server/actions/sectionTiming/SectionTimingActions";
import { useEffect, useState } from "react";
import { ClassroomsResponse, ClassRoomPayload } from "@/lib/server/types/validClasses/ValidClasses";
import { DaysResponse } from "@/lib/server/types/days/days";
import { Group, GroupResponse, GroupTest } from "@/lib/server/types/group/group";

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
    "group_id": z.coerce.number().optional(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function TeacherValidClasses() {
    const [groups, setGroups] = useState<GroupTest[]>([
        {
            id: 1,
            number: 1,
        },
        {
            id: 2,
            number: 2,
        },
        {
            id: 3,
            number: 3,
        },
        {
            id: 4,
            number: 4,
        },
        {
            id: 5,
            number: 5,
        },
        {
            id: 6,
            number: 6,
        },
        {
            id: 7,
            number: 7,
        },
        
    ]);
    const [sectionId] = useState<number>(1);
    const [classes, setClasses] = useState<(ClassroomsResponse)>([]);
    const [days, setDays] = useState<(DaysResponse)>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [daysData] = await Promise.all([
                    getDays(1),
                ]);
                setDays(daysData);
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
                const response = await validClassRoom(sectionId, data_payload);
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
                await new Promise(async (resolve) => {
                    setTimeout(() => {
                        resolve(true);
                    }, 1000);
                });
            } catch (error) {

                console.error('Error fetching classes:', error);
            }

        }
    }
    return (
        <div className="my-6">
            <Button icon={<Plus />} mode="filled" onClick={() => openModal("lessen-timing-form")}>
                Search Valid Class
            </Button>
            <Modal id="lessen-timing-form" >
                <div
                    className="w-1/3 flex flex-col gap-4 items-center justify-center p-4 bg-surface-container dark:bg-dark-surface-container rounded-lg"
                >
                    <h1 className="text-title-large font-bold text-on-surface dark:text-dark-on-surface">Find A Valid Class</h1>

                    {
                        classes?.length === 0 ? (
                            isSubmitSuccessful && !isSubmitting && (
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <Check size={24} className="text-green-500" />
                                    <p className="text-green-500">Lessen added successfully</p>
                                </div>
                            )
                        ) : (
                            isSubmitSuccessful && !isSubmitting && (
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <Check size={24} className="text-green-500" />
                                    <p className="text-green-500">Request sent successfully</p>
                                </div>
                            )
                        )
                    }

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
                                        register={register("group_id")}
                                        error={errors.day_id?.message}
                                        label="group_id"
                                        title="Group"
                                    >
                                        <option value="">Select a group</option>
                                        {groups?.map((group) => (
                                            <option key={group.id} value={group.id}>{group.number}</option>
                                        ))}
                                    </SimpleSelect>
                                </>
                            )
                        }
                        <div
                            className="w-full flex justify-end"
                        >
                            {
                                classes?.length === 0 ? (
                                    <Button type="submit" icon={isSubmitting ? <Loader2 className="animate-spin" /> : <Plus />} mode="filled">Find</Button>
                                ) : (
                                    <Button type="submit" icon={isSubmitting ? <Loader2 className="animate-spin" /> : <Plus />} mode="filled">Send Request</Button>
                                )
                            }
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}