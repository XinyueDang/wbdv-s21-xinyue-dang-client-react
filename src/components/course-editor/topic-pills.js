import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'
import {useParams} from 'react-router-dom'
import topicService from '../../services/topic-service'

const TopicPills = ({
    deleteTopic,
    updateTopic,
    createTopic,
    findTopicsForLesson,
    topics=[]
}) => {
    const{layout, courseId, moduleId, lessonId, topicId} = useParams()
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return (
        <ul className="nav nav-pills">
            {
            topics.map(topic => 
                <li className="nav-item" key={topic._id}>
                    <EditableItem 
                    active={topic._id === topicId}
                    to = {`/courses/${layout}/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                    item={topic}
                    deleteItem={deleteTopic}
                    updateItem={updateTopic}
                    />
                </li>
            )}
            <li className="nav-item">
                    <i
                        onClick= {() => {createTopic(lessonId)}}
                        className="fas fa-plus"
                    ></i>
                </li>
        </ul>
    )
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}
const dtpm = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService
                .createTopic(lessonId, { title: 'New Topic' })
                .then((theActualTopic) =>
                    dispatch({
                        type: 'CREATE_TOPIC',
                        topic: theActualTopic,
                    })
                )
        },
        deleteTopic: (item) => {
            topicService.deleteTopic(item._id).then((status) =>
                dispatch({
                    type: 'DELETE_TOPIC',
                    topicToDelete: item,
                })
            )
        },
        updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic).then((status) =>
            dispatch({
                type: 'UPDATE_TOPIC',
                topicToUpdate: topic,
            })
        ),
        findTopicsForLesson: (lessonId) =>
            topicService.findTopicsForLesson(lessonId).then((theTopics) =>
                dispatch({
                    type: 'FIND_TOPICS_FOR_LESSON',
                    topics: theTopics,
                })
            ),
}}

export default connect(stpm, dtpm)(TopicPills)