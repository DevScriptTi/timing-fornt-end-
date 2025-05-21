import { getLocale, getTranslations } from "next-intl/server";
import Navigation from "../../global/Navigations/Navigation/NavigationDemo";
import Profile from "../../global/Navigations/Navigation/Profile";
import NavItem from "../../global/Navigations/Navigation/NavItem";
import NavGroup from "../../global/Navigations/Navigation/NavGroup";
import { User2, UserCog } from "lucide-react";
import { getUser } from "@/lib/server/actions/auth/getUser";

export default async function NavBar_() {
    const t = await getTranslations()
    const locale = await getLocale()
    const user = await getUser()
    return (
        <Navigation>
            <Profile photo="/profile.jpg" role={user.user?.key?.keyable_type || 'user'} link={`${locale}\dashboard`}>{user.user?.key?.keyable?.name + " " + user.user?.key?.keyable?.last || ''}</Profile>
            <NavGroup title="Main">
                <NavItem link={`/${locale}/dashboard`} icon={<UserCog size={18} />}>
                    {t('Dashboard.NavBar.Home')}
                </NavItem>
                <NavItem link={`/${locale}/dashboard/students`} icon={<User2 size={18} />}>
                    Students
                </NavItem>
                <NavItem link={`/${locale}/dashboard/teachers`} icon={<User2 size={18} />}>
                    Teachers
                </NavItem>
            </NavGroup>
            <NavGroup title="Timing">
                <NavItem link={`/${locale}/dashboard/sections`} icon={<User2 size={18} />}>
                    Sections
                </NavItem>
                <NavItem link={`/${locale}/dashboard/groups`} icon={<User2 size={18} />}>
                    Groups
                </NavItem>
            </NavGroup>
            <NavGroup title="Core">
                <NavItem link={`/${locale}/dashboard/years`} icon={<User2 size={18} />}>
                    Years
                </NavItem>
                <NavItem link={`/${locale}/dashboard/departements`} icon={<User2 size={18} />}>
                    Departements
                </NavItem>
                <NavItem link={`/${locale}/dashboard/modules`} icon={<User2 size={18} />}>
                    Modules
                </NavItem>
            </NavGroup>

        </Navigation>
    )
}