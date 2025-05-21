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
        <div className="w1/2 flex flex-col gap-4">
            <h3 className="text-display-medium ">Welcome to our platform</h3>
            <h1 className="text-display-large text-primary dark:text-dark-primary">Taiming Univ</h1>
            <p className="text-body-large text-on-background dark:text-dark-on-background">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <LoginForm/>
        </div>
    )
}

function LandingPicture({ src }: { src: string }) {
    return (
        <div className="w-1/2">
            <img src={src} alt="landing" className="w-full h-full object-cover" />
        </div>
    )
}