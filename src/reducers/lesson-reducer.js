import React from 'react'

const initialState = {
    lessons:[
        {_id: 123, title: "Lesson 123"},
        {_id: 234, title: "Lesson 234"},
        {_id: 345, title: "Lesson 345"}
    ]
}

const lessonReducer = (state=initialState, action) => {
    switch(action.type){
        case "CEATE_LESSON":
        case "FIND_LESSONS_FOR_COURSE":
        case "FIND_LESSON":
        case "UPDATE_LESSON":
        case "DELETE_LESSON":
        default:
            return state
    }
}

export default lessonReducer