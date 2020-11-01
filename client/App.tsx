import * as React from "react";
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';

export default function App() {

  let [openSideBar, setOpenSideBar] = React.useState(false);

  return (
    <div id='app'>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <TopBar/>
    </div>
  )
}
