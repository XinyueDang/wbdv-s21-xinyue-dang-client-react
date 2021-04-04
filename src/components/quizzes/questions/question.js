import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({list, type}) => {
    return(
        <div>
            {
                type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={list}/>
            }
            {
                type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={list}/>
            }
        </div>
    )
}

export default Question;