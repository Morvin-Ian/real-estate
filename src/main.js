import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from '@/router'


import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(
                faSquareFacebook,faMoneyCheckDollar,
                faSquareInstagram, faSquareXTwitter, 
                faUserCircle, faBell, faChevronDown, 
                faWhatsappSquare, faLinkedin, faCopy,
                faCircle
            )

createApp(App)
    .use(ElementPlus)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
