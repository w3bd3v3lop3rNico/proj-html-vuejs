<script>
export default {
    data() {
        return {
        }
    },
    created() {
    }
}
</script>
<template>
    <div class="container debug">
        <nav class="navbar"> 
        </nav>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/colors-palette' as *;

.container {
    position: relative;


    .navbar {
        position: absolute;
        background-color: $dark-opacity;
        opacity: 0.5;
        padding: 20px;
        width: 100%;
        z-index: 50;
    }

   

}
</style>