"use client";

import { TeacherTimingResponse } from "@/lib/server/types/sectionTiming/teacherTiming";
import {
    DashContent,
    DashContentAction,
    DashContenTitle,
    DashContentTable,
    TableTd,
    TableTdMain,
    TableThead,
    TableTr,
} from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import TeacherValidClasses from "@/lib/ui/forms/TimingForms/TeacherValidClasses";
import { useState } from "react";

const days = [
    { key: "mon", label: "monday" },
    { key: "tues", label: "tuesday" },
    { key: "wed", label: "wednesday" },
    { key: "thu", label: "thursday" },
    { key: "fri", label: "friday" },
    { key: "sat", label: "saturday" },
    { key: "sun", label: "sunday" },
];

export default function Index({
    data,
    user,
}: {
    data: TeacherTimingResponse;
    user: any;
}) {
    const [timingDate] = useState<TeacherTimingResponse>(data);

    return (
        <DashContent>
            <DashContenTitle>
                Timing teacher : {user?.user.key.keyable.name} - {user?.user.key.keyable.last}
            </DashContenTitle>
            <DashContentAction>
                <TeacherValidClasses />
            </DashContentAction>
            <div className="flex flex-col gap-4">
                {days.map((day) => {
                    const dayLessons = timingDate.lessons[day.key];
                    const lessons = dayLessons?.lessens || [];
                    const hasLessons = lessons.length > 0;
                    // Build table headers: always show at least one empty slot if no lessons
                    const headers = [
                        "Day",
                        ...(hasLessons
                            ? lessons.map((lesson) => lesson.start_time + " -> " + lesson.end_time)
                            : ["-"]),
                    ];
                    return (
                        <DashContentTable key={day.key}>
                            <TableThead list={headers} />
                            <tbody>
                                <TableTr>
                                    <TableTdMain value={day.label} />
                                    {hasLessons
                                        ? lessons.map((session) => (
                                                <TableTd key={session.id}>
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex flex-col justify-center gap-2">
                                                            <span className="flex gap-1 text-title-large text-on-surface dark:text-dark-on-surface">
                                                                {session.module.name}
                                                                <span className="text-primary dark:text-dark-primary font-bold">
                                                                    {session.type}
                                                                </span>
                                                            </span>
                                                            <span className="text-label-large text-primary-container dark:text-dark-primary-container">
                                                                {session.teacher.name} - {session.teacher.last}
                                                            </span>
                                                            <span className="text-label-large text-primary-container dark:text-dark-primary-container">
                                                                class : {session.class_rome.number}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </TableTd>
                                            ))
                                        : (
                                            <TableTd>
                                                <span className="text-label-large text-on-surface/50">No lessons</span>
                                            </TableTd>
                                        )}
                                </TableTr>
                            </tbody>
                        </DashContentTable>
                    );
                })}
            </div>
        </DashContent>
    );
}
