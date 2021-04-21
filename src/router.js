import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import QuizResult from "./pages/quiz/QuizResult";
import NotFound from "./pages/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/quiz/:id",
      component: Quiz,
      props: true,
    },
    { path: "/result/:id", component: QuizResult, props: true },

    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
