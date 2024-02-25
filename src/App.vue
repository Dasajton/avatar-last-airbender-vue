<script>
import { NavBar } from "./components/"
import { RouterView } from "vue-router"

export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <nav-bar />
  <router-view />
</template>
