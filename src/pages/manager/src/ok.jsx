import { useState } from 'react'
import {Configuration , OpenAIApi } from 'openai'
import './App.css'
import Area from './area';

function Ok() {
  const [input, setInput] = useState({});
  const [result, setResult] = useState('');
  
  const congif = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });



  const openai = new OpenAIApi(congif);
    
  const magic = async () => {
    
    let object = { model: "text-davinci-003",
    prompt: input,
    temperature: 0,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
    };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  }

  return (
    <div>
    <div className="App">
         <Area magic={magic} setInput={setInput} result={result}/>
    </div>
    </div>
  )
}

export default Ok
