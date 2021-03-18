const TOPICS_URL =
    'https://wbdc-s21-xinyue-dang-java.herokuapp.com/api/topics'
const WIDGETS_URL =
    'https://wbdc-s21-xinyue-dang-java.herokuapp.com/api/widgets'

export const createWidget = (tId, widget) =>
    fetch(`${TOPICS_URL}/${tId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => response.json())

export const updateWidget = (widget) =>
    fetch(`${WIDGETS_URL}/${widget.id}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => response.json())

export const findWidgetsForTopic = (tId) =>
    fetch(`${TOPICS_URL}/${tId}/widgets`).then((response) =>
        response.json()
    )

export const deleteWidget = (wId) =>
    fetch(`${WIDGETS_URL}/${wId}`, {
        method: 'DELETE',
    }).then((response) => response.json())

const api = {
    createWidget,
    updateWidget,
    findWidgetsForTopic,
    deleteWidget
}

export default api
