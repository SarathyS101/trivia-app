import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {useState} from "react"
import he from 'he';
export default function QuestionCard({question, correct_answer, incorrect_answers, onAnswer}){
    const [answers, setAnswers] = useState([{text: correct_answer, isCorrect: true},...incorrect_answers.map((ans)=>({text:ans, isCorrect: false}))].sort(()=>(Math.random()-0.5)))
    const [isRight, changeBackground] = useState(false)
    function check(x){
        x?changeBackground(true):changeBackground(false)
        onAnswer(x)
    }
    return(
        <>
            <Card sx={isRight?{backgroundColor: 'green'}:{backgroundColor: 'red'}}> 
                <CardContent>
                    <h2>
                        Question: {he.decode(question)}
                    </h2>
                </CardContent>
                <CardActions >
                    <ul>
                        <li>  <Button sx={{color:'black'}} onClick={()=>check(answers[0].isCorrect)}>{he.decode(answers[0].text)}</Button></li>
                        <li> <Button sx={{color:'black'}}onClick={()=>check(answers[1].isCorrect)}>{he.decode(answers[1].text)}</Button></li>
                        <li> <Button sx={{color:'black'}} onClick={()=>check(answers[2].isCorrect)}>{he.decode(answers[2].text)}</Button></li>
                        <li> <Button sx={{color:'black'}} onClick={()=>check(answers[3].isCorrect)}>{he.decode(answers[3].text)}</Button></li>
                    </ul>
                </CardActions>
            </Card>
        </>
    )
}