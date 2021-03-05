import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'
import {useParams} from 'react-router-dom'

const TopicPills = ({
    deleteTopic,
    updateTopic,
    topics=[]
}) => {
    const{courseId, moduleId, lessonId} = useParams()
    return (
        <ul className="nav nav-pills">
            {
            topics.map(topic => 
                <li className="nav-item">
                    <EditableItem 
                    to = {`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                    item={topic}
                    deleteItem={deleteTopic}
                    updateItem={updateTopic}
                    />
                </li>
            )}
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
        deleteTopic: (item) => dispatch({ 
                                type: 'DELETE_TOPIC', 
                                topicToDelete: item
                        }),
        updateTopic: (item) => dispatch({
                                type: 'UPDATE_TOPIC', 
                                topicToUpdate: item
        })
}}

export default connect(stpm, dtpm)(TopicPills)