import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/HomePage.vue'
import Login from '@/pages/LoginPage.vue'
import SignUp from '@/pages/SignUpPage.vue'



const routes = [
    {
        path: '/',
        name:Home,
        component:Home
    },

    {
        path: '/sign-in',
        name:Login,
        component:Login
    },

    {
        path: '/sign-up',
        name:SignUp,
        component:SignUp
    }
 
]


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;