'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { GroupResponse } from '../../types/group/group'

export async function getGroups(page: number = 1): Promise<GroupResponse> {
    try {
        const { data } = await axiosInstance.get<GroupResponse>(`/groups?page=${page}`)
        return data
    } catch (error) {
        console.error('Error fetching groups:', error)
        throw error
    }
} 