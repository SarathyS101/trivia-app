import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestionCard from './components/QuestionCard'

function App() {
  const [questionData, setQuestions] = useState([])
  const fetchQuestions = async() =>{  
    try{
      const data = await fetch("https://opentdb.com/api.php?amount=50&type=multiple")
      const json_data = await data.json()
      if(json_data.response_code===0){
        setQuestions(json_data["results"])
      }
    }catch (error){
       console.log("Error: ", error)
    }
  }
  useEffect(()=>{
    fetchQuestions()
  },[])


  return (
    <>
    {questionData.map((question, idx) =>  (
      <div key={idx}>
        {/* <h3>{question.question}</h3> */}
        <QuestionCard question={question.question} correct_answer={question.correct_answer} incorrect_answers={question.incorrect_answers}/>
      </div>
    ))}
      
    </>
  )
}

export default App
