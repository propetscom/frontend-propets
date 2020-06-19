import React from "react";
import Menu from "./Menu";
import MenuUser from "./MenuUser";

function Sidebar (){

        return(
            <div className="sidebar">
                <Menu/>
                <MenuUser/>
            </div>

        )
}
export default Sidebar