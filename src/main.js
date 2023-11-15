import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import {  } from '@fortawesome/vue-fontawesome';

import { faHeart as fasFaHeart, faBagShopping, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import {  } from '@fortawesome/free-regular-svg-icons';

import {  } from '@fortawesome/free-brands-svg-icons';

library.add();

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
