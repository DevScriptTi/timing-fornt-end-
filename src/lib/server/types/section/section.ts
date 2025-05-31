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
    groups_count: number;
    year: Year;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface SectionResponse {
    current_page: number;
    data: Section[];
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