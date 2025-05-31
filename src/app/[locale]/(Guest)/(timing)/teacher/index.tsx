"use client";

import { TeacherTimingResponse } from "@/lib/server/types/sectionTiming/teacherTiming";
import { DashContent, DashContentAction, DashContenTitle, DashContentTable, TableTd, TableTdMain, TableThead, TableTr } from "@/lib/ui/components/local/Dashboard/DashCrudContent";
import LessenTimingForm from "@/lib/ui/forms/TimingForms/LessenGroupTimingForm";
import TeacherValidClasses from "@/lib/ui/forms/TimingForms/TeacherValidClasses";
import { useState } from "react";

export default function Index({ data, user }: { data: TeacherTimingResponse, user: any }) {
    const [timingDate] = useState<TeacherTimingResponse>(data);
    return (
        <DashContent>
            <DashContenTitle>
                Timing  teacher : {user?.user.key.keyable.name} - {user?.user.key.keyable.last}
            </DashContenTitle>
            <DashContentAction>
                <TeacherValidClasses  />
            </DashContentAction>
            <div className="flex flex-col gap-4">
                {
                    timingDate.lessons.mon && (
                        <DashContentTable >
                            <TableThead list={["Day", ...timingDate.lessons.mon.lessens.map((lesson) => lesson.start_time + " -> " + lesson.end_time)]} />
                            <tbody>
                                <TableTr >
                                    <TableTdMain value={"monday"} />
                                    {timingDate.lessons.mon.lessens.map((session) => (
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
                    )
                }
                {
                    timingDate.lessons.tues && (
                        <DashContentTable >
                            <TableThead list={["Day", ...timingDate.lessons.tues.lessens.map((lesson) => lesson.start_time + " -> " + lesson.end_time)]} />
                            <tbody>
                                <TableTr >
                                    <TableTdMain value={"tuesday"} />
                                    {timingDate.lessons.tues.lessens.map((session) => (
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
                    )}


                {
                    timingDate.lessons.wed && (
                        <DashContentTable >
                            <TableThead list={["Day", ...timingDate.lessons.wed.lessens.map((lesson) => lesson.start_time + " -> " + lesson.end_time)]} />
                            <tbody>
                                <TableTr >
                                    <TableTdMain value={"wednesday"} />
                                    {timingDate.lessons.wed.lessens.map((session) => (
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
                    )
                }

                {
                    timingDate.lessons.thu && (
                        <DashContentTable >
                            <TableThead list={["Day", ...timingDate.lessons.thu.lessens.map((lesson) => lesson.start_time + " -> " + lesson.end_time)]} />
                            <tbody>
                                <TableTr >
                                    <TableTdMain value={"thursday"} />
                                    {timingDate.lessons.thu.lessens.map((session) => (
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
                    )
                }

                {
                    timingDate.lessons.fri && (
                        <DashContentTable >
                            <TableThead list={["Day", ...timingDate.lessons.fri.lessens.map((lesson) => lesson.start_time + " -> " + lesson.end_time)]} />
                            <tbody>
                                <TableTr >
                                    <TableTdMain value={"friday"} />
                                    {timingDate.lessons.fri.lessens.map((session) => (
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
                    )
                }

                {
                    timingDate.lessons.sat && (
                        <DashContentTable >
                            <TableThead list={["Day", ...timingDate.lessons.sat.lessens.map((lesson) => lesson.start_time + " -> " + lesson.end_time)]} />
                            <tbody>
                                <TableTr >
                                    <TableTdMain value={"saturday"} />
                                    {timingDate.lessons.sat.lessens.map((session) => (
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
                    )
                }

                {
                    timingDate.lessons.sun && (
                        <DashContentTable >
                            <TableThead list={["Day", ...timingDate.lessons.sun.lessens.map((lesson) => lesson.start_time + " -> " + lesson.end_time)]} />
                            <tbody>
                                <TableTr >
                                    <TableTdMain value={"sunday"} />
                                    {timingDate.lessons.sun.lessens.map((session) => (
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
                    )
                }
            </div>
        </DashContent>
    )
}
