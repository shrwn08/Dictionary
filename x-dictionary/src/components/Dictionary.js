import React, { useState } from "react";
import { dictionaryData } from "./Data";
const Dictionary = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    // console.log(event.target.value);
    let matchedWord =[]
    if(input === undefined){
        setResponse('')
    }else{

     matchedWord= dictionaryData.find((item)=>item.word.toLowerCase() === input.toLowerCase())
    }
    console.log('matched',matchedWord)
    if(!matchedWord){
        setResponse('')
    }else{
        setResponse(matchedWord.meaning)
        setInput('')
    }
  };

 
  return (
    <div>
      <form onSubmit={handleSubmitBtn}>
        <h1>Dictionary App</h1>
        <input
          value={input}
          onChange={handleSubmitBtn}
          placeholder="Search for a word"
          required
        />
        <button type="submit">Search</button>
        <h3>Dictionary: </h3>
        <p>{response}</p>
      </form>
    </div>
  );
};

export default Dictionary;
