import React from 'react'

const initialState = {
    lessons: [],
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_LESSON':
            const newState = {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
            return newState
        case 'FIND_LESSONS_FOR_MODULE':
            const newStateA = {
                ...state,
                lessons: action.lessons
            }
            return newStateA
        case 'FIND_LESSON':
        case 'UPDATE_LESSON':
            const newStateU = {
                lessons: state.lessons.map((l) => {
                    if (l._id === action.lessonToUpdate._id) {
                        return action.lessonToUpdate
                    } else {
                        return l
                    }
                }),
            }
            return newStateU
        case 'DELETE_LESSON':
            const newStateD = {
                lessons: state.lessons.filter((lesson) => {
                    if (lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                }),
            }
            return newStateD
        default:
            return state
    }
}

export default lessonReducer
