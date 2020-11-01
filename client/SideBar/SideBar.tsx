import * as React from "react";

export default function SideBar({openSideBar}) {

    // This component should look at the availableGames array stored in redux.
    // That array would be populated from a call to the database that brings in
    // the most up-to-date selection of games, with images and the link.

    // The component simply maps over that array and displays images and links to
    // different games. Should be scrollable, if needed.

    let availableGames = [{name: 'minesweeper', image: 'url'}, {name: 'tic-tac-toe', image: 'url'}]

    if (openSideBar) {
        return (
            <div id='sidebar'>
                <div id='sidebarContents'>
                    {availableGames.map((game) => {
                        return (
                            <>
                                <p class='gameName'>{game.name}</p>
                                {/* <img src={game.image}/> */}
                            </>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div id='sidebar'></div>
        )
    }
}
