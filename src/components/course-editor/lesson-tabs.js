import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'

const LessonTabs = ({
    lessons=[],
    updateLesson,
    deleteLesson
}) => {
    return (
        <ul className="nav nav-tabs">
            {
            lessons.map(lesson => 
                <li className="nav-item">
                    <EditableItem 
                    deleteItem={deleteLesson}
                    updateItem={updateLesson}
                    item={lesson}
                    />
                </li>
            )}
        </ul>
    )
}

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}
const dtpm = (dispatch) => {
    return {
        deleteLesson: (item) => dispatch({ 
            type: 'DELETE_LESSON', 
            lessonToDelete: item
        }),
        updateLesson: (item) => dispatch({
            type: 'UPDATE_LESSON', 
            lessonToUpdate: item
        })
    }
}

export default connect(stpm, dtpm)(LessonTabs)