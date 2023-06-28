import React, { useState, useEffect } from "react";

function WordsRandom(){
    const [word,setWord] = useState([]);
    const [isVisible,setIsVisible] = useState(true);

    useEffect(()=>{
        fetchWords();
    },[])

    const fetchWords = () => {
        fetch("https://random-word-api.herokuapp.com/word")
        .then((r)=>r.json())
        .then((data=>{
            setWord(data[0]);
            setIsVisible(true); //Set button
        }))
    }
    const handleAddWord = () => {
        fetch("http://localhost:4000/words",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({word}) //Add word into the database
        })
        .then((r)=>r.json())
        .then(()=>{
            setIsVisible(false); //Clear button
        })

    }
    return (
        <div>
            <h1>Generate random words</h1>
            <p>{word}</p>
            <button onClick={fetchWords}>Generate Word</button>
            {isVisible && <button onClick={handleAddWord}>Add Word</button>}
            
        </div>
    )
}

export default WordsRandom
