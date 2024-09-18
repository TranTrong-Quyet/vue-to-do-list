import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    isTurnOn: false,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    rotateState(state) {
      return (state.isTurnOn = !state.isTurnOn);
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    disable() {
      this.isTurnOn = !this.isTurnOn;
    },
  },
});
