"use client";

import { TimeTableEntity } from "@/lib/server/types/sectionTiming/studentGroupTiming";
import { DashContent, DashContenTitle, DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import { useState } from "react";

export default function TimingTableSection({ data, section }: { data: TimeTableEntity, section: number }) {
    const [timingDate] = useState<TimeTableEntity>(data);
    return (
        <DashContent>
            <DashContenTitle>
                Timing section {section}
            </DashContenTitle>
            <div className="flex flex-col gap-4">
                {timingDate.days.map((day) => (
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
