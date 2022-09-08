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
  },
};
</script>

<template>
  <div class="mx-64 pt-5 text-yellow-200 flex flex-col">
    <div v-for="(tenYear, tenYearIndex) in 8" class="mb-2 flex flex-col">
      <div v-for="(year, yearIndex) in 10" class="mb-[2px] flex justify-center">
        <div v-for="(fourWeek, fourWeekIndex) in 13" class="flex mx-1">
          <div
            v-for="(week, weekIndex) in 4"
            class="h-[4px] w-[4px] bg-red-300 m-[1px]"
            :class="{'bg-green-300': (weekIndex + 1) + (4 * fourWeekIndex) + (52 * yearIndex) + (520 * tenYearIndex) <= weeksLived}"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
