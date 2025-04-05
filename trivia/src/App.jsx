import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestionCard from './components/QuestionCard'

function App() {
  const [score, setScore] =useState(0)
  const stats = (isCorrect) =>{
    if(isCorrect){
      setScore(prev => prev + 1);
    }else{
      setScore(prev => (prev > 0 ? prev - 1 : 0));
    }
  }
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
    <h1>Let's Play Some Trivia</h1>
    <h2>Score: {(score*2)}%</h2>
    {questionData.map((question, idx) =>  (
      <div style={{marginBottom:"10px"}}key={idx}>
        <QuestionCard onAnswer={stats} question={question.question} correct_answer={question.correct_answer} incorrect_answers={question.incorrect_answers}/>
      </div>
    ))}
      
    </>
  )
}

export default App
