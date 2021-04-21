<template>
  <section>
    <card-container>
      <spinner-loader v-if="isLoading"></spinner-loader>
      <section v-if="receivedQuestions.length">
        <question-section :title="receivedQuestions[this.step].title">
        </question-section>
        <answers-section
          v-if="receivedAnswers.length && !this.loadingAnswers"
          :answers="receivedAnswers"
          :selectedAnswer="this.selectedAnswer"
        >
        </answers-section>
        <spinner-loader v-else></spinner-loader>
        <div>
          <a-progress
            :percent="calcPercentage()"
            :show-info="false"
            :stroke-color="{
              '0%': '#108ee9',
              '100%': '#87d068',
            }"
          />
        </div>
        <a-button @click="nextStep" :disabled="!selectedAnswer">
          <span v-if="this.step < this.receivedQuestions.length - 1">Next</span>
          <span v-else>Done</span>
        </a-button>
      </section>
    </card-container>
  </section>
</template>

<script>
import QuestionSection from "../../components/quiz/QuestionSection";
import AnswersSection from "../../components/quiz/AnswersSection";

export default {
  name: "Quiz",
  props: ["id"],
  components: {
    QuestionSection,
    AnswersSection,
  },
  data() {
    return {
      isLoading: false,
      step: 0,
      selectedAnswer: null,
      answers: [],
      loadingAnswers: false,
    };
  },
  created() {
    const username = this.$store.getters["quiz/getParticipantName"];
    if (!username) {
      return this.$router.push("/");
    }
    this.getQuestions();
  },
  computed: {
    receivedQuestions() {
      return this.$store.getters["quiz/getQuestions"];
    },
    receivedAnswers() {
      return this.$store.getters["quiz/getAnswers"];
    },
  },
  watch: {
    step() {
      this.getAnswers();
      this.selectedAnswer = null;
    },
    receivedQuestions() {
      this.getAnswers();
    },
  },
  provide() {
    return {
      setAnswer: this.setAnswer,
    };
  },
  methods: {
    async getQuestions() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("quiz/fetchQuestions", this.id);
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    async getAnswers() {
      this.loadingAnswers = true;
      try {
        await this.$store.dispatch("quiz/fetchAnswers", {
          quizId: this.id,
          questionId: this.receivedQuestions[this.step].id,
        });
      } catch (error) {
        console.log(error);
      }
      this.loadingAnswers = false;
    },
    nextStep() {
      if (this.step < this.receivedQuestions.length - 1) {
        this.answers = [...this.answers, this.selectedAnswer];
        this.step++;
      } else {
        this.answers = [...this.answers, this.selectedAnswer];
        this.$store.dispatch("quiz/setUserAnswers", this.answers);
        this.$router.push(`/result/${this.id}`);
      }
    },
    setAnswer(id) {
      this.selectedAnswer = id;
    },
    calcPercentage() {
      return (this.step * 100) / this.receivedQuestions.length;
    },
  },
};
</script>
