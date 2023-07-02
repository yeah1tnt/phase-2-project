import React, { useState, useEffect } from "react";
const apiURL = process.env.REACT_APP_BACKEND_API_URL
function WordsForm() {
    const [words, setWords] = useState("");
    const [existingWords, setExistingWords] = useState([]);
    const [duplicateError, setDuplicateError] = useState(false);
    const [success,setSuccess] = useState(false);
    const [empty,setEmpty] = useState(false);

    useEffect(() => {
        fetchExistingWords();
    }, []);

    const fetchExistingWords = () => {
        fetch(`${apiURL}/words`)
            .then((r) => r.json())
            .then((data) => {
                setExistingWords(data.map((wordObj) => wordObj.word.toLowerCase()));
            })
        };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the word already exists in the database
        if (existingWords.includes(words.toLowerCase())) {
            setDuplicateError(true); //Set duplicate error
            setSuccess(false); //Clear success
            setEmpty(false); //Clear empty
            setWords(""); //Clear input
            return;
        }
        if(words === ""){
            setEmpty(true); //Set empty
            setSuccess(false); //Clear success
            setDuplicateError(false); // Clear duplicate error
            return;
        }

        fetch(`${apiURL}/words`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ word: words }),
        })
        .then((response) => response.json())
        .then(() => {
            setWords(""); // Clear input
            setSuccess(true); //Set success
            setDuplicateError(false); // Clear duplicate error
            setEmpty(false); //Clear empty
            fetchExistingWords(); // Fetch updated list of words
            
            //Remove message after 3000ms
            setTimeout(()=>{
                setSuccess(false);
            }, 3000);
        })
    };

    const handleNewWord = (e) => {
        setWords(e.target.value);
        setDuplicateError(false); // Clear duplicate error when typing
        setEmpty(false); //Clear empty
    };

    return (
        <form className="words" onSubmit={handleSubmit}>
            <label>
                Word:
                <input type="text" value={words} onChange={handleNewWord} />
            </label>
            <button type="submit">Add Word</button>
            {duplicateError && <p style={{ color: "red"}}>Word already exists!</p>}
            {empty && <p style={{ color: "red"}}>Enter a word before submit!</p>}
            {success && <p style={{color: "green"}}>Word added!</p>}
        </form>
    );
}

export default WordsForm;
