import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuestionService from '../../services/question-service'
import Question from './questions/question'
import QuizService from '../../services/quiz-service'

const Quiz = () => {
    const { quizId } = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        QuestionService.findQuestionsForQuiz(quizId).then((questions) => {
            setQuestions(questions)
        })
    }, [])
    const handleClick = () => {
            QuizService.submitQuiz(quizId, questions).then((res) => {
        })
    }
    return (
        <>
            <div className="list-group">
                {questions.map((q) => (
                    <div className="list-group" key={q._id}>
                        <Question type={q.type} list={q} />
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="btn btn-success"
                onClick={handleClick}
            >
                Submit
            </button>
        </>
    )
}

export default Quiz
