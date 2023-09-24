// import AsideBar from "../../../Customer-Panal/components/dashbord/AsideBar";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import TopNavSeller from "../../../venderFile/vender-components/same/TopNavSeller";
// import AsideSeller from "../../../venderFile/vender-components/asideSeller/AsideSeller";
// import TopNavSeller from "../../../venderFile/vender-components/same/TopNavSeller";
import AsideAdmin from "../../Components/asideAdim/AsideAdmin";
import TopNavSeller from "../../Components/same/TopNavSeller";

function DashboardRightSectionAdmin({ setshow }) {
    const [isActive, setIsActive] = useState("")
    const isLogin = window.localStorage.getItem('adminIslogin')
    const navigate = useNavigate()
    useEffect(() => {
        setshow(false)
    }, [])

    const showSidebar = () => {
        setIsActive(!isActive)
    }
    const handleAsidebar = () => {
        setIsActive("")
    }
    return (
        <>
            <div className="aiz-main-wrapper">
                <AsideAdmin isActive={isActive} />
                <div className="aiz-content-wrapper aiz-main-wrapper-2">
                    <TopNavSeller showSidebar={showSidebar} />
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )



}
export default DashboardRightSectionAdmin;