'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { StudentResponse } from '../../types/student/student'

export async function getStudents(page: number = 1): Promise<StudentResponse> {
    try {
        const { data } = await axiosInstance.get<StudentResponse>(`/students?page=${page}`)
        return data
    } catch (error: any) {
        console.error('Error fetching students:', error.response?.data)
        throw error.response?.data
    }
} 