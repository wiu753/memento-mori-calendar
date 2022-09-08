<script>
import Entry from "./components/Entry.vue";
import Calendar from "./components/Calendar.vue";

import { useMainStore } from './stores/main.js'

export default {
  setup() {
    const mainStore = useMainStore()
    return { mainStore }
  },
  components: {
    Entry,
    Calendar,
  },
  computed: {
    loadCalendar() {
      console.log("Inside loadCalendar", this.mainStore.loadCalendar)
      if (this.mainStore.showCalendar || this.mainStore.loadCalendar) {
        return true
      } else {
        return false
      }
    },
  }
}

// When the user for the first time opens a new tab the local storage will be empty, so the prompt will show
// When the user fills in the first time, it will swap becasue of state
// The next time user opens it will go to calendar because of localStorage

</script>

<template>
  <main class="h-screen bg-neutral-800">
  <Entry v-if="!loadCalendar"/>
  <Calendar v-else />
    <!-- <template v-else>
      <div class="text-white flex">
        <div class="bg-slate-200 h-3 w-3"></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
      </div>
    </template> -->
    <!-- <Calendar v-else /> -->
  </main>
</template>

<style scoped>

</style>
