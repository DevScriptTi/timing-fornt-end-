'use server'

import { Teacher, CreateTeacherRequest, TeacherErrorResponse } from '@/lib/server/types/teacher/teacher'
import axiosInstance from '@/lib/server/tools/axios'
import { revalidatePath } from 'next/cache'

export async function createTeacher(teacherData: CreateTeacherRequest): Promise<Teacher | TeacherErrorResponse> {
    try {
        const { data } = await axiosInstance.post<Teacher>(
            `/teachers`,
            teacherData
        )
        revalidatePath('/dashboard')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as TeacherErrorResponse
        }
        throw error
    }
}

export async function updateTeacher(id: number, teacherData: Partial<CreateTeacherRequest>): Promise<Teacher | TeacherErrorResponse> {
    try {
        const { data } = await axiosInstance.put<Teacher>(
            `/teachers/${id}`,
            teacherData
        )
        revalidatePath('/dashboard')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as TeacherErrorResponse
        }
        throw error
    }
}

export async function deleteTeacher(id: number): Promise<{ success: boolean }> {
    try {
        await axiosInstance.delete(`/teachers/${id}`)
        revalidatePath('/dashboard')
        return { success: true }
    } catch (error) {
        console.error('Error deleting teacher:', error)
        throw error
    }
}

export async function createTeacherKey(id: number): Promise<{ success: boolean; key?: string }> {
    try {
        await axiosInstance.post<{ key: string }>(`/teachers/${id}/generate-key`)
        revalidatePath('/dashboard')
        return { success: true }
    } catch (error: any) {
        console.error('Error creating teacher key:', error.response?.data)
        throw error
    }
} 