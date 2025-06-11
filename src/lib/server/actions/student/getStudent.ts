'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { Student } from '../../types/student/student';

interface GetStudentResponse {
    message: string;
    student: Student;
}

export async function getStudent(id: number): Promise<Student> {
    try {
        const { data } = await axiosInstance.get<GetStudentResponse>(
            `/students/${id}`
        )
        return data.student
    } catch (error) {
        console.error('Error fetching student:', error.response?.data)
        throw error
    }
} 