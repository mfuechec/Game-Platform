import * as React from "react";
import TopBar from './TopBar/TopBar';
import GamesMenuButton from './GamesMenuButton/GamesMenuButton';
import SideBar from './SideBar/SideBar';
import GamePortal from './GamePortal/GamePortal';

export default function App() {

  let [openSideBar, setOpenSideBar] = React.useState(false);

  function handleClick() {
    setOpenSideBar(!openSideBar);
  }

  return (
    <>
      <div className='row'>
        <GamesMenuButton handleClick={handleClick} openSideBar={openSideBar} />
        <TopBar/>
      </div>
      <div className='row'>
        <SideBar openSideBar={openSideBar}/>
        <GamePortal />
      </div>
    </>
  )
}
