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
    weeksTotal() {
      // This needs to be fixed to something dynamic
      return 80 * 52;
    },
    tenYearChunk() {
      // This needs to be fixed to something dynamic
      return 8;
    },
    fourWeekChunk() {
      return 12;
    },
  },
};
</script>

<template>
  <div class="mx-64 pt-5 text-yellow-200 flex flex-col">
    <div v-for="(tenYear, tenYearIndex) in 8" class="mb-5 flex flex-col">
      <div v-for="(year, yearIndex) in 10" class="mb-2 flex justify-center">
        <div v-for="(fourWeek, fourWeekIndex) in 13" class="flex mx-1">
          <div
            v-for="(week, weekIndex) in 4"
            class="h-2 w-2 bg-red-300 m-[1px]"
            :class="{'bg-green-300': (weekIndex + 1) + (4 * fourWeekIndex) + (52 * yearIndex) + (520 * tenYearIndex) <= weeksLived}"
          >
            <!-- {{ (weekIndex + 1) + (4 * fourWeekIndex) + (52 * yearIndex) + (520 * tenYearIndex) }} -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="mx-64 flex flex-column justify-center">
    <div v-for="(fourWeek, fourWeekIndex) in 13">
      <div v-for="(tenYear, tenYearIndex) in 8" class="my-5">
        <div v-for="(year, yearIndex) in 10" class="flex mx-1">
          <div v-for="(week, weekIndex) in 4" class="h-2 w-2 bg-red-300 m-1">
            {{ (weekIndex + 1) }}
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
