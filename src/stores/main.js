import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({ age: 0, expectancy: 0, showCalendar: false }),
  getters: {
    storageAge: (state) => localStorage.age,
    storageExpectancy: (state) => localStorage.expectancy,
    calendar: (state) => state.showCalendar
  },
  actions: {
    setData(age, expectancy) {
      this.age = age
      this.expectancy = expectancy
      this.showCalendar = true
    },
  },
});
