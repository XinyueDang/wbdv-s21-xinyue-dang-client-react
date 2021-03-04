import React from 'react'

const initialState = {
    topics:[
        {_id: 123, title: "Topic 123"},
        {_id: 234, title: "Topic 234"},
        {_id: 345, title: "Topic 345"}
    ]
}

const topicReducer = (state=initialState, action) => {
    switch(action.type){
        case "CREATE_TOPIC":
            const newState = {
                topics: [
                    ...state.topics,
                    {
                        title:"new topic",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "FIND_TOPICS_FOR_LESSON":
        case "FIND_TOPIC":
        case "UPDATE_TOPIC":
            const newStateU = {
                topics: state.topics.map(t => {
                    if(t._id === action.topicToUpdate._id) {
                        return action.topicToUpdate
                    } else {
                        return t
                    }
                })
            }
            return newStateU
        case "DELETE_TOPIC":
            const newStateD={
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) {
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

export default topicReducer