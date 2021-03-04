import React from 'react'
import CourseEditor from '../components/course-editor/course-editor'

const initialState = {
    modules:[
        {_id: 123, title: "Module 123"},
        {_id: 234, title: "Module 234"},
        {_id: 345, title: "Module 345"}
    ]
}

const moduleReducer = (state=initialState, action) => {
    switch(action.type){
        case "CREATE_MODULE":
            const newState = {
                modules: [
                    ...state.modules,
                    {
                        title:"new module",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "FIND_MODULES_FOR_COURSE":
        case "FIND_MODULE":
        case "UPDATE_MODULE":
        case "DELETE_MODULE":
            const newStateD={
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id) {
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

export default moduleReducer