<template>
  <div class="mx-auto my-2 w-11/12 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Add New Character</h2>
    <div class="flex flex-col gap-2">
      <label class="-mb-2 text-center text-sm text-green-500">Name of the new Character</label>
      <input
        v-model="newCharacter.name"
        class="w-full rounded bg-slate-800 p-2 text-center text-slate-100"
        type="text"
      />
      <label class="-mb-2 text-center text-sm text-green-500">Element of the new Character</label>
      <select
        v-model="newCharacter.element"
        class="w-full rounded bg-slate-800 p-2 text-center text-slate-100"
      >
        <option class="text-gray-500" selected disabled>Please select an element</option>
        <option>Air</option>
        <option>Earth</option>
        <option>Fire</option>
        <option>Water</option>
        <option>None</option>
      </select>
      <button @click="addNewCharacter" class="mt-3 rounded bg-blue-500 p-2 hover:bg-blue-600">
        Add new Character
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    newCharacter: {
      name: "",
      element: []
    }
  }),
  methods: {
    addNewCharacter() {
      if (this.newCharacter.name === "" || this.newCharacter.element.length === 0) {
        alert("Please type in the name and element of your chosen character.")
      } else if (!this.characters.some((character) => character.name === this.newCharacter.name)) {
        this.characters.push(this.newCharacter)
        this.newCharacter = { name: "", element: [] }
        alert("Character is successfully added to the Characters list!")
      } else {
        alert("Character is already in Characters List")
      }

      this.newCharacter = { name: "", element: [] }
    }
  }
}
</script>
