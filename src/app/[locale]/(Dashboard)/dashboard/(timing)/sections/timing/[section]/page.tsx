import { DashContent, DashContenTitle, DashContentTable, TableTd, TableTdMain, TableTr } from "@/lib/ui/components/local/Dashboard/DashCrudContent";

type TimingTable = {
    id: number,
    name: string,
    days: {
        id: number,
        name: string,
        sessions: {
            id: number,
            start: string,
            end: string,
            type: "Td" | "Tp" | "Cours",
            module: {
                id: number,
                name: string
            },
            teacher: {
                id: number,
                name: string,
                last: string,
            }
        }[]
    }[]
}

export default async function TimingPage({ params }: { params: { section: number } }) {
    const { section } = await params;
    const timetable: TimingTable = {
        id: 1,
        name: "Section A",
        days: [
            {
                id: 1,
                name: "Saturday",
                sessions: [
                    {
                        id: 1,
                        start: "08:00",
                        end: "09:30",
                        type: "Cours",
                        module: { id: 1, name: "Mathematics" },
                        teacher: { id: 1, name: "Ahmed", last: "Benkhelifa" }
                    },
                    {
                        id: 2,
                        start: "09:45",
                        end: "11:15",
                        type: "Td",
                        module: { id: 2, name: "Physics" },
                        teacher: { id: 2, name: "Samir", last: "Boualem" }
                    },
                    {
                        id: 3,
                        start: "11:30",
                        end: "13:00",
                        type: "Tp",
                        module: { id: 3, name: "Chemistry" },
                        teacher: { id: 3, name: "Nadia", last: "Zerrouki" }
                    },
                    {
                        id: 4,
                        start: "13:30",
                        end: "15:00",
                        type: "Cours",
                        module: { id: 4, name: "Biology" },
                        teacher: { id: 4, name: "Yacine", last: "Belkacem" }
                    },
                    {
                        id: 5,
                        start: "15:15",
                        end: "16:45",
                        type: "Td",
                        module: { id: 5, name: "History" },
                        teacher: { id: 5, name: "Amina", last: "Meziane" }
                    }
                ]
            },
            {
                id: 2,
                name: "Sunday",
                sessions: [
                    {
                        id: 6,
                        start: "08:00",
                        end: "09:30",
                        type: "Tp",
                        module: { id: 6, name: "Geography" },
                        teacher: { id: 6, name: "Karim", last: "Boussaid" }
                    },
                    {
                        id: 7,
                        start: "09:45",
                        end: "11:15",
                        type: "Cours",
                        module: { id: 7, name: "English" },
                        teacher: { id: 7, name: "Lamia", last: "Bendjebbour" }
                    },
                    {
                        id: 8,
                        start: "11:30",
                        end: "13:00",
                        type: "Td",
                        module: { id: 8, name: "French" },
                        teacher: { id: 8, name: "Mohamed", last: "Saadi" }
                    },
                    {
                        id: 9,
                        start: "13:30",
                        end: "15:00",
                        type: "Tp",
                        module: { id: 9, name: "Computer Science" },
                        teacher: { id: 9, name: "Sofiane", last: "Kaci" }
                    },
                    {
                        id: 10,
                        start: "15:15",
                        end: "16:45",
                        type: "Cours",
                        module: { id: 10, name: "Philosophy" },
                        teacher: { id: 10, name: "Yasmine", last: "Boudjemaa" }
                    }
                ]
            },
            {
                id: 3,
                name: "Monday",
                sessions: [
                    {
                        id: 11,
                        start: "08:00",
                        end: "09:30",
                        type: "Td",
                        module: { id: 11, name: "Mathematics" },
                        teacher: { id: 11, name: "Rachid", last: "Belaid" }
                    },
                    {
                        id: 12,
                        start: "09:45",
                        end: "11:15",
                        type: "Tp",
                        module: { id: 12, name: "Physics" },
                        teacher: { id: 12, name: "Imane", last: "Benkirane" }
                    },
                    {
                        id: 13,
                        start: "11:30",
                        end: "13:00",
                        type: "Cours",
                        module: { id: 13, name: "Chemistry" },
                        teacher: { id: 13, name: "Walid", last: "Boudiaf" }
                    },
                    {
                        id: 14,
                        start: "13:30",
                        end: "15:00",
                        type: "Td",
                        module: { id: 14, name: "Biology" },
                        teacher: { id: 14, name: "Sabrina", last: "Boukhalfa" }
                    },
                    {
                        id: 15,
                        start: "15:15",
                        end: "16:45",
                        type: "Tp",
                        module: { id: 15, name: "History" },
                        teacher: { id: 15, name: "Farid", last: "Bensalem" }
                    }
                ]
            },
            {
                id: 4,
                name: "Tuesday",
                sessions: [
                    {
                        id: 16,
                        start: "08:00",
                        end: "09:30",
                        type: "Cours",
                        module: { id: 16, name: "Geography" },
                        teacher: { id: 16, name: "Hichem", last: "Bouzid" }
                    },
                    {
                        id: 17,
                        start: "09:45",
                        end: "11:15",
                        type: "Td",
                        module: { id: 17, name: "English" },
                        teacher: { id: 17, name: "Khadidja", last: "Belaoued" }
                    },
                    {
                        id: 18,
                        start: "11:30",
                        end: "13:00",
                        type: "Tp",
                        module: { id: 18, name: "French" },
                        teacher: { id: 18, name: "Nabil", last: "Bouras" }
                    },
                    {
                        id: 19,
                        start: "13:30",
                        end: "15:00",
                        type: "Cours",
                        module: { id: 19, name: "Computer Science" },
                        teacher: { id: 19, name: "Souad", last: "Bendahmane" }
                    },
                    {
                        id: 20,
                        start: "15:15",
                        end: "16:45",
                        type: "Td",
                        module: { id: 20, name: "Philosophy" },
                        teacher: { id: 20, name: "Reda", last: "Benkhaled" }
                    }
                ]
            },
            {
                id: 5,
                name: "Wednesday",
                sessions: [
                    {
                        id: 21,
                        start: "08:00",
                        end: "09:30",
                        type: "Tp",
                        module: { id: 21, name: "Mathematics" },
                        teacher: { id: 21, name: "Fatima", last: "Benslimane" }
                    },
                    {
                        id: 22,
                        start: "09:45",
                        end: "11:15",
                        type: "Cours",
                        module: { id: 22, name: "Physics" },
                        teacher: { id: 22, name: "Mourad", last: "Boudraa" }
                    },
                    {
                        id: 23,
                        start: "11:30",
                        end: "13:00",
                        type: "Td",
                        module: { id: 23, name: "Chemistry" },
                        teacher: { id: 23, name: "Salima", last: "Boukhatem" }
                    },
                    {
                        id: 24,
                        start: "13:30",
                        end: "15:00",
                        type: "Tp",
                        module: { id: 24, name: "Biology" },
                        teacher: { id: 24, name: "Abdelkader", last: "Boudjemaa" }
                    },
                    {
                        id: 25,
                        start: "15:15",
                        end: "16:45",
                        type: "Cours",
                        module: { id: 25, name: "History" },
                        teacher: { id: 25, name: "Rania", last: "Benkheira" }
                    }
                ]
            },
            {
                id: 6,
                name: "Thursday",
                sessions: [
                    {
                        id: 26,
                        start: "08:00",
                        end: "09:30",
                        type: "Td",
                        module: { id: 26, name: "Geography" },
                        teacher: { id: 26, name: "Zohra", last: "Bensalem" }
                    },
                    {
                        id: 27,
                        start: "09:45",
                        end: "11:15",
                        type: "Tp",
                        module: { id: 27, name: "English" },
                        teacher: { id: 27, name: "Youssef", last: "Benkaci" }
                    },
                    {
                        id: 28,
                        start: "11:30",
                        end: "13:00",
                        type: "Cours",
                        module: { id: 28, name: "French" },
                        teacher: { id: 28, name: "Lila", last: "Boudia" }
                    },
                    {
                        id: 29,
                        start: "13:30",
                        end: "15:00",
                        type: "Td",
                        module: { id: 29, name: "Computer Science" },
                        teacher: { id: 29, name: "Hakim", last: "Boukhalfa" }
                    },
                    {
                        id: 30,
                        start: "15:15",
                        end: "16:45",
                        type: "Tp",
                        module: { id: 30, name: "Philosophy" },
                        teacher: { id: 30, name: "Siham", last: "Benkhaled" }
                    }
                ]
            }
        ]
    };

    return (
        <DashContent>
            <DashContenTitle>
                Timing section {section}
            </DashContenTitle>
            <div className="flex flex-col gap-4">
                <DashContentTable>
                    <tbody>
                        {timetable.days.map((day) => (
                            <TableTr key={day.id}>
                                <TableTdMain value={day.name} />
                                {day.sessions.map((session) => (
                                    <TableTd key={session.id}>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-label-small text-on-surface-variant dark:text-dark-on-surface-variant">
                                                {session.start} - {session.end}
                                            </span>
                                            <div className="flex flex-col justify-center gap-2">
                                                <span className="flex gap-1 text-title-large text-on-surface dark:text-dark-on-surface">
                                                    {session.module.name}
                                                    <span className="text-primary dark:text-dark-primary font-bold">{session.type}</span>
                                                </span>
                                                <span className="text-label-large text-primary-container dark:text-dark-primary-container">{session.teacher.name} - {session.teacher.last}</span>
                                            </div>
                                        </div>
                                    </TableTd>
                                ))}
                            </TableTr>
                        ))}
                    </tbody>
                </DashContentTable>
            </div>
        </DashContent>
    );
}
