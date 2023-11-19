import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import CharacterPage from '../views/character/CharacterPage.vue'
import EpisodePage from '../views/episode/EpisodePage.vue'
import LocationPage from '../views/location/LocationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterPage
    },
    {
      path: '/episode',
      name: 'episode',
      component: EpisodePage
    },
    {
      path: '/location',
      name: 'location',
      component: LocationPage
    },
  ]
})

export default router
