<template>
  <div
    :class="`answerBox ${selectedAnswer === id ? 'selected' : ''}`"
    @click="setAnswer(id)"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    selectedAnswer: {
      required: false,
    },
  },
  inject: ["setAnswer"],
};
</script>
<style scoped>
.answerBox {
  background: #f2f2f2;
  margin: 10px;
  padding: 25px;
  border-radius: 5px;
  cursor: pointer;
}
.answerBox.selected {
  background: #00796b;
  color:#fff
}
</style>
