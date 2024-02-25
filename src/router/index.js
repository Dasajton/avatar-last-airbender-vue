import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Characters from "../views/Characters.vue"

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
