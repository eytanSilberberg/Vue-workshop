import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import ContactDetails from '../views/contactDetails.vue'
import Charts from '../views/charts.vue'
import ContactEdit from '../views/contactEdit.vue'
import Signup from '../views/signup.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/signup',
          component: Signup,
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/Contact.vue')
    },
    {
      path: '/contact/:_id',
      name: 'contactDetails',
      component: ContactDetails
    }, {

      path: '/charts',
      name: 'charts',
      component: Charts
    }, {
      path: '/contact/edit/:_id?',
      component: ContactEdit,
    },
  ]
})

export default router
