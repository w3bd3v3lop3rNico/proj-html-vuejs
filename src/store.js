import { reactive } from 'vue';

export const store = reactive({
    heros: {
        img: '/imgs/slider2-1.jpg',
        title: 'Football Club Sport Club',
        secondTitle: 'Private football matches',
        cta: 'learn more',
    }
    // heroCurrentIndex: 1,

    // heros: [
    //     {
    //         img:'slider1-1.jpg',
    //         title:'Football Club Sport Club',
    //         secondTitle: 'Private football matches',
    //         cta:'learn more',
    //     },
    //     {
    //         img:'slider2-1.jpg',
    //         title:'Football Club Sport Club',
    //         secondTitle: 'Private football matches',
    //         cta:'learn more',
    //     },
    //     {
    //         img:'slider3.jpg',
    //         title:'Football Club Sport Club',
    //         secondTitle: 'Private football matches',
    //         cta:'learn more',
    //     },
    //     {
    //         img:'slider4.jpg',
    //         title:'Football Club Sport Club',
    //         secondTitle: 'Private football matches',
    //         cta:'learn more',
    //     },
    // ]

});