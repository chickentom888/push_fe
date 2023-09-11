<template>
  <div class="box-dex push-lock mb-5">
        <div class="container" data-aos="fade-up" data-aos-delay="200">
            <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
            <span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>

            <div class="box-swap position-relative">
                <span class="decor19"> <img src="@/assets/images/decor2.png"></span>
                <div class="top-swap m-0 pl-5 pr-5 d-flex align-items-center justify-content-between">
                    <div class="top-upcoming m-0">
                        <img src="@/assets/images/avar1.png" alt="" class="img">
                        <span class="name fs-24 m-0">Ai Musk </span>
                    </div>
                    <div class="clearfix f-Nunito d-flex">
                        <span class="mr-3">0x2345...5Ra3 <a href="#"><img src="@/assets/images/icon-save-small.svg"
                                    class="ml-1"></a></span>
                        <span>BscScan <a href="#"><img src="@/assets/images/icon-growth-black.svg" class="ml-1"></a></span>
                    </div>
                </div>

                <div class="creat-ilo">
                    <form class="formcontrol createsale  mt-4">
                        <div class="form-group formlink">
                            <input type="text" class="form-control" value=""
                                :placeholder="$t('placeholder.11')">
                            <span class="txticon"> <img src="@/assets/images/social1.svg" alt=""></span>
                        </div>
                        <div class="form-group formlink">
                            <input type="text" class="form-control" value=""
                                :placeholder="$t('placeholder.12')">
                            <span class="txticon"> <img src="@/assets/images/social2.svg" alt=""></span>
                        </div>
                        <div class="form-group formlink">
                            <input type="text" class="form-control" value=""
                                :placeholder="$t('placeholder.13')">
                            <span class="txticon"> <img src="@/assets/images/social5.svg" alt=""></span>
                        </div>
                        <div class="form-group formlink">
                            <input type="text" class="form-control" value=""
                                :placeholder="$t('placeholder.14')">
                            <span class="txticon"> <img src="@/assets/images/social3.svg" alt=""></span>
                        </div>
                        <div class="form-group formlink">
                            <input type="text" class="form-control" value=""
                                :placeholder="$t('placeholder.15')">
                            <span class="txticon"> <img src="@/assets/images/social4.svg" alt=""></span>
                        </div>
                        <div class="form-group">
                            <label>Avatar</label>
                            <input type="text" class="form-control" value="" :placeholder="$t('placeholder.16')">
                            <span class="f-Nunito fs-14">Your picture must be at leasse 60px x 60px</span>
                        </div>
                        <div class="form-group">
                            <label>Cover</label>
                            <input type="text" class="form-control" value="" :placeholder="$t('placeholder.17')">
                            <span class="f-Nunito fs-14">Your picture must be at leasse 149px x 87px</span>
                        </div>
                    </form>
                    <div class="box-Upcoming mt-4">
                        <div class="row justify-content-center">
                            <div class="col-md-8 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                                <div class="card">
                                    <div class="top-upcoming">
                                        <span class="avartar-bg"></span>
                                        <div class="clearfix">
                                            <span class="name">Amber Soul Stone</span>
                                            <ul class="list">
                                                <li>
                                                    <a href="#"><span class="bg-social1 bg-radius"></span></a>
                                                </li>
                                                <li>
                                                    <a href="#"><span class="bg-social2 bg-radius"></span></a>
                                                </li>
                                                <li>
                                                    <a href="#"><span class="bg-social3 bg-radius"></span></a>
                                                </li>
                                                <li>
                                                    <a href="#"><span class="bg-social4 bg-radius"></span></a>
                                                </li>
                                                <li>
                                                    <a href="#"><span class="bg-social5 bg-radius"></span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <span class="armorial"><img src="@/assets/images/armorial.svg"> BSC</span>
                                    </div>
                                    <div class="body-upcoming">
                                        <div class="custom-process mb-4">
                                            <div class="d-flex justify-content-between mb-2">
                                                <span class="f-Nunito fs-14">1000/3000 USDT</span>
                                                <span class="f-Nunito fs-14 d-flex"> 400 <img src="@/assets/images/people.svg"
                                                        alt="" class="ml-1">
                                                </span>
                                            </div>
                                            <div class="progress">

                                                <div class="progress-bar" role="progressbar" style="width: 25%"
                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-center f-Nunito mb-4 clgreen">Success</p>
                                        <div class="box-gray">
                                            <ul class="list justify-content-center">
                                                <li class="m-0 w-100">
                                                    <span class="txtname">Starts Wed 27th Apr 17:60 your time</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bottom-upcoming justify-content-center">
                                        <div class="time-in d-flex">
                                            <img src="@/assets/images/time-in.svg" alt="" class="mr-2">
                                            <div class="clearfix">
                                                <span class="f-Nunito d-block fw-bold ">Bid ended</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-center mt-5 mb-5"><a href="#"
                                        class="btn-gray btn-blue btn-bluebig w-100 fw-bold">
                                        Sale
                                        <img src="@/assets/images/dot-l-black.svg" class="ml-3">
                                    </a></p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <span class="decor6"> <img src="@/assets/images/decor1.png"></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>