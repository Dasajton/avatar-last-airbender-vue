<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  computed: {
    benderStatistics() {
      const elements = ["Air", "Earth", "Fire", "Water", "None"]
      const statistics = {
        Air: 0,
        Earth: 0,
        Water: 0,
        Fire: 0,
        None: 0
      }

      this.characters.forEach((character) => {
        elements.forEach((element) => {
          if (character.element.indexOf(element) > -1) {
            statistics[element] += 1
          }
        })
      })

      return statistics
    }
  }
}
</script>

<template>
  <div class="mx-auto my-2 w-11/12 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Element Statistics</h2>
    <ul class="mx-auto w-10/12 rounded bg-slate-900 p-2 text-slate-100">
      <li
        v-for="(stat, type) in benderStatistics"
        :key="stat"
        class="my-2 flex items-center justify-between rounded border bg-slate-950 p-2 hover:bg-slate-800"
      >
        <div>
          <span class="text-green-500">> </span>
          <span>{{ type }}:</span>
        </div>
        <span>{{ stat }}</span>
      </li>
    </ul>
  </div>
</template>
