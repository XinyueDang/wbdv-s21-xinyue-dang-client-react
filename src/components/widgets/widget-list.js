import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import widgetService from '../../services/widget-service'
import HeadingWidget from './heading-widget'
import ParagraphWidget from './paragraph-widget'
import ListWidget from './list-widget'
import ImageWidget from './image-widget'

const WidgetList = ({
    deleteWidget,
    updateWidget,
    createWidget,
    findWidgetsForTopic,
    widgets = [],
    clearWidget,
}) => {
    const { topicId } = useParams()
    const [widget, setWidget] = useState({})
    useEffect(() => {
        if (topicId !== 'undefined' && typeof topicId !== 'undefined') {
            findWidgetsForTopic(topicId)
        } else {
            clearWidget()
        }
    }, [topicId])

    return (
        <div>
            <i
                onClick={() => {
                    createWidget(topicId)
                }}
                className="fas fa-plus float-right"
            ></i>
            <h4>Widget List </h4>
            <ul className="list-group">
                {widgets.map((_widget) => (
                    <li key={_widget.id} className="list-group-item">
                        {_widget.type === 'HEADING' && (
                            <HeadingWidget
                                item ={_widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                            />
                        )}
                        {_widget.type === 'PARAGRAPH' && (
                            <ParagraphWidget
                                item={_widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                            />
                        )}
                        {_widget.type === 'LISTWIDGET' && (
                            <ListWidget
                                item={_widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                            />
                        )}
                        {_widget.type === 'IMAGEWIDGET' && (
                            <ImageWidget
                                item={_widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                            />
                        )}
                    </li>
                ))}
            </ul>
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
                .createWidget(topicId, {
                    type: 'PARAGRAPH',
                    size: 6,
                    text: 'New Widget',
                })
                .then((theActualWidget) =>
                    dispatch({
                        type: 'CREATE_WIDGET',
                        widget: theActualWidget,
                    })
                )
        },
        deleteWidget: (item) => {
            widgetService.deleteWidget(item.id).then((status) =>
                dispatch({
                    type: 'DELETE_WIDGET',
                    widgetToDelete: item,
                })
            )
        },
        
        updateWidget: (widget) => {
            widgetService.updateWidget(widget).then((status) =>
                dispatch({
                    type: 'UPDATE_WIDGET',
                    widgetToUpdate: widget,
                })
            )
        },

        findWidgetsForTopic: (topicId) =>
            widgetService.findWidgetsForTopic(topicId).then((theWidgets) =>
                dispatch({
                    type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
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
