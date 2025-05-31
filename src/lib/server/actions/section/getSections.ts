'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { SectionResponse } from '../../types/section/section'

export async function getSections(page: number = 1): Promise<SectionResponse> {
    try {
        const { data } = await axiosInstance.get<SectionResponse>(`/sections?page=${page}`)
        return data
    } catch (error) {
        console.error('Error fetching sections:', error)
        throw error
    }
} 