<script>
import { RouterLink } from "vue-router"
</script>

<template>
  <nav
    class="fixed top-0 flex h-12 w-full items-center justify-between bg-slate-950 px-4 text-slate-100 shadow-md shadow-blue-500"
  >
    <h1 class="text-center text-lg font-bold text-white">The Last Airbender</h1>
    <ul class="flex items-center gap-4">
      <router-link to="/">Home</router-link>
      <router-link to="/characters">Characters</router-link>
    </ul>
  </nav>
  <div class="h-16 w-full"></div>
</template>
