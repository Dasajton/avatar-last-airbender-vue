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
  }
}
</script>
