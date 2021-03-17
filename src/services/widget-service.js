const TOPICS_URL =
    'http://localhost:8080/api/topics'
const WIDGETS_URL =
    'http://localhost:8080/api/widgets'

export const createWidget = (tId, widget) =>
    fetch(`${TOPICS_URL}/${tId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => response.json())

export const updateWidget = (wId, widget) =>
    fetch(`${WIDGETS_URL}/${wId}`, {
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
