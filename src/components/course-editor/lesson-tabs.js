import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EditableItem from '../editable-item'
import { useParams } from 'react-router-dom'
import lessonService from '../../services/lesson-service'
import './lesson-tabs.css'

const LessonTabs = ({
    lessons = [],
    title,
    createLesson,
    updateLesson,
    deleteLesson,
    findLessonsForModule,
    clearLesson,
}) => {
    const { layout, courseId, moduleId, lessonId } = useParams()
    useEffect(() => {
        if (moduleId !== 'undefined' && typeof moduleId !== 'undefined') {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])

    useEffect(() => {
        if (courseId !== 'undefined' && typeof courseId !== 'undefined') {
            clearLesson()
        }
    }, [courseId])
    return (
        <div className="row">
            <div className="col-11">
                <ul className="nav nav-tabs">
                    {lessons.map((lesson) => (
                        <li
                            className={`nav-item ${
                                lessonId === lesson._id ? 'active' : ''
                            }`}
                            key={lesson._id}
                        >
                            <EditableItem
                                title={title}
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/editor/${courseId}/${moduleId}/${lesson._id}`}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}
                                item={lesson}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-1">
                <i
                    onClick={() => {
                        createLesson(moduleId)
                    }}
                    className="fas fa-plus"
                />
            </div>
        </div>
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
        clearLesson: () =>
            dispatch({
                type: 'CLEAR_LESSON',
                lessons: [],
            }),
    }
}

export default connect(stpm, dtpm)(LessonTabs)
