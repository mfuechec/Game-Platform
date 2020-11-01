import * as React from "react";
import TopBar from './TopBar/TopBar';
import GamesMenuButton from './GamesMenuButton/GamesMenuButton';
import SideBar from './SideBar/SideBar';

export default function App() {

  let [openSideBar, setOpenSideBar] = React.useState(false);

  function handleClick() {
    setOpenSideBar(!openSideBar);
  }

  return (
    <>
      <div id='topContainer'>
        <GamesMenuButton handleClick={handleClick} openSideBar={openSideBar} />
        <TopBar/>
      </div>
      <SideBar openSideBar={openSideBar}/>
    </>
  )
}
