import React, { useState } from 'react'

const MultipleChoiceQuestion = ({ question }) => {
    const [answer, setAnswer] = useState(null)
    const [isCorrect, setCorrect] = useState(undefined)
    function handleClick(){
        if (answer && answer === question.correct) {
            setCorrect(true)
        } else {
            setCorrect(false)
        }
    }
    return (
        <div>
            <h4>
                {question.question}
                {answer === question.correct && 
                isCorrect !== undefined && (
                    <i className="fas fa-check"></i>
                )}
                {answer !== question.correct && 
                isCorrect !== undefined && (
                    <i className="fas fa-times"></i>
                )}
            </h4>
            <div className="list-group">
                {question.choices.map((choice) => {
                    return (
                        <div className={`list-group-item ${
                            isCorrect === undefined
                                ? ''
                                : (isCorrect && answer === choice) ||
                                  (!isCorrect && question.correct === choice)
                                ? 'list-group-item-success'
                                : ''
                        }
                        ${
                            isCorrect === undefined
                                ? ''
                                : !isCorrect && answer === choice
                                ? 'list-group-item-danger'
                                : ''
                        }`}
                        
                        key={choice}>
                            <label>
                                <input
                                    type="radio"
                                    onClick={() => {setAnswer(choice); setCorrect(undefined)}}
                                    name={question._id}
                                />
                                {choice}
                            </label>
                        </div>
                    )
                })}
            </div>
            <h6>Your Answer: {answer}</h6>
            <button type="button" className="btn btn-success" onClick={() => handleClick()}>
                Grade
            </button>
            <br/>
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion
