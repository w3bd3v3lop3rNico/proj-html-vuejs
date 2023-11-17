<script>
</script>
<template>
    <footer class="container">
        <div class="row">
            <ul class="col-3 contacts">
                <li class="logo">
                    <figure>
                        <img src="/imgs/logo-footer-football.png" alt="">
                    </figure>
                </li>
                <li class="contacts-item">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                    </div>
                    <div>
                        New Jersey, USA
                    </div>
                </li>
                <li class="contacts-item">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-phone-volume" />
                    </div>
                    <div>
                        +1(234) 567 89 10
                    </div>
                </li>
                <li class="contacts-item">
                    <div class="icon">
                        <font-awesome-icon icon="fa-regular fa-envelope" />
                    </div>
                    <div>
                        exemple@exemple.com
                    </div>
                </li>
                <li>
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
                </li>
            </ul>
            <div class="col-5 newsletter">
                <div class="newsletter-text">
                    <h3>Join Our Newsletter</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut dolorum beatae vitae qui commodi dolor?</p>
                </div>
                <form action="">
                    <input type="email" placeholder="Your mail address" name="mail-address">
                    <input type="submit" name="mail-address" class="btn">
                </form>
            </div>
            <div class="col-2 education">
                <h3>Education</h3>
                <ul class="links">
                    <li class="link" v-for="(eduLink, idx) in 4" :key="idx">
                        Fixtures & Results
                    </li>
                </ul>
            </div>
            <div class="col-2 links">
                <h3>Education</h3>
                <ul class="links">
                    <li class="link" v-for="(eduLink, idx) in 4" :key="idx">
                        Fixtures & Results
                    </li>
                </ul>
            </div>

        </div>
        <div class="row">
            <div class="col-12 rights">
                <p>@2022 Football Club - All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../styles/partials/colors-palette' as *;
    footer {
        background-image: url(/imgs/footer-bg-football.jpg);
        color: $light;
        padding: 20px;

        .logo {
            width: 80px;
        }

        .contacts-item{
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .icon {
            font-size: 30px;
        }
        .social {
            display: flex;
            justify-content: space-between;
            .icon {
                padding: 0 10px;
                border: 1px solid $light;
            }
        }
        .rights {
            padding: 20px 0;
            text-align: center;
        }
    }
</style>