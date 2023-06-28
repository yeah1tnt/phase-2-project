import React from "react";
import WordsForm from "./WordsForm";

function HomePage(){
    return (
        <div>
            <h3>Instruction:</h3>
            <p><b>Home:</b> Enter a new word to add it into the data base
                if the word is already the database, the word will not be added<br></br>
                <b>Game:</b> Generate a random word from a public API and
                have the option to save it to db.json<br></br>
                <b>List:</b> Show a list of words in db.json and give option to delete the word
            </p>
            <br></br>
            <WordsForm></WordsForm>
        </div>
    )
}

export default HomePage;