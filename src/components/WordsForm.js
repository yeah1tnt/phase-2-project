import React,{useState} from "react";

function WordsForm({onAddWord}){
    const [words,setWords] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:4000/words",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({word: words})
        })
        .then(function (r) {
            return r.json();
        })
        .then(function (newWord){
            return onAddWord(newWord);
        })
        //Reset the input form
        setWords("");
    }
    function onAddWord(){
        //This is to remove the Uncaught runtime Errors that said onAddWord isn't a function 
    }

    return (
        <form className="words" onSubmit={handleSubmit}>
            <label>Word: 
                <input 
                    type="text" 
                    value={words} 
                    onChange={(e)=> setWords(e.target.value)}>
                </input>
            </label>
            <button type="submit">Add Word</button>
        </form>
    )
}

export default WordsForm;