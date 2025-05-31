export interface TeacherTimingResponse {
    lessons: {
        mon: DayWithLessons | null;
        tues:DayWithLessons | null;
        wed: DayWithLessons | null;
        thu: DayWithLessons | null;
        fri: DayWithLessons | null;
        sat: DayWithLessons | null;
        sun: DayWithLessons | null;
    };
}

export interface DayWithLessons {
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
    type: string;
    created_at: string;
    updated_at: string;
    day_id: number;
    module_id: number;
    teacher_id: number;
    class_rome_id: number;
    class_rome: ClassRome;
    module: Module;
    teacher: Teacher;
}

export interface ClassRome {
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

