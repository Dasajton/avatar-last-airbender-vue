<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="mx-auto my-2 w-11/12 rounded-lg bg-slate-950 p-4 text-slate-100 md:w-3/5 xl:w-1/2">
    <h2 class="p-2 text-center text-3xl">Characters</h2>
    <ul class="mx-auto w-10/12 rounded bg-slate-900 p-2 text-slate-100">
      <p v-if="characters.length < 1" class="text-center text-xl">No Characters added, yet.</p>
      <li
        v-else
        v-for="character in characters"
        class="my-2 flex items-center justify-between rounded border bg-slate-950 p-2 hover:bg-slate-800"
      >
        <p class="text-xl"><span class="text-green-500">></span> {{ character.name }}</p>
        <div class="flex gap-2">
          <button @click="$emit('add-favorite', character)" class="rounded bg-blue-500 px-2 py-1">
            ⭐
          </button>
          <button @click="$emit('remove', character)" class="rounded bg-blue-500 px-2 py-1">
            ❌
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
