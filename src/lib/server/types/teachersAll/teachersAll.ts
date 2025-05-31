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

// For the array response
export type TeachersResponse = Teacher[];