<template>
  <h1 class="my-4 text-center text-4xl font-bold text-white">Avatar - The Last Airbender</h1>
  <!-- Characters -->
  <div class="mx-auto my-2 w-3/4 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Characters</h2>
    <ul class="mx-auto w-3/4 rounded bg-slate-900 p-2 text-slate-100">
      <li
        v-for="character in characterList"
        class="my-2 flex items-center justify-between rounded border bg-slate-950 p-2 hover:bg-slate-800"
      >
        <p class="text-xl"><span class="text-green-500">></span> {{ character.name }}</p>
        <div class="flex gap-2">
          <button @click="addFavoriteCharacter(character)" class="rounded bg-blue-500 px-2 py-1">
            ⭐
          </button>
          <button @click="removeCharacter(character)" class="rounded bg-blue-500 px-2 py-1">
            ❌
          </button>
        </div>
      </li>
    </ul>
  </div>

  <!-- Favorite Characters -->
  <div class="mx-auto my-2 w-3/4 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Favorite Characters</h2>
    <ul class="mx-auto w-3/4 rounded bg-slate-900 p-2 text-slate-100">
      <p v-if="favoriteList.length < 1" class="text-center text-xl">No favorites added, yet.</p>
      <li
        v-else
        v-for="(character, index) in favoriteList"
        :key="index"
        class="my-2 flex items-center justify-between rounded border bg-slate-950 p-2 hover:bg-slate-800"
      >
        <p class="text-xl"><span class="text-green-500">></span> {{ character.name }}</p>
        <button @click="removeFavoriteCharacter(character)" class="rounded bg-blue-500 px-2 py-1">
          ❌
        </button>
      </li>
    </ul>
  </div>

  <!-- Element Statistics -->
  <div class="mx-auto my-2 w-3/4 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Element Statistics</h2>
    <ul class="mx-auto w-3/4 rounded bg-slate-900 p-2 text-slate-100">
      <li
        v-for="(stat, type) in benderStatistics"
        :key="stat"
        class="my-2 flex items-center justify-between rounded border bg-slate-950 p-2 hover:bg-slate-800"
      >
        <span>{{ type }}:</span> <span>{{ stat }}</span>
      </li>
    </ul>
  </div>

  <!-- New Character -->
  <div class="mx-auto my-2 w-3/4 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Add New Character</h2>
    <div class="flex flex-col gap-2">
      <input
        v-model="newCharacter.name"
        class="w-full rounded bg-slate-800 p-2 text-center text-slate-100"
        type="text"
        placeholder="Name of the new Character"
      />
      <input
        v-model="newCharacter.element"
        class="w-full rounded bg-slate-800 p-2 text-center text-slate-100"
        type="text"
        placeholder="Element of the new Character"
      />
      <button @click="addNewCharacter" class="rounded bg-blue-500 p-2 hover:bg-blue-600">
        Add new Character
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    newCharacter: {
      name: "",
      element: []
    },
    characterList: [
      {
        name: "Aang",
        element: ["Air", "Earth", "Water", "Fire"]
      },
      {
        name: "Zuko",
        element: ["Fire"]
      },
      {
        name: "Toph",
        element: ["Earth"]
      },
      {
        name: "Katara",
        element: ["Water"]
      }
    ],
    favoriteList: []
  }),
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

      this.characterList.forEach((character) => {
        elements.forEach((element) => {
          if (character.element.indexOf(element) > -1) {
            statistics[element] += 1
          }
        })
      })

      return statistics
    }
  },
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter)
      this.newCharacter = { name: "", element: [] }
    },
    removeCharacter(character) {
      this.characterList = this.characterList.filter((c) => c !== character)
    },
    addFavoriteCharacter(character) {
      this.favoriteList.push(character)
    },
    removeFavoriteCharacter(character) {
      this.favoriteList = this.favoriteList.filter((c) => c !== character)
    }
  }
}
</script>
