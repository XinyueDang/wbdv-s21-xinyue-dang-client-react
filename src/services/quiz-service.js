// const QUIZZES_URL = 'http://localhost:3001/api/quizzes'
const QUIZZES_URL = 'https://wbdv-s21-xinyue-dang-node.herokuapp.com/api/quizzes';

const findAllQuizzes = () => {
    return fetch(QUIZZES_URL).then((response) => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`).then((response) => response.json())
}

const submitQuiz = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json',
        },
    })
        .then((response) => {
            return response.json()
        })
        .then((result) => alert(`Your score is: ${result.score}`))
}
export default {
    findAllQuizzes,
    findQuizById,
    submitQuiz,
}
