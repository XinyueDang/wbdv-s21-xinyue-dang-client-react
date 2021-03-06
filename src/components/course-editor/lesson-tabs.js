import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EditableItem from '../editable-item'
import { useParams } from 'react-router-dom'
import lessonService from '../../services/lesson-service'

const LessonTabs = ({
    lessons = [],
    createLesson,
    updateLesson,
    deleteLesson,
    findLessonsForModule,
}) => {
    const { courseId, moduleId, lessonId } = useParams()
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return (
        <>
            <ul className="nav nav-tabs">
                {lessons.map((lesson) => (
                    <li className="nav-item">
                        <EditableItem
                            active={lesson._id === lessonId}
                            to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}
                        />
                    </li>
                ))}
                <li className="nav-item">
                    <i
                        onClick={() => {
                            createLesson(moduleId)
                        }}
                        className="fas fa-plus"
                    ></i>
                </li>
            </ul>
        </>
    )
}

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons,
    }
}
const dtpm = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            lessonService
                .createLesson(moduleId, { title: 'New Lesson' })
                .then((theActualLesson) =>
                    dispatch({
                        type: 'CREATE_LESSON',
                        lesson: theActualLesson,
                    })
                )
        },
        deleteLesson: (item) => {
            lessonService.deleteLesson(item._id).then((status) =>
                dispatch({
                    type: 'DELETE_LESSON',
                    lessonToDelete: item,
                })
            )
        },
        updateLesson: (lesson) =>
            lessonService.updateLesson(lesson._id, lesson).then((status) =>
                dispatch({
                    type: 'UPDATE_LESSON',
                    lessonToUpdate: lesson,
                })
            ),
        findLessonsForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId).then((theLessons) =>
                dispatch({
                    type: 'FIND_LESSONS_FOR_MODULE',
                    lessons: theLessons,
                })
            ),
    }
}

export default connect(stpm, dtpm)(LessonTabs)
