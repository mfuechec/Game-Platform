import * as React from "react";

export default function SideBar({openSideBar}) {

    if (openSideBar) {
        return (
            <div id='sidebar'>Hi</div>
        )
    } else {
        return (
            <></>
        )
    }
}
