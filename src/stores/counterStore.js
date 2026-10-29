import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
    incrementBy(value) {
      this.count += value;
    },
    decrementBy(value) {
      this.count -= value;
    },
  },
  // Ici ca active la persistance des données dans le local storage
  persist: true,
});
