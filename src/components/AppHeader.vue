<script>
import HeaderNavbar from './NavHeader.vue';
// import HeaderHero from './HeaderHero.vue';
import { store } from '../store'


export default {
    components: {
        HeaderNavbar,
        // HeaderHero,
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        heros: function () {
            return this.store.heros
        }
    },
    created() {
        console.log(this.heros)
        console.log(this.heros.img)
    }
}

</script>
<template>
    <div class="container debug">
        <div class="navbar">
            <HeaderNavbar />
        </div>
        <div class="hero">
            <!-- <HeaderHero v-for="hero in heroes" :key="hero"
            :slide="hero"/> -->
            <img :src="heros.img" alt="">
            <div class="slide-text">
                <h1 class="title">{{ heros.title }}</h1>
                <h4 class="sec-title">{{ heros.secondTitle }}</h4>
                <div class="btn">
                    <a href="#">{{ heros.cta }}</a>
                </div>
            </div>
            <div class="buttons">
                <div class="arrow arrow-right" @click="nextSlide()">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </div>
                <div class="arrow arrow-left" @click="prevSlide()">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/colors-palette' as *;

// .container.debug {
//     border: 2px solid black;
//     height: 400px;
// }

.container {
    position: relative;


    .navbar {
        position: absolute;
        background-color: $dark;
        opacity: 0.5;
        padding: 20px;
        width: 100%;
        z-index: 50;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .hero {
        position: relative;
        .active {
            display: block;
        }

        .slide-text {
            position: absolute;
            top: 30%;
            right: 50%;
            transform: translateX(50%);
            // transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            color: $light;
            max-width: 320px;
            gap: 10px;

            .title {
                font-weight: bold;
                font-size: 40px;
            }

            .btn {
                border: 2px solid $light;
                line-height: 40px;
                padding: 0 20px;
                border-radius: 20px;
            }

        }
    }

    .arrow {
        border: 3px solid $light;
        color: $light;
        position: absolute;
        z-index: 999;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        border-radius: 100%;
        padding: 5px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
    }

    .arrow-left {
        left: 40px;
    }

    .arrow-right {
        right: 40px;
    }

}
</style>