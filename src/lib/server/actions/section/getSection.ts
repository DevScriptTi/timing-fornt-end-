'use server'

import axiosInstance from '@/lib/server/tools/axios'        
import { Section } from '../../types/section/section';

interface GetSectionResponse {
    message: string;
    section: Section;
}

export async function getSection(id: number): Promise<Section> {
    try {
        const { data } = await axiosInstance.get<GetSectionResponse>(
            `/sections/${id}`
        )
        return data.section
    } catch (error) {
        console.error('Error fetching section:', error)
        throw error
    }
} 