'use server'

import { Group, GroupErrorResponse } from '@/lib/server/types/group/group'
import axiosInstance from '@/lib/server/tools/axios'
import { revalidatePath } from 'next/cache'
import { TimeTableStudent } from '../../types/sectionTiming/studentGroupTiming'
import { LessonsResponse, TeacherTimingResponse } from '../../types/sectionTiming/teacherTiming'

export async function createGroup(groupData: Group): Promise<Group | GroupErrorResponse> {
    try {
        const { data } = await axiosInstance.post<Group>(
            `/groups`,
            groupData
        )
        revalidatePath('/dashboard')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as GroupErrorResponse
        }
        throw error
    }
}

export async function updateGroup(id: number, groupData: Partial<Group>): Promise<Group | GroupErrorResponse> {
    try {
        const { data } = await axiosInstance.put<Group>(
            `/groups/${id}`,
            groupData
        )
        revalidatePath('/dashboard')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as GroupErrorResponse
        }
        throw error
    }
}

export async function deleteGroup(id: number): Promise<{ success: boolean }> {
    try {
        await axiosInstance.delete(`/groups/${id}`)
        revalidatePath('/dashboard')
        return { success: true }
    } catch (error) {
        console.error('Error deleting group:', error)
        throw error
    }
}

export async function createGroupKey(id: number): Promise<{ success: boolean; key?: string }> {
    try {
        await axiosInstance.post<{ key: string }>(`/groups/${id}/generate-key`)
        revalidatePath('/dashboard')
        return { success: true }
    } catch (error: any) {
        console.error('Error creating group key:', error.response?.data)
        throw error
    }
} 

export async function getGroups(): Promise<TimeTableStudent> {
    try {
        const { data } = await axiosInstance.get<TimeTableStudent>('/group/student')
        return data
    } catch (error: any) {
        console.error('Error getting groups:', error.response?.data)
        throw error
    }
}

export async function getTeacherTiming(): Promise<TeacherTimingResponse> {
    try {
        const { data } = await axiosInstance.get<TeacherTimingResponse>('/group/teacher')
        return data
    } catch (error: any) {
        console.error('Error getting teacher timing:', error.response?.data)
        throw error
    }
}