import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswer] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso!'
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswer ([newAnswer,   ...answers])
    setNewAnswer ('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswer ([newAnswer,   ...answers])
      setNewAnswer ('')
    }
  }

  return (
    <main className="status">
          <Header title="Tweet" />
         
          <Tweet content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ad consequatur blanditiis, quis magni quo id consectetur sunt fuga placeat optio labore nihil sit illo fugiat autem, dolores cumque distinctio."/>

          <Separator />

          <form onSubmit={createNewAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/amd-rafa.png" alt="Amanda Beltrão" />
              <textarea 
                id="tweet"
                placeholder="Tweet your answer"
                value={newAnswer} 
                onKeyDown={handleHotkeySubmit}
                onChange={(event) => {
                setNewAnswer(event.target.value)
                }}
               />              
            </label>

            <button type="submit">
              <PaperPlaneRight />
              <span>Answer</span>
              </button>
          </form>

          {answers.map(answer => {
            return <Tweet key={answer} content={answer} />
          })}
          
        </main>   
  )
}