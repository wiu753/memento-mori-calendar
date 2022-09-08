import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({ age: "", expectancy: 0, showCalendar: false, weeksLived: 0, weeksToLive: 0 }),

  // ------------------------------------ GETTERS ------------------------------------
  getters: {
    loadCalendar: (state) => {
      // this.showcalendar == true because the getter doesn't update when the localStorage is set.
      if (localStorage.loadCalendar === 'true' || state.showCalendar) {
        return true;
      } else {
        return false;
      }
    },
    weeksToFill: (state) => {
      
    }
  },

  // ------------------------------------ ACTIONS ------------------------------------
  actions: {
    setData({birthDay, expectancy}) {
      let date_1 = new Date();
      let date_2 = new Date(birthDay);
      let difference = date_1.getTime() - date_2.getTime();
      let daysLived = Math.ceil(difference / (1000 * 3600 * 24));
      let weeksLived = Math.round(daysLived / 7);
      let expectancyYearsToWeeks = expectancy * 52.1429;
      this.weeksLived = weeksLived;
      this.weeksToLive = Math.round(expectancyYearsToWeeks - weeksLived);

      console.log(Math.round(expectancyYearsToWeeks - weeksLived))

      if (expectancyYearsToWeeks > 0 && expectancyYearsToWeeks > weeksLived && expectancy < 125 && expectancy > 0) {
        this.showCalendar = true
        localStorage.setItem('weeksToLive', this.weeksToLive.toString())
        localStorage.setItem('weeksLived', this.weeksLived.toString())
        localStorage.setItem('loadCalendar', 'true')
        console.log("Data set in local storage!")
        this.showCalendar = true;
      } else {
        console.log("Invalid data");
      }
    },
  },
});

// I need a getter that checks the localstorage. Is there enough to check if there is a value in there?