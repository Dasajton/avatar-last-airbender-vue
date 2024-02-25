<template>
  <div class="mx-auto my-2 w-11/12 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Favorite Characters</h2>
    <ul class="mx-auto w-10/12 rounded bg-slate-900 p-2 text-slate-100">
      <p v-if="favorites.length < 1" class="text-center text-xl">No favorites added, yet.</p>
      <li
        v-else
        v-for="(character, index) in favorites"
        :key="index"
        class="my-2 flex items-center justify-between rounded border bg-slate-950 p-2 hover:bg-slate-800"
      >
        <p class="text-xl"><span class="text-green-500">></span> {{ character.name }}</p>
        <button @click="$emit('remove', character)" class="rounded bg-blue-500 px-2 py-1">
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    favorites: {
      type: Array,
      required: true
    }
  }
}
</script>
