import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ReadMeView from '../views/ReadMeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/readme',
      name: 'readme',
      component: ReadMeView
    }
  ],
  // Controls scroll to top on page redirect or scrolling to specific section when hashed in path
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

export default router
