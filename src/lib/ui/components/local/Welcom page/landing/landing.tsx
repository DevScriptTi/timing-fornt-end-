import LoginForm from "@/lib/ui/forms/auth/login/LoginForm"

export function Landing() {
    return (
        <div className="flex items-center gap-4 px-6">
            <LandingCore />
            <LandingPicture src="landing.png" />
        </div>
    )
}

function LandingCore() {
    return (
        <div className="w-1/2 flex flex-col gap-4">
            <img src="/Logo.png" alt="landing" className="size-64 object-cover" />
            <h1 className="text-display-large text-primary dark:text-dark-primary">Timing Univ</h1>
            <p className="text-body-large text-on-background dark:text-dark-on-background">
                Welcome to Timing Univ - your comprehensive solution for university scheduling. We streamline the complex process of managing academic timetables, making it easier for administrators, professors, and students to coordinate class schedules, room assignments, and academic resources efficiently.
            </p>
            <LoginForm/>
        </div>
    )
}

function LandingPicture({ src }: { src: string }) {
    return (
        <div className="w-1/2 flex justify-center items-center">
            <img src={src} alt="landing" className="w-3/4  object-cover" />
        </div>
    )
}