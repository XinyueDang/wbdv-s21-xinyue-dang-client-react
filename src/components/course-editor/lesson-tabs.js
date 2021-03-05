import React from 'react'
import { connect } from 'react-redux'
import EditableItem from '../editable-item'
import {useParams} from 'react-router-dom'

const LessonTabs = ({ lessons = [], updateLesson, deleteLesson }) => {
    const {courseId, moduleId} = useParams();
    return (
        <ul className="nav nav-tabs">
            {lessons.map((lesson) => (
                <li className="nav-item">
                    <EditableItem
                        to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                        deleteItem={deleteLesson}
                        updateItem={updateLesson}
                        item={lesson}
                    />
                </li>
            ))}
        </ul>
    )
}

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons,
    }
}
const dtpm = (dispatch) => {
    return {
        deleteLesson: (item) =>
            dispatch({
                type: 'DELETE_LESSON',
                lessonToDelete: item,
            }),
        updateLesson: (item) =>
            dispatch({
                type: 'UPDATE_LESSON',
                lessonToUpdate: item,
            }),
    }
}

export default connect(stpm, dtpm)(LessonTabs)
