import React from 'react'
// import CourseEditor from '../components/course-editor/course-editor'

const initialState = {
    modules: [],
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_MODULE':
            const newState = {
                modules: [
                    ...state.modules,
                    action.module
                ],
            }
            return newState
        case 'FIND_MODULES_FOR_COURSE':
            const newStateA = {
                ...state,
                modules: action.modules
            }
            return newStateA

        case 'FIND_MODULE':
        case 'UPDATE_MODULE':
            const newStateU = {
                modules: state.modules.map((m) => {
                    if (m._id === action.moduleToUpdate._id) {
                        return action.moduleToUpdate
                    } else {
                        return m
                    }
                }),
            }
            return newStateU

        case 'DELETE_MODULE':
            const newStateD = {
                modules: state.modules.filter((module) => {
                    if (module._id === action.moduleToDelete._id) {
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

export default moduleReducer
