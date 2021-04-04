import React, { useState } from 'react'

const TrueFalseQuestion = ({ question }) => {
    const [answer, setAnswer] = useState(null)
    const [isCorrect, setCorrect] = useState(undefined)
    function handleClick() {
        if (answer && answer === question.correct) {
            // alert("true")
            setCorrect(true)
        } else {
            // alert("false")
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
                                setAnswer('true')
                                setCorrect(undefined)
                            }}
                            name={question._id}
                            key="true"
                        />
                        True
                    </label>
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
                                setAnswer('false')
                                setCorrect(undefined)
                            }}
                            name={question._id}
                            key="false"
                        />
                        False
                    </label>
                </div>
            </div>
            <h6>Your Answer: {answer}</h6>
            <button
                type="button"
                className="btn btn-success"
                onClick={() => handleClick()}
            >
                Grade
            </button>
            <br />
            <br />
        </div>
    )
}

export default TrueFalseQuestion
