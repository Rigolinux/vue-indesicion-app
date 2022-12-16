<template>
  <Indesicion />
</template>

<script>
import Indesicion from "./components/Indecision.vue";
export default {
  name: "App",
  // eslint-disable-next-line prettier/prettier
  components: {
    Indesicion,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
