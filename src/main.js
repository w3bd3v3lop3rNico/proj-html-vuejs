import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faChevronRight, faChevronLeft, faCirclePlus, faLocationDot, faPhoneVolume, } from '@fortawesome/free-solid-svg-icons';

import { faCalendarDays, faThumbsUp, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faChevronRight, faChevronLeft, faCirclePlus, faCalendarDays, faThumbsUp, faLocationDot, faPhoneVolume, faEnvelope, faFacebookF, faInstagram, faTwitter );

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
