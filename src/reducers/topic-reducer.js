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
        case "FIND_TOPICS_FOR_LESSON":
        case "FIND_TOPIC":
        case "UPDATE_TOPIC":
        case "DELETE_TOPIC":
        default:
            return state
    }
}

export default topicReducer