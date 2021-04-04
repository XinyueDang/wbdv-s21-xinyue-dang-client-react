import React, { useState } from 'react'

const MultipleChoiceQuestion = ({ question }) => {
    const [answer, setAnswer] = useState(null)
    return (
        <div>
            <h4>
                {question.question}
                {answer === question.correct && (
                    <i className="fas fa-check"></i>
                )}
                {answer !== question.correct && (
                    <i className="fas fa-times"></i>
                )}
            </h4>
            <div className="list-group">
                {question.choices.map((choice) => {
                    return (
                        <div className="list-group-item">
                            <label>
                                <input
                                    type="radio"
                                    onClick={() => setAnswer(choice)}
                                    name={question._id}
                                />
                                {choice}
                            </label>
                        </div>
                    )
                })}
            </div>
            <h6>Your Answer: {answer}</h6>
            <button type="button" class="btn btn-success">
                Grade
            </button>
            <br/>
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion
