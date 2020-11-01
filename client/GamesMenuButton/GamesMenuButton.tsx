import * as React from "react";
import Button from '@material-ui/core/Button';
import { SportsRugbySharp } from "../../node_modules/@material-ui/icons/index";

export default function GamesMenuButton({handleClick, openSideBar}) {

  return (
    <Button id='gamesMenuButton' onClick={handleClick} style={ openSideBar ? { backgroundColor: 'rgba(0,0,0,.5)'} : {backgroundColor : '#5269a3' } } >
      Games
    </Button>
  )
}
