export default {
  getQuestionTypes(state) {
    return state.questionTypes;
  },
  getQuestions(state) {
    return {
      ...state.questions,
      length: state.questions.length,
    };
  },
  getAnswers(state) {
    return state.answers;
  },
  getParticipantName(state) {
    return state.participantName;
  },
  getUserAnswers(state) {
    return state.userAnswers;
  },
  getQuizResult(state) {
    return state.quizResult;
  },
};
