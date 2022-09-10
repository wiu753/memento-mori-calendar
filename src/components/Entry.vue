<script>
import { useMainStore } from '../stores/main.js'

export default {
  setup() {
    const mainStore = useMainStore()

    return { mainStore }
  },
  data() {
    return {
      expectancy: 80,
      birthDay: "",
    }
  },

  methods: {
    submitData() {
      this.mainStore.setData({
        birthDay: this.birthDay,
        expectancy: parseInt(this.expectancy),
      })
    }
  },
}
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-20 w-auto" src="/icon-512x512.png" alt="Logo" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-200">
        Memento Mori
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-neutral-300 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700"> Age </label>
            <div class="mt-1">
              <input
                v-model="birthDay"
                type="date"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Life expectancy
            </label>
            <div class="mt-1">
              <select
                v-model="expectancy"
                type="number"
                placeholder="80"
                list="ages"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
              <option value="60">60</option>
              <option value="70">70</option>
              <option selected="selected" value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
              <option value="110">110</option>
            </select>
            </div>
          </div>

          <div>
            <button
              @click="submitData()"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neutral-500 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>