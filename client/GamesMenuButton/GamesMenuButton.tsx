import * as React from "react";
import Button from '@material-ui/core/Button';

export default function GamesMenuButton({handleClick, openSideBar}: {handleClick: Function, openSideBar: Boolean}) {

  return (
    <Button id='gamesMenuButton' onClick={handleClick} style={ openSideBar ? { backgroundColor: 'rgba(0,0,0,.5)'} : {backgroundColor : '#5269a3' } } >
      Games
    </Button>
  )
}
