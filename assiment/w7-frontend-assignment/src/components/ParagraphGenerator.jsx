import { Button } from "./Button"
import { InputBox } from "./InputBox"
import React, { useState}   from 'react'

export const ParagraphGenerator = () => {

    const[words, setWords] = useState('');
    const[paragraph, setParagraph] = useState('');


    function wordGenerator(wordArray) {
        const wordNumber = Math.floor(Math.random() * 20) + 100;
        const result = [];

        for(let i=0; i<wordNumber; i++){
            const randIndex = Math.floor(Math.random() * wordArray.length);
            result.push(wordArray[randIndex]);
        }
        return result.join(" ");
    };

    const handelClick = () => {
        const wordArray = words.trim().split(/\s+/);
        setParagraph(wordGenerator(wordArray));
    };

    return  <div className="mt-20">
                <div className="flex flex-col items-center font-extrabold text-4xl">    
                    Para Generator
                </div>
                <div className="flex flex-row justify-center pl-20 pr-20 mx-20 my-10">
                    <InputBox
                    value={words}
                    placeholder={"Enter Number Of Words..."}
                    onChange={(e) => setWords(e.target.value)}></InputBox>

                    <Button label="Generate" onClick={handelClick}></Button>
                </div>
                <div className="flex justify-center text-md text-xl mx-20">
                    {paragraph}
                </div>
        </div>               
}
