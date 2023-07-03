import React,{useState,useEffect} from "react";
const apiURL = process.env.REACT_APP_BACKEND_API_URL
function WordsGuess() {
    const [existingWords, setExistingWords] = useState([]);
    const [word,setWord] = useState("");
    const [isInDB,setIsInDB] = useState(false);
    const [guessRight,setRightGuess] = useState(null);
    const [guessWrong,setWrongGuess] = useState(null);
    const [isVisible,setIsVisible] = useState(false);

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
    
    const wordsCheck = () => {
        const randomNumber = Math.random()*100;
        if (randomNumber < 50){
            const randomIndex = Math.floor(Math.random()*existingWords.length);
            setWord(existingWords[randomIndex]);
            setIsInDB(true); //Set DB
        }
        else{
            fetch("https://random-word-api.herokuapp.com/word")
            .then((r)=>r.json())
            .then((data=>{
                setWord(data[0]);
                setIsInDB(false); //Clear DB
            }))
        }
    }
    const handleGuess = (e) => {
        setRightGuess(e);
        setWrongGuess(!e);
        wordsCheck();
        setTimeout(()=>{
            setRightGuess(null);
            setWrongGuess(null);;
        }, 1000);
    };
    const gameStart = () => {
        setIsVisible(true);
        wordsCheck();
    }
    
    return (
        <div>
            <h1>Is the word already in the database?</h1>
            <p>{word}</p>
            {!isVisible && <button onClick={gameStart}>Start guessing</button>}
            {isVisible && <button onClick={() => handleGuess(true)}>Yes</button>}
            {isVisible && <button onClick={() => handleGuess(false)}>No</button>}

            {guessWrong === isInDB && <p style={{ color: "red"}}>Incorrect! </p>}
            {guessRight === isInDB && <p style={{ color: "green"}}>Correct! </p>}

        </div>
    );

}
export default WordsGuess