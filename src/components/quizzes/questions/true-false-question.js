import React, { useState } from 'react'

const TrueFalseQuestion = ({ question }) => {
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
                <div className="list-group-item">
                    <label>
                        <input
                            type="radio"
                            onClick={() => setAnswer("true")}
                            name={question._id}
                        />
                        True
                    </label>
                </div>
                <div className="list-group-item">
                    <label>
                        <input
                            type="radio"
                            onClick={() => setAnswer("false")}
                            name={question._id}
                        />
                        False
                    </label>
                </div>
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

export default TrueFalseQuestion
