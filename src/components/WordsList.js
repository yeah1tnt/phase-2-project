import React, {useState, useEffect} from "react";

function WordsList(){
    const [words, setWords] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/words")
        .then((r)=>r.json())
        .then((data)=>{
            setWords(data.map((wordObj)=>wordObj.word));
        })
    },[])

    const listWords = words.map((word) => (
        <li>{word}</li>
    ))


    return (
        <div>
        <h1>Word Lists in the database</h1>

        <ul>{listWords}</ul>
        </div>
    )
}


export default WordsList