<script>
import { CharacterList, FavoriteCharacters, BenderStatistics, NewCharacter } from "@/components"

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

<template>
  <character-list
    :characters="characterList"
    @remove="removeCharacter"
    @add-favorite="addFavoriteCharacter"
  />
  <favorite-characters :favorites="favoriteList" @remove="removeFavoriteCharacter" />
  <bender-statistics :characters="characterList" />
  <new-character :characters="characterList" />
</template>
