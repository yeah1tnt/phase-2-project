import React, {useState, useEffect} from "react";

function WordsList(){
    const [words, setWords] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/words")
        .then((r)=>r.json())
        .then((data)=>{
            setWords(data);
        })
    },[])
    
    const deleteWord = (id) => {

        fetch(`http://localhost:4000/words/${id}`,{
            method: "DELETE",
        })
        .then((r)=>r.json())
        .then(()=>{
            setWords((data)=>data.filter((w)=> w.id !== id))
        })
    }


    const listWords = words.map((word) => (
        <li key={word.id}>
            {word.word}
            <button onClick={()=>deleteWord(word.id)}>Delete</button>
        </li>
    ))


    return (
        <div>
        <ul>{listWords}</ul>
        </div>
    )
}


export default WordsList