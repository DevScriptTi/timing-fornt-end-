export interface Classroom {
    id: number;
    number: string;
    created_at: string;
    updated_at: string;
    department_id: number;
}

export type ClassroomsResponse = Classroom[];

export type ClassRoomPayload = {
    start_time: string;
    end_time: string;
    day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
    class_rome_id?: number;
    day_id?: number;
    module_id?: number;
    teacher_id?: number;
    type?: "td" | "tp" | "course";
}

