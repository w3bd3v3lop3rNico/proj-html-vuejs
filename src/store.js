import { reactive } from 'vue';

export const store = reactive({
    hero: {
        img: '/imgs/slider2-1.jpg',
        title: 'Football Club Sport Club',
        secondTitle: 'Private football matches',
        cta: 'learn more',
    },
    proposedMatch: {
        club1Img: '/imgs/club-1.png',
        club1Name: 'Instanbul Sports',
        club2Img: '/imgs/club-2.png',
        club2Name: 'United Fs Club',
        date: 'October 20, 2022 17:00 pm',
        stadium: 'Expert Stadium'
    },
    clubs: [
        {
            img: 'club-1.png',
            name: 'Instanbul Sports'
        },
        {
            img: 'club-2.png',
            name: 'United Fs Club'
        },
        {
            img: 'club-3.png',
            name: 'Schalke Club'
        },
        {
            img: 'club-4.png',
            name: 'Inter Club'
        },
        {
            img: 'club-5.png',
            name:'Madrid Club'
        },
        {
            img: 'club-6.png',
            name: 'Schalke Club'
        },
        {
            img: 'club-7.png',
            name: 'Arsenal Club'
        },
        {
            img: 'club-8.png',
            name: 'Bayern Club'
        },
        {
            img: 'club-9.png',
            name: 'Atletico Club'
        }
    ],
    matchDays: [
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
        {
            date: 'October 20, 2022 17:00 pc',
            stadium: 'Expert Stadium'
        },
    ]
    

});