<template>
  <card-container>
    <spinner-loader v-if="isLoading"></spinner-loader>
    <div v-if="receivedResult">
      <page-title>
        <h1>Thanks, {{ this.username }}!</h1>
      </page-title>
      <h2>
        You responded correctly to {{ receivedResult.correct }} out of
        {{ receivedResult.total }} questions.
      </h2>
      <div>
        <a-progress
          :percent="100"
          :show-info="false"
          :stroke-color="{
            '0%': '#108ee9',
            '100%': '#87d068',
          }"
        />
      </div>
    </div>
  </card-container>
</template>

<script>
export default {
  name: "QuizResult",
  props: ["id"],
  data() {
    return {
      isLoading: false,
      username: null,
      answers: null,
    };
  },
  created() {
    const username = this.$store.getters["quiz/getParticipantName"];
    const answers = this.$store.getters["quiz/getUserAnswers"];
    if (!username || !answers) {
      return this.$router.push("/");
    }
    this.username = username;
    this.answers = answers;
    this.getResult();
  },
  computed: {
    receivedResult() {
      return this.$store.getters["quiz/getQuizResult"];
    },
  },
  methods: {
    async getResult() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("quiz/fetchResult", {
          id: this.id,
          answers: this.answers,
        });
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
};
</script>
