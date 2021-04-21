<template>
  <card-container>
    <page-title>
      <h2>
        Let's start our Quiz!!
      </h2>
    </page-title>
    <start-quiz-form @start-quiz="startQuiz"></start-quiz-form>
  </card-container>
</template>

<script>
import StartQuizForm from "../../components/home/StartQuizForm";

export default {
  name: "Home",
  components: {
    StartQuizForm,
  },
  methods: {
    startQuiz(data) {
      this.$store.dispatch("quiz/setParticipantName", data.name);
      this.$router.push(`/quiz/${data.type}`);
    },
  },
  created() {
    this.$store.dispatch("quiz/resetQuiz");
  },
};
</script>
