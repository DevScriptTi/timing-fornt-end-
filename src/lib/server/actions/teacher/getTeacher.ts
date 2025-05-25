'use server'

import { Teacher } from '@/lib/server/types/teacher/teacher'
import axiosInstance from '@/lib/server/tools/axios'

interface GetTeacherResponse {
    message: string;
    teacher: Teacher;
}

export async function getTeacher(id: number): Promise<Teacher> {
    try {
        const { data } = await axiosInstance.get<GetTeacherResponse>(
            `/teachers/${id}`
        )
        return data.teacher
    } catch (error) {
        console.error('Error fetching teacher:', error)
        throw error
    }
} 