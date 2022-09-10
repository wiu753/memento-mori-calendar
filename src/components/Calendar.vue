<script>
import { useMainStore } from "../stores/main.js";

export default {
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  computed: {
    weeksToLive() {
      return parseInt(localStorage.weeksToLive);
    },
    weeksLived() {
      return parseInt(localStorage.weeksLived);
    },
    expectedYearsToLive() {
      return parseInt(localStorage.expectedYearsToLive / 10);
    }
  },
};
</script>

<template>
  <div class="mx-64 pt-5 flex flex-col">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 mb-4 text-center text-3xl font-extrabold text-gray-200">
        Memento Mori
      </h2>
    </div>
    <div v-for="(tenYear, tenYearIndex) in expectedYearsToLive" class="mb-2 flex flex-col">
      <div v-for="(year, yearIndex) in 10" class="mb-[1px] flex justify-center">
        <div v-for="(fourWeek, fourWeekIndex) in 13" class="flex mx-1">
          <div
            v-for="(week, weekIndex) in 4"
            class="h-[5px] w-[5px] m-[1px] border border-slate-100"
            :class="{'bg-white': (weekIndex + 1) + (4 * fourWeekIndex) + (52 * yearIndex) + (520 * tenYearIndex) <= weeksLived}"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
