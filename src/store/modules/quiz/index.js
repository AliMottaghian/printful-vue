import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      questionTypes: [],
      participantName: null,
      questions: [],
      answers: [],
      userAnswers: null,
      quizResult: null,
    };
  },
  getters,
  actions,
  mutations,
};
