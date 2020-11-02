import * as React from "react";

export default function GamePortal({selectedGame}: {selectedGame: string}) {

    if (selectedGame) {
        return (
            <div id='gamePortal'>
                <iframe src={selectedGame} scrolling='no' id='iframe'></iframe>
            </div>
        )
    } else {
        return (
            <div id='gamePortal'>
                <p id='noSelection'>No game selected</p>
            </div>
        )
    }
}
