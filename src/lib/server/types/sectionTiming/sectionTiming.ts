export interface ClassRoom {
    id: number;
    number: string;
    created_at: string;
    updated_at: string;
    department_id: number;
}

export interface Module {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Teacher {
    id: number;
    username: string;
    name: string;
    last: string;
    date_of_birth: string;
    created_at: string;
    updated_at: string;
    baladiya_id: number;
}

export interface Lesson {
    id: number;
    start_time: string;
    end_time: string;
    type: "td" | "tp" | "cours";
    created_at: string;
    updated_at: string;
    day_id: number;
    module_id: number;
    teacher_id: number;
    class_rome_id: number;
    class_rome: ClassRoom;
    module: Module;
    teacher: Teacher;
}

export interface Day {
    id: number;
    name: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
    created_at: string;
    updated_at: string;
    time_table_id: number;
    lessens: Lesson[];
}

export interface TimeTable {
    id: number;
    timeable_type: string;
    timeable_id: number;
    created_at: string;
    updated_at: string;
    days: Day[];
}

export interface TimeTableResponse {
    timeTable: TimeTable;
}

