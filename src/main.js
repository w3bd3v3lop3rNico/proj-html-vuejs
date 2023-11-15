import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {  } from '@fortawesome/free-solid-svg-icons';

import {  } from '@fortawesome/free-regular-svg-icons';

import {  } from '@fortawesome/free-brands-svg-icons';

library.add();

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
