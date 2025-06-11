'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { revalidatePath } from 'next/cache'
import { CreateStudentRequest, Student, StudentErrorResponse } from '../../types/student/student'

export async function createStudent(studentData: CreateStudentRequest): Promise<Student | StudentErrorResponse> {
    try {
        const { data } = await axiosInstance.post<Student>(
            `/students`,
            studentData
        )
        revalidatePath('/dashboard')
        return data
    } catch (error: any) {
        console.error('Error creating student:', error.response?.data)
        if (error.response?.data) {
            return error.response.data as StudentErrorResponse
        }
        throw error
    }
}

export async function updateStudent(id: number, studentData: Partial<CreateStudentRequest>): Promise<Student | StudentErrorResponse> {
    try {
        const { data } = await axiosInstance.put<Student>(
            `/students/${id}`,
            studentData
        )
        revalidatePath('/dashboard')
        return data
    } catch (error: any) {
        console.error('Error updating student:', error.response?.data)
        if (error.response?.data) {
            return error.response.data as StudentErrorResponse
        }
        throw error
    }
}

export async function deleteStudent(id: number): Promise<{ success: boolean }> {
    try {
        await axiosInstance.delete(`/students/${id}`)
        revalidatePath('/dashboard')
        return { success: true }
    } catch (error) {
        console.error('Error deleting student:', error)
        throw error
    }
}

export async function createStudentKey(id: number): Promise<{ success: boolean; key?: string }> {
    try {
        await axiosInstance.post<{ key: string }>(`/students/${id}/generate-key`)
        revalidatePath('/dashboard')
        return { success: true }
    } catch (error: any) {
        console.error('Error creating student key:', error.response?.data)
        throw error
    }
} 