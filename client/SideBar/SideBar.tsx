import * as React from "react";

export default function SideBar({openSideBar, select}: {openSideBar: Boolean, select: Function}) {

    // This component should look at the availableGames array stored in redux.
    // That array would be populated from a call to the database that brings in
    // the most up-to-date selection of games, with images and the link.

    // The component simply maps over that array and displays images and links to
    // different games. Should be scrollable, if needed.

    let availableGames = [{name: 'minesweeper', image: 'https://mfuechec-portfolio.s3.us-east-2.amazonaws.com/Minesweeper-Thumbnail.png', link: 'https://marks-minesweeper.s3.us-east-2.amazonaws.com/index.html'}]

    if (openSideBar) {
        return (
            <div id='sidebar'>
                <div id='sidebarContents'>
                    {availableGames.map((game) => {
                        return (
                            <div onClick={()=>(select(game.link))}>
                                <p className='gameName'>{game.name}</p>
                                <img src={game.image} className='gameImage'/>
                            </div>
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
