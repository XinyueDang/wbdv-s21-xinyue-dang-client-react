import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'

const LessonTabs = ({lessons=[]}) => {
    return (
        <ul className="nav nav-tabs">
            {
            lessons.map(lesson => 
                <li className="nav-item">  
                    <EditableItem item={lesson}/>
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

}

export default connect(stpm)(LessonTabs)