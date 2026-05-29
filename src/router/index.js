import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/about.vue'
import Services from '../views/service.vue'
import Gallery from '../views/gallery.vue'
import Contact from '../views/contact.vue'

import Kigali from '../views/Kigali.vue'
import South  from '../views/South.vue'
import North from '../views/North.vue'
import West from '../views/West.vue'
import East from '../views/East.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
       {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
     {
        path: '/Kigali',
        name: 'Kigali',
        component: Kigali,
    },
    {
        path: '/South',
        name: 'South',
        component: South,
    },
    {
        path: '/North',
        name: 'North',
        component: North,
    },
    {
        path: '/West',
        name: 'West',
        component: West,
    },
     {
        path: '/East',
        name: 'East',
        component: East,
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;
