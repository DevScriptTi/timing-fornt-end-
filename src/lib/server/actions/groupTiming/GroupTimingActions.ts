"use server"

import axiosInstance from "../../tools/axios";
import { ClassRoomPayload, ClassroomsResponse } from "../../types/validClasses/ValidClasses";
import { DaysResponse } from "../../types/days/days";
import { ModulesAllResponse } from "../../types/modulesAll/ModulesAll";
import { TeachersResponse } from "../../types/teachersAll/teachersAll";
import { TimeTableResponse } from "../../types/sectionTiming/sectionTiming";

export async function getGroupTiming(groupId: number): Promise<TimeTableResponse> {
    try {
        const { data } = await axiosInstance.get(`groups/${groupId}/time-table`);
        return data;
    } catch (error) {
        console.error("Error fetching group timing:", error.response.data);
        throw error;
    }
}

export async function validClassRoom(groupId: number, data_payload: ClassRoomPayload): Promise<ClassroomsResponse> {
    try {
        const { data } = await axiosInstance.get(`groups/${groupId}/valid-classes`, data_payload);
        return data;
    } catch (error) {
        console.error("Error fetching group timing:", error.response.data);
        throw error;
    }
}

export async function reserveClassRome(groupId: number, data_payload: ClassRoomPayload): Promise<{ message: string, success: boolean }> {
    try {
        await axiosInstance.post(`groups/${groupId}/reserve-class-rome`, data_payload);
        return {
            message: "Class reserved successfully",
            success: true
        };
    } catch (error) {
        console.error("Error fetching group timing:", error.response.data);
        return {
            message: "Class not reserved",
            success: false
        };
    }
}

export async function deleteSession(sessionId: number): Promise<{ message: string, success: boolean }> {
    try {
        await axiosInstance.delete(`lessens/${sessionId}`);
        return {
            message: "Session deleted successfully",
            success: true
        };
    } catch (error) {
        console.error("Error deleting session:", error.response.data);
        return {
            message: "Session not deleted",
            success: false
        };
    }
}

export async function getDays(groupId: number): Promise<DaysResponse> {
    try {
        const { data } = await axiosInstance.get(`group-days/${groupId}`);
        return data;
    } catch (error) {
        console.error("Error creating lessen timing:", error.response.data);
        throw error;
    }
}

export async function getModules(): Promise<ModulesAllResponse> {
    try {
        const { data } = await axiosInstance.get(`modulesAll`);
        return data;
    } catch (error) {
        console.error("Error creating lessen timing:", error.response.data);
        throw error;
    }
}

export async function getTeachers(): Promise<TeachersResponse> {
    try {
        const { data } = await axiosInstance.get(`teachersAll`);
        return data;
    } catch (error) {
        console.error("Error creating lessen timing:", error.response.data);
        throw error;
    }
}
