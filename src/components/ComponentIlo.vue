<template>
  <div class="col-md-4" data-aos="zoom-in" data-aos-delay="400">
					<div class="card">
						<div class="top-upcoming" @click="showModal()">
							<img src="@/assets/images/avar1.png" class="img" data-toggle="modal" data-target="#userdetail">
							<div class="clearfix">
								<span class="name">Ai Musk modal</span>
								<ul class="list">
									<li>
										<a href="#"><img src="@/assets/images/social1.svg" alt=""> </a>
									</li>
									<li>
										<a href="#"><img src="@/assets/images/social2.svg" alt=""> </a>
									</li>
									<li>
										<a href="#"><img src="@/assets/images/social3.svg" alt=""> </a>
									</li>
									<li>
										<a href="#"><img src="@/assets/images/social4.svg" alt=""> </a>
									</li>
									<li>
										<a href="#"><img src="@/assets/images/social5.svg" alt=""> </a>
									</li>
								</ul>
							</div>
							<span class="armorial"><img src="@/assets/images/armorial.svg"> BSC</span>
						</div>
						<div class="body-upcoming">
							<div class="custom-process mb-4">
								<div class="d-flex justify-content-between mb-2">
									<span class="f-Nunito fs-14">1000/3000 USDT</span>
									<span class="f-Nunito fs-14 d-flex"> 400 <img src="@/assets/images/people.svg" alt=""
											class="ml-1">
									</span>
								</div>
								<div class="progress">

									<div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25"
										aria-valuemin="0" aria-valuemax="100">
									</div>
								</div>
							</div>
							<p class="text-center mb-4"><a href="#" class=" btn-style"><img src="@/assets/images/icon-edit.svg"
										alt="" class="mr-1">
									Register</a></p>
							<div class="box-gray">
								<ul class="list">
									<li>
										<span class="txtname">Total Raise</span>
										<span class="f-Nunito fs-14 cl5D">421444</span>
									</li>
									<li>
										<span class="txtname">Purchase Limit</span>
										<span class="f-Nunito fs-14 cl5D">547565</span>
									</li>
									<li class="mb-0">
										<span class="txtname">Time</span>
										<span class="f-Nunito fs-14 cl5D">03/30/2022</span>
									</li>
									<li class="mb-0">
										<span class="txtname">Price</span>
										<span class="f-Nunito fs-14 cl5D">0.0009 $</span>
									</li>
								</ul>
							</div>
						</div>
						<div class="bottom-upcoming">
							<div class="time-in d-flex">
								<img src="@/assets/images/time-in.svg" alt="" class="mr-2">
								<div class="clearfix">
									<span class="f-Nunito d-block fw-bold ">End in</span>
									<span class="f-Nunito fs-14 cl5D">48:00:00</span>
								</div>
							</div>
							<div class="time-lissting d-flex">
								<img src="@/assets/images/time-listing.svg" alt="" class="mr-2">
								<div class="clearfix">
									<span class="f-Nunito d-block fw-bold ">Listing Time</span>
									<span class="f-Nunito fs-14 cl5D">48:00:00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
</template>

<script>
export default {
    methods:{
        showModal(){
            this.$emit("showModal")
        }
    }
}
</script>

<style>

</style>