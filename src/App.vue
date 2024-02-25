<template>
  <h1 class="my-4 text-center text-4xl font-bold text-white">Avatar - The Last Airbender</h1>

  <character-list
    :characters="characterList"
    @remove="removeCharacter"
    @addFavorite="addFavoriteCharacter"
  />
  <favorite-characters :favorites="favoriteList" @remove="removeFavoriteCharacter" />
  <bender-statistics :characters="characterList" />
  <new-character :characters="characterList" />
</template>

<script>
import CharacterList from "./components/CharacterList.vue"
import FavoriteCharacters from "./components/FavoriteCharacters.vue"
import BenderStatistics from "./components/BenderStatistics.vue"
import NewCharacter from "./components/NewCharacter.vue"

export default {
  components: {
    CharacterList,
    FavoriteCharacters,
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
