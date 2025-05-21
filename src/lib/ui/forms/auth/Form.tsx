export default function Form({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <div
            className="flex flex-col items-start gap-6 w-full grow max-h-[calc(100vh_-_4rem)] py-4 overflow-y-auto "
        >
           
            {children}
        </div>
    )

}

export function FormSection({ children, action, onSubmit }: { children: React.ReactNode, action?: string, onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void }) {
    return (
        <form action={action} onSubmit={onSubmit} className="flex flex-col gap-4  w-[25rem] p-6 ">
            {children}
        </form>
    )
}

