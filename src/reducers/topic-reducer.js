import React from 'react'

const initialState = {
    topics:[]
}

const topicReducer = (state=initialState, action) => {
    switch(action.type){
        case "CREATE_TOPIC":
            const newState = {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            return newState
        case "FIND_TOPICS_FOR_LESSON":
            const newStateA = {
                ...state,
                topics: action.topics
            }
            return newStateA
        case "FIND_TOPIC":
        case "UPDATE_TOPIC":
            const newStateU = {
                topics: state.topics.map((t) => {
                    if (t._id === action.topicToUpdate._id) {
                        return action.topicToUpdate
                    } else {
                        return t
                    }
                }),
            }
            return newStateU
        case "DELETE_TOPIC":
            const newStateD={
                topics: state.lessons.filter((topic) => {
                    if (topic._id === action.topicToDelete._id) {
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

export default topicReducer