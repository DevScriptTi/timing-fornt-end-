'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarItem({ children, link = "#" }: { children: React.ReactNode, link: string }) {
    const path = usePathname()
    const isActive = path == link
    return <li className="block h-full">
        <Link href={link} className={`h-full px-2 text-title-medium flex items-center justify-center text-on-surface dark:text-dark-on-surface  hover:text-on-surface-variant dark:hover:text-dark-on-surface-variant ${isActive?"text-secondary dark:text-dark-secondary font-semibold":""}`}>
            {children}
        </Link>
    </li>
}