export interface User {
    id: number;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    key_id: number;
}

export interface Key {
    id: number;
    value: string;
    status: 'used' | 'unused';
    keyable_type: string;
    keyable_id: number;
    used_at: string | null;
    expires_at: string | null;
    created_at: string;
    updated_at: string;
    user: User | null;
}

export interface Department {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Year {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    department_id: number;
    department: Department;
}

export interface Section {
    id: number;
    number: number;
    created_at: string;
    updated_at: string;
    year_id: number;
    year: Year;
}

export interface Group {
    id: number;
    number: number;
    created_at: string;
    updated_at: string;
    section_id: number;
    section: Section;
}

export interface Student {
    id: number;
    username: string;
    name: string;
    last: string;
    date_of_birth: string;
    inscreption_number: string;
    created_at: string;
    updated_at: string;
    baladiyas_id: number;
    group_id: number;
    key: Key;
    group: Group;
    baladiya: any | null; // If you know the structure, replace 'any'
}

export interface CreateStudentRequest {
    name?: string;
    last?: string;
    date_of_birth?: string;
    inscreption_number?: string;
    group_id?: number;
}

export interface StudentErrorResponse {
    message: string;
    errors: {
        name?: string[];
        last?: string[];
        date_of_birth?: string[];
        inscreption_number?: string[];
        group_id?: string[];
    }
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface StudentResponse {
    current_page: number;
    data: Student[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}