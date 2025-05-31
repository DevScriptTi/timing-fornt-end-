export type DayName = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface Day {
    id: number;
    name: DayName;
    created_at: string;
    updated_at: string;
    time_table_id: number;
}

// For the array response
export type DaysResponse = Day[];