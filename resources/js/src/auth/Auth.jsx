import React from "react";
import { Outlet } from "react-router-dom";
import AuthFooter from "./footer/AuthFooter";
import DrawerAppBar from "./navbar/AuthNavbar";

const Auth = () => {
    return(
        <React.Fragment>
            <DrawerAppBar/>
                <Outlet />
            <AuthFooter/>
        </React.Fragment>
    )
}

export default Auth;