import * as React from "react";

export default function SideBar({openSideBar, setOpenSideBar}) {

  if (openSideBar) {
    return (
      <div id='opensidebar'>
        Open
      </div>
    )
  }
    return (
      <div id='closedsidebar' onClick={()=>setOpenSideBar(true)}>
        Closed
      </div>
    )
}
