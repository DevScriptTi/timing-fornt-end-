'use server'

import axiosInstance from '@/lib/server/tools/axios'
import { DepartmentResponse } from '../../types/departments/allDepartments'

export async function getAllDepartments(): Promise<DepartmentResponse> {
    try {
        const { data } = await axiosInstance.get<DepartmentResponse>(
            `/allDepartments`,
        )
        return data
    } catch (error: any) {
        console.error('Error creating department:', error.response?.data)

        throw error
    }
}
