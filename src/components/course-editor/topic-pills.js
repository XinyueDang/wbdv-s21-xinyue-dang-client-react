import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'

const TopicPills = ({topics=[]}) => {
    return (
        <ul className="nav nav-pills">
            {
            topics.map(topic => 
                <li className="nav-item">
                    <EditableItem item={topic}/>
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

}

export default connect(stpm)(TopicPills)