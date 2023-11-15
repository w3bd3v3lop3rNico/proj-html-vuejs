<script>
import HeaderNavbar from './app-header-comp/HeaderNavbar.vue';
import HeaderHero from './app-header-comp/HeaderHero.vue';

export default {
    components: {
        HeaderNavbar,
        HeaderHero,
    }
}
</script>
<template>
    <div class="container debug">
        <div class="navbar">
            <HeaderNavbar />
        </div>
        <div class="hero">
            <HeaderHero />
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/colors-palette' as *;
.container.debug {
    border: 2px solid black;
    height: 400px;
}
.container {
    position: relative;
    background-color: red;
    .navbar {
        position: absolute;
        background-color: $dark;
        opacity: 0.5;
        padding: 20px;
        width: 100%;
        z-index: 50;
    }
}
</style>