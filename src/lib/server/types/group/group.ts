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
    students_count: number;
    section: Section;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface GroupResponse {
    current_page: number;
    data: Group[];
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