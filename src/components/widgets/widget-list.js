import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import widgetService from '../../services/widget-service'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = ({
    deleteWidget,
    updateWidget,
    createWidget,
    findWidgetsForTopic,
    widgets = [],
    clearWidget,
}) => {
    // TODO: move state management to widgets-reducer.js
    const {topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        if (topicId !== 'undefined' && typeof topicId !== 'undefined') {
            findWidgetsForTopic(topicId)
        }else{
            clearWidget()
        }
    }, [topicId])
    
    return(
        <div>
            <i onClick={createWidget} className="fas fa-plus float-right"></i>
            <h4>Widget List </h4>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-trash float-right"></i>
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                    </li>
                    )
                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets,
    }
}
const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => {
            widgetService
                .createWidget(topicId, { title: 'New Widget' })
                .then((theActualWidget) =>
                    dispatch({
                        type: 'CREATE_WIDGET',
                        widget: theActualWidget,
                    })
                )
        },
        deleteWidget: (item) => {
            widgetService.deleteWidget(item._id).then((status) =>
                dispatch({
                    type: 'DELETE_WIDGET',
                    widgetToDelete: item,
                })
            )
        },
        updateWidget: (widget) =>
            widgetService.updateWidget(widget._id, widget).then((status) =>
                dispatch({
                    type: 'UPDATE_WIDGET',
                    widgetToUpdate: widget,
                })
            ),
        findWidgetsForTopic: (topicId) =>
            widgetService.findWidgetsForTopic(topicId).then((theWidgets) =>
                dispatch({
                    type: 'FIND_WIDGETS_FOR_TOPIC',
                    widgets: theWidgets,
                })
            ),
        clearWidget: () =>
            dispatch({
                type: 'CLEAR_WIDGET',
                widgets: [],
            }),
    }
}

export default connect(stpm, dtpm)(WidgetList)
