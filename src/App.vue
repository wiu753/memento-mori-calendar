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
    calendar() {
      return this.mainStore.calendar
    }
  }
}

// When the user for the first time opens a new tab the local storage will be empty, so the prompt will show
// When the user fills in the first time, it will swap becasue of state
// The next time user opens it will go to calendar because of localStorage

</script>

<template>
  <main class="h-screen bg-neutral-800">
    <Entry v-if="!calendar"/>
    <Calendar v-else />
  </main>
</template>

<style scoped>

</style>
