<template>
    <footer>
        <div class="container" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <div class="footer-wap linear-blue">
                <div class="row">
                    <div class="col-md-6">
                        <div class="footer-logo mb-3">
                            <img src="@/assets/images/LogoDuoi.svg">
                        </div>
                        <p>{{$t('footer.01')}}</p>

                    </div>
                    <div class="col-md-4 text-center">
                        <h3>{{$t('footer.02')}}</h3>
                        <ul class="listsocial">
                            <li class="mb-2">
                                <a href="https://twitter.com/PushSwap" target="_blank">
                                <!--<a href="javascript:" target="_blank">-->
                                    <img src="@/assets/images/twitter.svg" alt="" class="mr-2"> Twitter
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="https://t.me/pushswaporg" target="_blank">
                                <!--<a href="javascript:" target="_blank">-->
                                    <img src="@/assets/images/telegram.svg" alt="" class="mr-2"> Telegram
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="https://www.youtube.com/channel/UCRlfEvQco_rfa5u_AZi34Xw" target="_blank">
                                <!--<a href="javascript:" target="_blank">-->
                                    <img src="@/assets/images/youtube.svg" class="mr-2"> Youtube
                                </a>
                            </li>
                            <li> 
                                <a href="javascript:">
                                    <img src="@/assets/images/discord.svg" alt="" class="mr-2"> Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h3>{{$t('footer.03')}}</h3>
                        <ul>
                            <li><a href="https://github.com/Pushswapp" target="_blank">Github</a></li>
                            <li><a href="javascript:">Support</a></li>
                            <li><a href="https://doc.pushswap.org/" target="_blank">Docs </a></li>
                        </ul>
                    </div>

                </div>

            </div>
            <div class="copyright">
                {{$t('footer.04')}}
            </div>
        </div>
    </footer>

</template>

<script>

export default {
    name: "Footer"
}
</script>

<style scoped>

</style>
