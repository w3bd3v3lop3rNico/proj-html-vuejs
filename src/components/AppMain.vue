<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {

        }
    },
    created() {
        console.log(this.item.matchDays.club1Img)
        console.log(this.item.matchDays)
        console.log()

    }

}
</script>
<template>
    <div class="container">
        <!-- hero -->
        <div class="hero">
            <div class="slide">
                <img :src="item.hero.img" alt="">
                <div class="slide-text">
                    <h1 class="title">{{ item.hero.title }}</h1>
                    <h4 class="sec-title">{{ item.hero.secondTitle }}</h4>
                    <div class="btn">
                        <a href="#">{{ item.hero.cta }}</a>
                    </div>
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
        <!-- match proposto -->
        <div class="proposed-match">
            <div class="match-clubs">
                <div class="club club-1">
                    <div class="name">{{ item.proposedMatch.club1Name }}</div>
                    <img :src="item.proposedMatch.club1Img" alt="">
                </div>
                <p>vs</p>
                <div class="club club-2">
                    <img :src="item.proposedMatch.club2Img" alt="">
                    <div class="name">{{ item.proposedMatch.club2Name }}</div>
                </div>
            </div>
            <div class="match-info">
                <div class="match-date">
                    <font-awesome-icon icon="fa-regular fa-calendar-days" class="icon-match" />
                    <span>{{ item.proposedMatch.date }}</span>
                </div>
                <div class="match-location">
                    <font-awesome-icon icon="fa-solid fa-circle-plus" class="icon-match" />
                    <span>{{ item.proposedMatch.stadium }}</span>
                </div>

            </div>
            <div class="more-details">
                <a href="#">View Match Details</a>
            </div>
        </div>
        <!-- Upcoming matches -->
        <div class="upcoming-matches">
            <div class="row title">
                <div class="col-12">
                    <h4>Upcomig Matches</h4>
                </div>
            </div>
            <ul class="row">
                <li class="col-12 proposed-match" v-for="match, idx in 5" :key="idx">
                    <div class="match" v-if="idx < 5">
                        <div class="match-clubs">
                            <div class="club club-1">
                                <img :src="item.matchDays[idx].club1Img" alt="">
                                <div class="name">{{ item.matchDays[idx].club1Name }}</div>
                            </div>
                            <p>vs</p>
                            <div class="club club-2">

                                <div class="name">{{ item.matchDays[idx].club2Name }}</div>
                                <img :src="item.matchDays[idx].club2Img" alt="">
                            </div>
                        </div>
                        <div class="match-info">
                            <div class="match-date">
                                <font-awesome-icon icon="fa-regular fa-calendar-days" class="icon-match" />
                                <span>{{ item.matchDays[idx].date }}</span>
                            </div>
                            <div class="match-location">
                                <font-awesome-icon icon="fa-solid fa-circle-plus" class="icon-match" />
                                <span>{{ item.matchDays[idx].stadium }}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- players -->
        <div class="players section-container">
            <div class="row title">
                <div class="col-12">
                    <h4>Players</h4>
                </div>
            </div>
            <ul class="row">
                <li class="col-3" v-for="(player, idx) in 4">
                    <div class="card player">
                        <img src="/imgs/player1.jpg" alt="">
                        <div class="card-text">
                            <p class="number">10</p>
                            <p class="name">Pippo</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="btn">
                <a href="#">View All Players</a>
            </div>
        </div>
        <!-- ranking and match results -->
        <div class="results section-container">
            <div class="row">
                <table class="col-6 league-table">
                    <thead>
                        <tr>
                            <th colspan="7">League Table</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-legend">
                            <td colspan="3" class="team-header">Team</td>
                            <td>W</td>
                            <td>D</td>
                            <td>L</td>
                            <td>PTS</td>
                        </tr>
                        <tr v-for="(club, idx) in 9" :key="idx" class="ranking">
                            <td class="club-position">1</td>
                            <td>
                                <img src="/imgs/club-1.png" alt="">
                            </td>
                            <td class="club-name">Nome Squadra</td>
                            <td>18</td>
                            <td>2</td>
                            <td>0</td>
                            <td>42</td>
                        </tr>
                    </tbody>
                    <tfoot class="t-footer">
                        <tr>
                            <td colspan="7">View Full League Table</td>
                        </tr>
                    </tfoot>
                </table>
                <table class="col-6">
                    <thead>
                        <tr>
                            <th>Fixtures & Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="proposed-match" v-for="(fixture, idx) in 9" :key="idx">
                            <td class="match">
                                <div class="match-clubs">
                                    <div class="club club-1">
                                        <img :src="item.matchDays[idx].club1Img" alt="">
                                        <div class="name">{{ item.matchDays[idx].club1Name }}</div>
                                    </div>
                                    <p>vs</p>
                                    <div class="club club-2">

                                        <div class="name">{{ item.matchDays[idx].club2Name }}</div>
                                        <img :src="item.matchDays[idx].club2Img" alt="">
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="t-footer">
                        <tr>
                            <td colspan="7">View Full League Table</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/colors-palette' as *;

// hero
.hero {
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .slide-text {
        position: absolute;
        top: 30%;
        right: 50%;
        transform: translateX(50%);
        // transform: translateY(50%);
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

// proposed match

.more-details {
    line-height: 40px;
    background-color: $dark;
    color: $light;
    padding: 0 20px;
    border-radius: 20px;
}

// Upcoming matches

.upcoming-matches {
    background-image: url(/imgs/saha.jpg);
    background-size: cover;
    background-position: center;
    color: $light;
    padding: 20px;

    .title {
        text-align: center;
        margin-bottom: 20px;
        font-size: 30px;
    }

    .proposed-match {
        .match {
            background-color: $dark-opacity;
            width: 100%;
            padding: 20px;
        }

    }

}

// players

.players {
    padding: 20px;
    background-image: url(/imgs/player.jpg);
    background-size: cover;
    background-position: center;
    color: $light;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        text-align: center;
        margin-bottom: 20px;
    }

    .col-3 {
        padding: 0 10px;

        .card {
            position: relative;

            img {
                border-radius: 20px;
                object-fit: cover;
                display: block;
            }

            .card-text {
                background-color: $dark;
                border-radius: 20px;
                text-align: center;
                padding: 10px 0;
                position: absolute;
                width: 100%;
                bottom: 0;
            }
        }

        margin-bottom: 20px;
    }

    .btn {
        background-color: $dark;
        border: 1px solid $light;
    }
}

// ranking and match results
table {
    font-size: 20px;
    font-weight: 20px;

    img {
        width: 30px;
        display: block;
    }

}

.results {
    padding: 20px;

    .league-table {
        border-collapse: collapse;
        table-layout: auto;
        text-align: center;

        .club-position {
            width: 10%;
        }

        .table-legend {
            background-color: $dark-opacity;
            color: $light;

            .team-header {
                text-align: left;
                padding: 0 0 0 5px;
            }
        }

        .ranking {
            background-color: $gray;

            .club-name {
                text-align: left;
            }
        }

        

        
    }
    // table {
    //     padding: 20px;
    // }
tr {
            line-height: 40px;
        }
    .t-footer {
            background-color: $dark;
            color: $light;
        }
}
</style>


