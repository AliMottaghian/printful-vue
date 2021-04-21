<template>
  <a-row>
    <a-col :xs="24" :sm="12" v-for="answer in answers" :key="answer.id">
      <question-box
        :title="answer.title"
        :id="answer.id"
        :selectedAnswer="selectedAnswer"
      ></question-box>
    </a-col>
  </a-row>
</template>

<script>
import QuestionBox from "./QuestionBox";
export default {
  props: {
    answers: {
      type: Array,
      required: true,
    },
    selectedAnswer: {
      required: false,
    },
  },
  components: {
    QuestionBox,
  },
};
</script>
