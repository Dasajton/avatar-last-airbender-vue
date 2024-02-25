import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/home.vue"
import Characters from "../views/characters.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/characters",
      name: "Characters",
      component: Characters
    }
  ]
})

export default router
