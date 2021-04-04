import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import QuestionService from "../../services/question-service";
import Question from './questions/question';

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        QuestionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])
    return (
        <>
            <div className="list-group" >
                {
                    questions.map((q) => 
                            <div className="list-group" key={q._id}>
                                <Question question={q}/>
                            </div>)
                }
            </div>
        </>
    )
}

export default Quiz