<!-- eslint-disable prettier/prettier -->
<template>
  <img v-if="imagesrc" alt="Vue logo" :src="imagesrc" />
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta" />
    <p>debe terminar con signo de pregunta(?)</p>
    <div v-if="isValidAnswer">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "indecision-component",
  data() {
    return {
      question: "",
      answer: "",
      imagesrc: "",
      isValidAnswer: false,
    };
  },
  methods: {
    async getAnswer() {
      const response = await fetch("https://yesno.wtf/api");
      const data = await response.json();
      if (data.answer === "yes") {
        this.answer = "Si";
      } else if (data.answer === "no") {
        this.answer = "No";
      } else {
        this.answer = "Tal vez";
      }

      this.imagesrc = data.image;
    },
  },
  watch: {
    question(newQuestion) {
      this.isValidAnswer = newQuestion.endsWith("?");

      if (newQuestion.endsWith("?")) {
        this.getAnswer();
      }
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
