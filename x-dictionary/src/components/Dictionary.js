import React, { useState } from "react";
import { dictionaryData } from "./Data";
const Dictionary = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmitBtn = () => {
    let matchedWord = [];
    if (input === undefined) {
      setResponse("");
    } else {
      matchedWord = dictionaryData.find(
        (item) => item.word.toLowerCase() === input.toLowerCase()
      );
    }
    console.log("matched", matchedWord);
    if (!matchedWord) {
      setResponse("Word not found in the dictionary.");
    } else {
      setResponse(matchedWord.meaning);
      setInput("");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Search for a word"
        required
      />
      <button onClick={handleSubmitBtn}>Search</button>
      <h3>Definition: </h3>
      <p>{response}</p>
    </>
  );
};

export default Dictionary;
