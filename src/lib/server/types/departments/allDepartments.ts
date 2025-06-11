import { Group } from "../student/student";

export interface Section {
    id: number;
    number: number;
    created_at: string;
    updated_at: string;
    year_id: number;
    groups :Group[];
}

export interface Year {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    department_id: number;
    sections: Section[];
}

export interface Department {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    years: Year[];
}

export interface DepartmentResponse {
    departments: Department[];
}

