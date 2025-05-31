'use server'

import { Section, SectionErrorResponse } from '@/lib/server/types/section/section'
import axiosInstance from '@/lib/server/tools/axios'
import { revalidatePath } from 'next/cache'

export async function createSection(sectionData: Section): Promise<Section | SectionErrorResponse> {
    try {
        const { data } = await axiosInstance.post<Section>(
            `/sections`,
            sectionData
        )
        revalidatePath('/dashboard')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as SectionErrorResponse
        }
        throw error
    }
}

export async function updateSection(id: number, sectionData: Partial<Section>): Promise<Section | SectionErrorResponse> {
    try {
        const { data } = await axiosInstance.put<Section>(
            `/sections/${id}`,
            sectionData
        )
        revalidatePath('/dashboard')
        return data
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as SectionErrorResponse
        }
        throw error
    }
}

export async function deleteSection(id: number): Promise<{ success: boolean }> {
    try {
        await axiosInstance.delete(`/sections/${id}`)
        revalidatePath('/dashboard')
        return { success: true }
    } catch (error) {
        console.error('Error deleting section:', error)
        throw error
    }
}

export async function createSectionKey(id: number): Promise<{ success: boolean; key?: string }> {
    try {
        await axiosInstance.post<{ key: string }>(`/sections/${id}/generate-key`)
        revalidatePath('/dashboard')
        return { success: true }
    } catch (error: any) {
        console.error('Error creating section key:', error.response?.data)
        throw error
    }
} 