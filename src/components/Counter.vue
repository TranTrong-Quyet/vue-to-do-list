<template>
  <h1 v-if="store.isTurnOn">{{ store.count }}</h1>

  <button @click="store.increment()">Increase</button>

  <button @click="store.decrement()">Decrease</button>
  <button>{{ store.doubleCount }}</button>
  <h1>rotate state</h1>
  <h3>{{ store.rotateState }}</h3>

  <input type="checkbox" @change="store.disable">
  <label>Toggle InTurnOn: {{ store.isTurnOn }}</label>


</template>

<script setup>
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();


console.log(store)

</script>

<style scoped></style>
