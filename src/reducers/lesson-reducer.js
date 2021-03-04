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
            const newStateU = {
                lessons: state.lessons.map(l => {
                    if(l._id === action.lessonToUpdate._id) {
                        return action.lessonToUpdate
                    } else {
                        return l
                    }
                })
            }
            return newStateU
        case "DELETE_LESSON":
            const newStateD={
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id === action.lessonToDelete._id) {
                        return false
                    } else{
                        return true
                    }
                })
            }
            return newStateD
        default:
            return state
    }
}

export default lessonReducer