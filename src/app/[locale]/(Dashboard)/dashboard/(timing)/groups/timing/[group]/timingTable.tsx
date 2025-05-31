"use client";

import { deleteSession } from "@/lib/server/actions/groupTiming/GroupTimingActions";
import { TimeTableResponse } from "@/lib/server/types/sectionTiming/sectionTiming";
import { DashContent, DashContentAction, DashContenTitle, DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import LessenGroupTimingForm from "@/lib/ui/forms/TimingForms/LessenGroupTimingForm";
import { Trash } from "lucide-react";
import { useState } from "react";

export default function TimingTable({ data, group }: { data: TimeTableResponse, group: number }) {
    const [timingDate, setTimingDate] = useState<TimeTableResponse>(data);
    return (
        <DashContent>
            <DashContenTitle>
                Timing group {group}
            </DashContenTitle>
            <DashContentAction>
                <LessenGroupTimingForm groupId={timingDate.timeTable.timeable_id} />
            </DashContentAction>
            <div className="flex flex-col gap-4">
                {timingDate.timeTable.days.map((day) => (
                    <DashContentTable key={day.id}>
                        <TableThead list={["Day", ...day.lessens.map((lesson) => lesson.start_time + " -> " + lesson.end_time)]} />
                        <tbody>
                            <TableTr key={day.id}>
                                <TableTdMain value={day.name} />
                                {day.lessens.map((session) => (
                                    <TableTd key={session.id}>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex flex-col justify-center gap-2">
                                                <span className="flex gap-1 text-title-large text-on-surface dark:text-dark-on-surface">
                                                    {session.module.name}
                                                    <span className="text-primary dark:text-dark-primary font-bold">{session.type}</span>
                                                </span>
                                                <span className="text-label-large text-primary-container dark:text-dark-primary-container">{session.teacher.name} - {session.teacher.last}</span>
                                                <span className="text-label-large text-primary-container dark:text-dark-primary-container">class : {session.class_rome.number}</span>
                                                <Delete session={session.id} />
                                            </div>
                                        </div>
                                    </TableTd>
                                ))}
                            </TableTr>
                        </tbody>
                    </DashContentTable>
                ))}
            </div>
        </DashContent>
    )
}

function Delete({ session }: { session: number }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const handleDelete = async () => {
        setIsLoading(true);
        const response = await deleteSession(session);
        setIsLoading(false);
        if (response.success) {
            setIsSuccess(true);
            setSuccessMessage(response.message);
        } else {
            setIsError(true);
            setErrorMessage(response.message);
        }
    }
    return (
        errorMessage ? <span className="text-label-small text-red-500">{errorMessage}</span> : successMessage ? <span className="text-label-small text-green-500">{successMessage}</span> : <Trash size={16} className={`${isLoading ? "animate-spin" : ""} ${isSuccess ? "text-green-500" : ""} ${isError ? "text-red-500" : ""}`} onClick={handleDelete} />
    )
}