<script>
// import { store } from '../store';
export default {
    props: {
        slide: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
        }
    },
    computed: {
        img() {
            return `/imgs/${this.slide.img}`
        },
        title() {
            return this.slide.title
        },
        secTitle() {
            return this.slide.secondTitle
        },
        cta() {
            return this.slide.cta
        },
        // index() {
        //     return this.key
        // },
        // currentIndex() {
        //     return this.store.currentIndex
        // }
    },
    created() {
        console.log(this.slide)
        console.log(this.img)
    }
}
</script>
<template>
    <div class="slide">
        <img :src="slide.img" alt="">
        <div class="slide-text">
            <h1 class="title">{{ title }}</h1>
            <h4 class="sec-title">{{ secTitle }}</h4>
            <button class="btn">
                <a href="#">{{ cta }}</a>
            </button>
        </div>
    </div>
        <!-- <div class="slide-text">
        <h1 class="title">{{ slide.title }}</h1>
        <h4 class="text">{{ secTitle }}</h4>
        <button class="btn">
            <a href="#">{{ cta }}</a>
        </button>
        </div> -->
        
    
</template>
<style lang="scss" scoped>
.slide {
    display: none;
}
</style>