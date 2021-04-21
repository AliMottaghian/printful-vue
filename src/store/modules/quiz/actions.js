export default {
  async fetchQuestionTypes(context) {
    const response = await fetch(
      `https://printful.com/test-quiz.php?action=quizzes`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    context.commit("setQuestionTypes", responseData);
  },
  async fetchQuestions(context, id) {
    const response = await fetch(
      `https://printful.com/test-quiz.php?action=questions&quizId=${id}`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    context.commit("setQuestions", responseData);
  },
  async fetchAnswers(context, data) {
    const response = await fetch(
      `https://printful.com/test-quiz.php?action=answers&quizId=${data.quizId}&questionId=${data.questionId}`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    context.commit("setAnswers", responseData);
  },
  async fetchResult(context, data) {
    let reqUrl = `https://printful.com/test-quiz.php?action=submit&quizId=${data.id}`;
    data.answers.map((answer) => {
      reqUrl += `&answers[]=${answer.toString()}`;
    });
    const response = await fetch(reqUrl);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    context.commit("setQuizResult", responseData);
  },
  setParticipantName(context, name) {
    context.commit("setParticipantName", name);
  },
  setUserAnswers(context, data) {
    context.commit("setUserAnswers", data);
  },
  resetQuiz(context) {
    context.commit("resetQuiz");
  },
};
