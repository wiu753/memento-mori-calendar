import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({ age: 0, expectancy: 0, showCalendar: false }),
  getters: {
    storageAge: (state) => localStorage.age,
    storageExpectancy: (state) => localStorage.expectancy,
    stuffIsOk: (state) => {
      let age = Number(localStorage.getItem("age"));
      let expectancy = Number(localStorage.getItem("expectancy"));

      if (age > 0 && expectancy > 0 && expectancy > age && expectancy < 125) {
        return true;
      } else {
        return false;
      }
    },
    calendar: (state) => state.showCalendar
  },
  actions: {
    setData({age, expectancy}) {
      console.log(age, expectancy);
      if (age > 0 && expectancy > 0 && expectancy > age && expectancy < 125) {
        this.age = age
        this.expectancy = expectancy
        this.showCalendar = true
        localStorage.setItem('age', this.age.toString())
        localStorage.setItem('expectancy', this.expectancy.toString())
      } else {
        console.log("Invalid data");
      }
    },
  },
});

// I need a getter that checks the localstorage. Is there enough to check if there is a value in there?