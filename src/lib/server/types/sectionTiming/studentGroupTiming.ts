import { ClassRoom, Teacher, Module } from "./sectionTiming";

export interface TimeTableStudent {
    timeTableGroup: TimeTableEntity;
    timeTableSection: TimeTableEntity;
}

export interface TimeTableEntity {
    id: number;
    timeable_type: string;
    timeable_id: number;
    created_at: string;
    updated_at: string;
    days: Day[];
}

export interface Day {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    time_table_id: number;
    lessens: Lesson[];
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
