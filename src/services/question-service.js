// const QUIZZES_URL = 'http://localhost:3001/api/quizzes';
const QUIZZES_URL = 'https://wbdv-s21-xinyue-dang-node.herokuapp.com/api/quizzes';

const findQuestionsForQuiz = (qid) => {
   return fetch(`${QUIZZES_URL}/${qid}/questions`)
      .then(response => response.json())
}
export default {
   findQuestionsForQuiz
}