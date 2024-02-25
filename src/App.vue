<template>
  <h1 class="my-4 text-center text-4xl font-bold text-white">Avatar - The Last Airbender</h1>
  <!-- Characters -->
  <div class="mx-auto my-2 w-11/12 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Characters</h2>
    <ul class="mx-auto w-10/12 rounded bg-slate-900 p-2 text-slate-100">
      <p v-if="characterList.length < 1" class="text-center text-xl">No Characters added, yet.</p>
      <li
        v-else
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
  <div class="mx-auto my-2 w-11/12 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Favorite Characters</h2>
    <ul class="mx-auto w-10/12 rounded bg-slate-900 p-2 text-slate-100">
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
  <BenderStatistics :characters="characterList" />
  <!-- New Character -->
  <NewCharacter :characters="characterList" />
</template>

<script>
import BenderStatistics from "./components/BenderStatistics.vue"
import NewCharacter from "./components/NewCharacter.vue"

export default {
  components: {
    BenderStatistics,
    NewCharacter
  },
  data: () => ({
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
  methods: {
    removeCharacter(character) {
      this.characterList = this.characterList.filter((c) => c !== character)
    },
    addFavoriteCharacter(character) {
      if (!this.favoriteList.includes(character)) {
        this.favoriteList.push(character)
      } else {
        alert("Character is already in Favorites")
      }
    },
    removeFavoriteCharacter(character) {
      this.favoriteList = this.favoriteList.filter((c) => c !== character)
    }
  }
}
</script>
