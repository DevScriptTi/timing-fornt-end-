import { getLocale, getTranslations } from "next-intl/server";
import NavBarGroup from "../../global/Navigations/NavBar/NavBarGroupd";
import NavBarItem from "../../global/Navigations/NavBar/NavBarItem";
import UpBar from "../../global/Navigations/NavBar/NavBar";
import Mode from "../Mode";
import Request from "./Request";

export default async function UpBarDash() {
    const t = await getTranslations()
    const locale = await getLocale()
    return (
        <UpBar>
            <NavBarGroup>
                <NavBarItem link={`/${locale}/`}>{t('Dashboard.UpBar.Leave')}</NavBarItem>
                <NavBarItem link={`/${locale}/dashboard`}>{t('Dashboard.UpBar.Home')}</NavBarItem>
                <div
                    className="flex gap-2 h-full items-center"
                >
                    <Mode />
                    <Request />
                </div>
            </NavBarGroup>
        </UpBar>
    )
}