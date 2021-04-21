export default {
  setQuestionTypes(state, payload) {
    state.questionTypes = payload;
  },
  setQuestions(state, payload) {
    state.questions = payload;
  },
  setAnswers(state, payload) {
    state.answers = payload;
  },
  setParticipantName(state, payload) {
    state.participantName = payload;
  },
  setUserAnswers(state, payload) {
    state.userAnswers = payload;
  },
  setQuizResult(state, payload) {
    state.quizResult = payload;
  },
  resetQuiz(state) {
    state.participantName = null;
    state.questions = [];
    state.answers = [];
    state.userAnswers = null;
    state.quizResult = null;
  },
};
