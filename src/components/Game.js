import React from "react";
import WordsRandom from "./WordsRandom";
import WordsGuess from "./WordsGuess.js";

function GamePage(){
    return(
        <div>
            <WordsRandom></WordsRandom>
            <br></br>
            <WordsGuess></WordsGuess>
        </div>
    )
}

export default GamePage