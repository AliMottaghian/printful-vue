import { createStore } from "vuex";

import quizModules from "./modules/quiz/index"

const store = createStore({
  modules: {
    quiz: quizModules,
  },
});

export default store;
