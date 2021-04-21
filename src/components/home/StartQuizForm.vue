<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !name.isValid }">
      <label for="name">Enter your name</label>
      <a-input
        type="text"
        id="name"
        v-model:value="name.val"
        @blur="clearValidity('name')"
      />
      <p v-if="!name.isValid">Name must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !type.isValid }">
      <label for="type">Choose a question type</label>
      <a-select v-model:value="type.val" @change="clearValidity('type')">
        <a-select-option
          v-for="type in receivedQuestionTypes"
          :key="type.id"
          :value="type.id"
        >
          {{ type.title }}
        </a-select-option>
      </a-select>
      <p v-if="!type.isValid">You must choose a questoin type</p>
    </div>

    <a-button @click="submitForm">Start</a-button>
  </form>
</template>

<script>
export default {
  emits: ["start-quiz"],
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      type: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  created() {
    this.loadQuestionTypes();
  },
  computed: {
    receivedQuestionTypes() {
      return this.$store.getters["quiz/getQuestionTypes"];
    },
  },
  methods: {
    async loadQuestionTypes() {
      try {
        await this.$store.dispatch("quiz/fetchQuestionTypes");
      } catch (error) {
        console.log(error);
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.type.val === "") {
        this.type.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        name: this.name.val,
        type: this.type.val,
      };
      this.$emit("start-quiz", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 1rem;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
}

input,
select {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  padding: 5px;
}

input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

.invalid label {
  color: red;
}

.invalid input {
  border: 1px solid red;
}
</style>
