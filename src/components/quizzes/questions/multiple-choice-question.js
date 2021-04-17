import React, { useState } from 'react'

const MultipleChoiceQuestion = ({ question }) => {
    const [answer, setAnswer] = useState(question.answer)

    const [isCorrect, setCorrect] = useState(undefined)
    const [Answered, setAnswered] = useState(false)
    function handleClick(){
        if (answer && answer === question.correct) {
            setCorrect(true)
        } else {
            setCorrect(false)
        }
        setAnswered(true)
    }
    return (
        <div>
            <h4>
                {question.question}
                {answer === question.correct && 
                isCorrect !== undefined && (
                    <i className="fas fa-check" style={{color:'green'}}></i>
                )}
                {answer !== question.correct && 
                isCorrect !== undefined && (
                    <i className="fas fa-times" style={{color:'red'}}></i>
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
                                    onClick={() => {question.answer= choice; setAnswer(choice)}}
                                    name={question._id}
                                    disabled = {Answered}
                                />
                                {choice}
                            </label>
                            {isCorrect !== undefined &&
                            isCorrect && answer === choice &&
                            <>
                                <i className="fas fa-check"></i>
                            </>
                            }
                            {isCorrect !== undefined &&
                            !isCorrect && question.correct === choice &&
                            <>
                                <i className="fas fa-check"></i>
                            </>
                            }
                            {isCorrect !== undefined &&
                            !isCorrect && answer === choice &&
                            <>
                                <i className="fas fa-times"></i>
                            </>
                            }
                        </div>
                    )
                })}
            </div>
            <h6>Your Answer: {answer}</h6>
            {/* <button type="button" className="btn btn-success" onClick={() => handleClick()}>
                Grade
            </button> */}
            <br/>
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion
