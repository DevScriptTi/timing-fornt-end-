'use server'

import axiosInstance from '@/lib/server/tools/axios'        
import { Group } from '../../types/group/group';

interface GetGroupResponse {
    message: string;
    group: Group;
}

export async function getGroup(id: number): Promise<Group> {
    try {
        const { data } = await axiosInstance.get<GetGroupResponse>(
            `/groups/${id}`
        )
        return data.group
    } catch (error) {
        console.error('Error fetching group:', error)
        throw error
    }
} 