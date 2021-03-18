import React from 'react'

const initialState = {
    widgets: [],
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            const newState = {
                ...state,
                widgets: [...state.widgets, action.widget],
            }
            return newState
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            const newStateA = {
                ...state,
                widgets: action.widgets,
            }
            return newStateA
        case 'FIND_WIDGET':
        case 'UPDATE_WIDGET':
            const newStateU = {
                widgets: state.widgets.map((w) => {
                    if (w.id === action.widgetToUpdate.id) {
                        return action.widgetToUpdate
                    } else {
                        return w
                    }
                }),
            }
            return newStateU
        case 'DELETE_WIDGET':
            const newStateD = {
                widgets: state.widgets.filter((w) => {
                    if (w.id === action.widgetToDelete.id) {
                        return false
                    } else {
                        return true
                    }
                }),
            }
            return newStateD
        case 'CLEAR_WIDGET':
            const newStateC = {
                ...state,
                widgets: [],
            }
            return newStateC
        default:
            return state
    }
}

export default widgetReducer
