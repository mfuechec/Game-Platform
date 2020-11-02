import * as React from "react";
import TopBar from './TopBar/TopBar';
import GamesMenuButton from './GamesMenuButton/GamesMenuButton';
import SideBar from './SideBar/SideBar';
import GamePortal from './GamePortal/GamePortal';

export default function App() {

  let [openSideBar, setOpenSideBar] = React.useState(false);
  let [selectedGame, setSelectedGame] = React.useState(null);

  function handleClick() {
    setOpenSideBar(!openSideBar);
  }

  function select(game: string) {
    setSelectedGame(game);
    setOpenSideBar(false);
  }

  return (
    <>
      <div className='row'>
        <GamesMenuButton handleClick={handleClick} openSideBar={openSideBar} />
        <TopBar/>
      </div>
      <div className='row'>
        <SideBar openSideBar={openSideBar} select={select}/>
        <GamePortal selectedGame={selectedGame} />
      </div>
    </>
  )
}
