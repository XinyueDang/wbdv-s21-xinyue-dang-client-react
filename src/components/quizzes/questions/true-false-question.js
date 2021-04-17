import React, { useState } from 'react'

const TrueFalseQuestion = ({ question }) => {
    const [answer, setAnswer] = useState(null)
    const [isCorrect, setCorrect] = useState(undefined)
    const [Answered, setAnswered] = useState(false)
    function handleClick() {
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
                {answer === question.correct && isCorrect !== undefined && (
                    <i className="fas fa-check" style={{color:'green'}}></i>
                )}
                {answer !== question.correct && isCorrect !== undefined && (
                    <i className="fas fa-times" style={{color:'red'}}></i>
                )}
            </h4>
            <div className="list-group">
                <div
                    className={`list-group-item ${
                        isCorrect === undefined
                            ? ''
                            : (isCorrect && answer === 'true') ||
                              (!isCorrect && question.correct === 'true')
                            ? 'list-group-item-success'
                            : ''
                    }
                    ${
                        isCorrect === undefined
                            ? ''
                            : !isCorrect && answer === 'true'
                            ? 'list-group-item-danger'
                            : ''
                    }`}
                >
                    <label>
                        <input
                            type="radio"
                            onClick={() => {
                                question.answer ="true"
                                setAnswer("true")
                            }}
                            name={question._id}
                            key="true"
                            disabled = {Answered}
                        />
                        True
                    </label>
                    {isCorrect !== undefined && isCorrect && answer === 'true' && (
                        <>
                            <i className="fas fa-check"></i>
                        </>
                    )}
                    {isCorrect !== undefined &&
                        !isCorrect &&
                        question.correct === 'true' && (
                            <>
                                <i className="fas fa-check"></i>
                            </>
                        )}
                    {isCorrect !== undefined &&
                        !isCorrect &&
                        answer === 'true' && (
                            <>
                                <i className="fas fa-times"></i>
                            </>
                        )}
                </div>
                <div
                    className={`list-group-item ${
                        isCorrect === undefined
                            ? ''
                            : (isCorrect && answer === 'false') ||
                              (!isCorrect && question.correct === 'false')
                            ? 'list-group-item-success'
                            : ''
                    }
                    ${
                        isCorrect === undefined
                            ? ''
                            : !isCorrect && answer === 'false'
                            ? 'list-group-item-danger'
                            : ''
                    }`}
                >
                    <label>
                        <input
                            type="radio"
                            onClick={() => {
                                question.answer ="false"
                                setAnswer("false")
                            }}
                            name={question._id}
                            key="false"
                            disabled = {Answered}
                        />
                        False
                    </label>
                    {isCorrect !== undefined &&
                        isCorrect &&
                        answer === 'false' && (
                            <>
                                <i className="fas fa-check"></i>
                            </>
                        )}
                    {isCorrect !== undefined &&
                        !isCorrect &&
                        question.correct === 'false' && (
                            <>
                                <i className="fas fa-check"></i>
                            </>
                        )}
                    {isCorrect !== undefined &&
                        !isCorrect &&
                        answer === 'false' && (
                            <>
                                <i className="fas fa-times"></i>
                            </>
                        )}
                </div>
            </div>
            <h6>Your Answer: {answer}</h6>
            {/* <button
                type="button"
                className="btn btn-success"
                onClick={() => handleClick()}
            >
                Grade
            </button> */}
            <br />
            <br />
        </div>
    )
}

export default TrueFalseQuestion
