<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  created() {
    console.log(this.store)
  }
}
</script>

<template>
  <AppHeader :item="store"/>
  <AppMain :item="store"/>
  <AppFooter :item="store"/>
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
