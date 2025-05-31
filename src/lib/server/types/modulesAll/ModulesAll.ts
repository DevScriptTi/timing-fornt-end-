export interface Module {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

// For the array response
export type ModulesAllResponse = Module[];