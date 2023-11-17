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
    <header class="container">
        <nav class="navbar row">
            <div class="col-12 navbar-top">
                <div class="sponsors">
                    <figure>
                        <img src="/imgs/sponsor1.png" alt="">
                    </figure>
                    <figure>
                        <img src="/imgs/sponsor2.png" alt="">
                    </figure>
                </div>
                <div class="logo">
                    <figure>
                        <img src="/imgs/logo-football.png" alt="">
                    </figure>
                </div>
                <ul class="social">
                    <li class="icon">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    </li>
                    <li class="icon">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </li>
                    <li class="icon">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </li>
                </ul>
            </div>
            <ul class="col-12 navbar-bottom">
                <li v-for="(page, idx) in 7" :key="idx">
                    Home
                </li>
            </ul>

        </nav>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/partials/colors-palette' as *;

.container {
    position: relative;
    color: $light;
    .navbar {
        position: absolute;
        background-color: $dark-opacity;
        z-index: 50;
        padding: 20px;
        width: 100%;

        .navbar-top {
            display: flex;
            align-items: center;
            justify-content: center;
            color: $light;

            .sponsors {
                display: flex;
                align-items: center;
            }
            .social {
                font-size: 50px;
                display: flex;
                gap: 25px;
                padding: 0 20px;
            }
        }
        .navbar-bottom {
            display: flex;
            justify-content: center;
            gap: 20px;
            font-size: 30px;
            text-transform: uppercase;
        }

    }



}
</style>