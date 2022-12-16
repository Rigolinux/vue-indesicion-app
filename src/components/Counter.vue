<!-- eslint-disable prettier/prettier -->
<template>
  <h2>{{customTag}}</h2>
  <p>{{count}}<sup>2</sup> ={{getSquareValue()}}</p>
  <div>
    <button v-on:click="increase()">+</button>
    <button @click="decrease()">-</button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  props: {
    titleTag: {
      type: String,
      default: "Counter",
    },
    start: {
      type: Number,
      //required: true,
      default: 0,
      validator(value) {
        return value >= 0;
      },
    },
  },
  name: "CounterNum",
  data() {
    return {
      count: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.count * this.count;
    },
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
  //proppieties can saved in cache if the value is not changed the value is not computed again
  computed:{
    getSquareCounter(){
      return this.count * this.count;
    },
    customTag(){
      if(!this.titleTag){
        return "Counter";
      }
      return this.titleTag;
    }
  }
};
</script>
<!-- eslint-disable prettier/prettier -->
<style>
button{
  background-color: #64B687;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  cursor: pointer;
  margin: 0 5px;
  padding: 0 5px;
  color: white;
  transition: 0.3s ease-in-out;
}
button:hover{
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
