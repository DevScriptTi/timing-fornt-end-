'use server'

import { TeacherResponse } from '@/lib/server/types/teacher/teacher'
import axiosInstance from '@/lib/server/tools/axios'

export async function getTeachers(page: number = 1): Promise<TeacherResponse> {
    try {
        const { data } = await axiosInstance.get<TeacherResponse>(`/teachers?page=${page}`)
        return data
    } catch (error: any) {
        console.error('Error fetching teachers:', error.response?.data)
        throw error.response?.data
    }
} 