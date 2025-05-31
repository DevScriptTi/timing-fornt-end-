"use client";
import { Bell } from "lucide-react"
import Modal, { openModal } from "../../global/Modal/Modal"

export default function Request() {
    return (
        <>
            <Bell className="text-primary dark:text-dark-primary" size={24} onClick={() => openModal("request-modal")} />
            <Modal id="request-modal">
                <ul className="flex flex-col gap-4 h-[50vh] w-1/2 overflow-y-auto p-4 border rounded-lg">
                    <li className="flex flex-col gap-2 p-3 bg-surface-container dark:bg-dark-surface-container rounded-lg shadow">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">
                                Tarik - Ziani
                            </h3>
                            <span className="text-sm text-primary-container dark:text-dark-primary-container">
                                08:00:00 - 09:30:00 / TD / Tuesday
                            </span>
                        </div>

                        <div className="flex gap-2 text-sm text-on-surface-variant dark:text-dark-on-surface-variant">
                            <span className="font-medium">Class:</span>
                            <span>Class 2</span>
                        </div>

                        <div className="flex gap-2 text-sm text-on-surface-variant dark:text-dark-on-surface-variant">
                            <span className="font-medium">Department:</span>
                            <span>Computer Science</span>
                        </div>
                    </li>
                </ul>
            </Modal>
        </>
    )
}