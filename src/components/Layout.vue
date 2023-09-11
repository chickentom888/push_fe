<template>
    <div>
        <header>
            <div class="main_nav">
                <div class="site-header">
                    <div class="logo mb-0">
                        <a href="index.html">
                            <img src="@/assets/images/logo2.svg">
                            <img src="@/assets/images/logomobile.svg" class="mobile">
                        </a>
                    </div>
                    <div id="navbar" class="navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li>
                                <a>
                                    <router-link to="/" exact active-class="active" class="router">
                                        Home
                                    </router-link>
                                </a>
                            </li>
                            <li><a>
                                SERVICES
                                <svg class="ic-dot ml-1" xmlns="http://www.w3.org/2000/svg" width="8"
                                     height="4" viewBox="0 0 8 4">
                                    <path id="Polygon_64" data-name="Polygon 64" d="M4,0,8,4H0Z"
                                          transform="translate(8 4) rotate(180)"/>
                                </svg>
                            </a>
                                <div class="sub-menu-wrap sub-service">
                                    <ul class="list">
                                        <li>
                                            <a>
                                                <span class="circle"> <img src="@/assets/images/ic-launch.svg"> </span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">Launch</span>
                                                    <span class="f-Nunito fs-14">Push Launch</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li><a href="/swap">
                                            <span class="circle"><img src="@/assets/images/ic-swap.svg"></span>
                                            <div class="clearfix">
                                                <span class="f-Nunito d-block fw-bold ">Swap</span>
                                                <span class="f-Nunito fs-14">Push Swap</span>
                                            </div>
                                        </a>
                                        </li>
                                        <li><a>
                                            <span class="circle"> <img src="@/assets/images/ic-lock.svg"> </span>
                                            <div class="clearfix">
                                                <span class="f-Nunito d-block fw-bold ">Lock</span>
                                                <span class="f-Nunito fs-14">Push Lock</span>
                                            </div>
                                        </a>
                                        </li>
                                        <li><a>
                                            <span class="circle"><img src="@/assets/images/ic-nft.svg"></span>
                                            <div class="clearfix">
                                                <span class="f-Nunito d-block fw-bold ">Nft</span>
                                                <span class="f-Nunito fs-14">Push Nft</span>
                                            </div>
                                        </a>
                                        </li>
                                        <li class="mb-0">
                                            <a>
                                                <span class="circle"> <img src="@/assets/images/ic-mint.svg"> </span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">Mint</span>
                                                    <span class="f-Nunito fs-14">Push Mint</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="mb-0">
                                            <a>
                                                <span class="circle"><img src="@/assets/images/ic-staking.svg"></span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">Staking</span>
                                                    <span class="f-Nunito fs-14">Push Staking</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="/swap">
                                    SWAP
                                </a></li>
                            <li>
                                <a>
                                    <router-link to="/staking" active-class="active" class="router">
                                        STAKING
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <router-link to="/affiliate" active-class="active" class="router">
                                    <a>
                                        AFFILIATE
                                    </a>
                                </router-link>
                            </li>
                            <li><a>
                                SECURITY
                                <svg class="ic-dot ml-1" xmlns="http://www.w3.org/2000/svg" width="8"
                                     height="4" viewBox="0 0 8 4">
                                    <path id="Polygon_64" data-name="Polygon 64" d="M4,0,8,4H0Z"
                                          transform="translate(8 4) rotate(180)"/>
                                </svg>
                            </a>
                                <div class="sub-menu-wrap">
                                    <ul class="list">
                                        <li><a>
                                            <span class="circle"> <img src="@/assets/images/ic-kyc.svg"> </span>
                                            <div class="clearfix">
                                                <span class="f-Nunito d-block fw-bold ">KYC</span>
                                                <span class="f-Nunito fs-14">Get KYC verified</span>
                                            </div>
                                        </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span class="circle"><img src="@/assets/images/ic-audit.svg"></span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">Audit</span>
                                                    <span class="f-Nunito fs-14">Audit for your project</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>


                <div class="right-menu">

                    <button type="submit" class="btn anim_btn fill">Connect Wallet</button>
                    <div class="language">
                        <img src="@/assets/images/ic-language.svg">
                        <div class="sub-language">
                            <ul class="list">
                                <li><a>
                                    English
                                </a>
                                </li>
                                <li><a>
                                    Deutsch
                                </a>
                                </li>
                                <li><a>
                                    Espanol
                                </a></li>
                                <li><a>
                                    Suomalainen
                                </a></li>
                                <li><a>
                                    Filipino
                                </a></li>
                                <li><a href="#">
                                    Magyar
                                </a></li>
                                <li><a href="#">
                                    Bahasa Indonesia
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="toggle-nav">
                        <a href="#"> <img src="@/assets/images/menu.svg"> </a>
                        <div class="sub-menu-wrap">
                            <ul class="list">
                                <li>
                                    <a href="#" class="active">
                                        <span class="circle"> <img src="@/assets/images/ic-home.svg"> </span> Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" id="showservice">
                                        <span class="circle"> <img src="@/assets/images/ic-services.svg"> </span>
                                        SERVICES
                                        <svg class="ic-dot ml-2" xmlns="http://www.w3.org/2000/svg" width="10"
                                             height="10"
                                             viewBox="0 0 8 4">
                                            <path id="Polygon_64" data-name="Polygon 64" d="M4,0,8,4H0Z"
                                                  transform="translate(8 4) rotate(180)"></path>
                                        </svg>
                                    </a>
                                    <ul class="listsub listmenu1">
                                        <li><a href="#">Push Launch</a></li>
                                        <li><a href="#">Push Lock</a></li>
                                        <li><a href="#">Push Mint</a></li>
                                        <li><a href="#">Push Swap</a></li>
                                        <li><a href="#">Push Nft</a></li>
                                        <li><a href="#">Push Staking</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="circle"> <img src="@/assets/images/ic-staking.svg"> </span>STAKING
                                    </a>
                                </li>
                                <li>
                                    <a href="#" id="showsecurty">
                                        <span class="circle"> <img src="@/assets/images/ic-audit.svg"> </span>SECURITY
                                        <svg
                                            class="ic-dot ml-2" xmlns="http://www.w3.org/2000/svg" width="10"
                                            height="10"
                                            viewBox="0 0 8 4">
                                            <path id="Polygon_64" data-name="Polygon 64" d="M4,0,8,4H0Z"
                                                  transform="translate(8 4) rotate(180)"></path>
                                        </svg>
                                    </a>
                                    <ul class="listsub listmenu">
                                        <li><a href="#">KYC <span class="d-block">Get KYC verified</span></a></li>
                                        <li><a href="#">Audit<span class="d-block">Audit for your project</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <div class="container" data-aos="fade-up" data-aos-delay="200">
                <div class="footer-wap linear-blue">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="footer-logo mb-3">
                                <img src="@/assets/images/logo-footer.svg">
                            </div>
                            <p>Top Decentralized Launchpad and Token Service Protocol</p>

                        </div>
                        <div class="col-md-4 text-center">
                            <h3>Contact Us</h3>
                            <ul class="listsocial">
                                <li class="mb-2">
                                    <a href="#">
                                        <img src="@/assets/images/twitter.svg" class="mr-2"> Twitter
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a href="#">
                                        <img src="@/assets/images/telegram.svg" class="mr-2"> Telegram
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="@/assets/images/discord.svg" class="mr-2"> Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-2">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="docs/PushSwap EN.docx" download="document.pdf">Docs </a></li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div class="copyright">
                    Copyright 2023 © All Right Reserved Design by Push Swap
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-active {
    padding: 0px !important;
}

.router-link-exact-active {
    padding: 0px !important;
}

.router {
    padding: 0px !important;
}

</style>