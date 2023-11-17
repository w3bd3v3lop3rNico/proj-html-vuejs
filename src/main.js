import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faChevronRight, faChevronLeft, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

import {  } from '@fortawesome/free-brands-svg-icons';

library.add(faChevronRight, faChevronLeft, faCirclePlus, faCalendarDays );

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
