"use server"

import { TimeTableResponse } from "@/lib/server/types/sectionTiming/sectionTiming";
import axiosInstance from "../../tools/axios";
import { ClassRoomPayload, ClassroomsResponse } from "../../types/validClasses/ValidClasses";
import { DaysResponse } from "../../types/days/days";
import { ModulesAllResponse } from "../../types/modulesAll/ModulesAll";
import { TeachersResponse } from "../../types/teachersAll/teachersAll";

export async function getSectionTiming(sectionId: number): Promise<TimeTableResponse> {
    try {
        const { data } = await axiosInstance.get(`sections/${sectionId}/time-table`);
        return data;
    } catch (error) {
        console.error("Error fetching section timing:", error);
        throw error;
    }
}

export async function validClassRoom(sectionId: number, data_payload: ClassRoomPayload): Promise<ClassroomsResponse> {
    try {
        const { data } = await axiosInstance.post(`sections/${sectionId}/valid-classes`, data_payload);
        return data;
    } catch (error) {
        console.error("Error fetching section timing:", error.response.data);
        throw error;
    }

}

export async function reserveClassRome(sectionId: number, data_payload: ClassRoomPayload): Promise<{ message: string, success: boolean }> {
    try {
        const { data } = await axiosInstance.post(`sections/${sectionId}/reserve-class-rome`, data_payload);
        console.log(data);
        return {
            message: "Class reserved successfully",
            success: true
        };
    } catch (error) {
        console.error("Error fetching section timing:", error.response.data);
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

export async function getDays(sectionId: number): Promise<DaysResponse> {
    try {
        const { data } = await axiosInstance.get(`days/${sectionId}`);
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
