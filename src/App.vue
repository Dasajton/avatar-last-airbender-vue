<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from "./components/nav-bar.vue"
import { RouterView } from "vue-router"

export default {
  components: {
    NavBar
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
