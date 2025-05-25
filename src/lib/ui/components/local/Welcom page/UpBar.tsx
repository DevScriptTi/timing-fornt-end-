import { getLocale, getTranslations } from "next-intl/server";
import UpBar from "../../global/Navigations/NavBar/NavBar";
import NavBarGroup from "../../global/Navigations/NavBar/NavBarGroupd";
import NavBarItem from "../../global/Navigations/NavBar/NavBarItem";
import { isAuth } from "@/lib/server/tools/auth";
import Logout from "./Logout";
import Image from "next/image";
import Mode from "../Mode";

export default async function UpBarGuest() {
    const auth = await isAuth()
    const t = await getTranslations()
    const locale = await getLocale()
    // console.log(locale)
    return (
        <UpBar isClient>
            <NavBarGroup>
                {
                    !auth ? (
                        <>
                            <NavBarItem link={`/${locale}/register`}>
                                {t('HomePage.UpBar.register')}
                            </NavBarItem>
                        </>
                    ) : (
                        <>
                            <NavBarItem link={`/${locale}/dashboard`}>
                                {t('HomePage.UpBar.dashboard')}
                            </NavBarItem>
                            <Logout />
                        </>

                    )
                }
            </NavBarGroup>
            <NavBarGroup grow>
                <NavBarItem link={`/${locale}/`}>
                    {t('HomePage.UpBar.home')}
                </NavBarItem>
            </NavBarGroup>
            <Mode />
            <NavBarGroup>
                <NavBarItem link={`/${locale}/login`}>
                    <Image src="/Logo.png" alt="logo" width={32} height={32} />
                </NavBarItem>
            </NavBarGroup>
        </UpBar>
    )
} 
