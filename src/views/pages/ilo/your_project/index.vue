<template>
  <div>
    <div class="box-dex push-lock mb-5">
		<div class="container" data-aos="fade-up" data-aos-delay="200">
			<div class="row align-items-center position-relative">
				<div class="col-md-7">


					<h3 class="title mb-4">Joined <span>Project</span></h3>
					<p class="f-Nunito cl9F9 fs-18 mb-4">Are you looking for an intensive less resources alternative for
						mining?</p>

					<p class="f-Nunito cl9F9 fs-18 mb-4"> Use your BSC tokens to earn more token in the passive way.
					</p>


					<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
				</div>

				<div class="col-md-5 position-relative">
					<p class="hero-img mt-5"> <img src="@/assets/images/banner10.png" class="animated"> </p>


					<span class="decor7"> <img src="@/assets/images/decor1.png"></span>
				</div>
				<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
			</div>
			<ul class="listproject nav">
				<li><a href="#project1" data-toggle="tab" aria-expanded="true" class="active">ILO</a> </li>
				<li><a href="#project2" data-toggle="tab" aria-expanded="false">ILOV</a> </li>
				<li><a href="#project3" data-toggle="tab" aria-expanded="false">IDO</a> </li>
				<li><a href="#project4" data-toggle="tab" aria-expanded="false">IDOV</a> </li>
			</ul>
		</div>
	</div>
	<div class="experience d-flex align-items-center mb-5">

		<div class="container mt-5" data-aos="fade-up" data-aos-delay="200">
			<div class="row">
				<div class="col-md-5 align-items-center d-flex">
					<span class="fs-18 fw-bold f-Nunito clfff">8 presales</span>
				</div>

				<div class="col-md-3">
					<div class="select-boxstyle mt-2">
						<div class="select-box__current" tabindex="2">
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="3" value="3" name="Ben"
									checked="checked" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-all.svg" class="mr-2"> All</p>
							</div>
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="4" value="4" name="Ben" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-upcoming.svg" class="mr-2">
									Upcoming</p>
							</div>
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="5" value="5" name="Ben" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-live.svg" class="mr-2"> Live</p>
							</div>
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="6" value="6" name="Ben" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-successsmall.svg" class="mr-2">
									Success</p>
							</div>
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="7" value="7" name="Ben" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-failed.svg" class="mr-2"> Failed
								</p>
							</div><img class="select-box__icon" src="@/assets/images/dot-b.svg" alt="Arrow Icon"
								aria-hidden="true" />
						</div>
						<ul class="select-box__list">
							<li>
								<label class="select-box__option" for="3" aria-hidden="aria-hidden"><img
										src="@/assets/images/icon-all.svg" class="mr-2">All</label>
							</li>
							<li>
								<label class="select-box__option" for="4" aria-hidden="aria-hidden"><img
										src="@/assets/images/icon-upcoming.svg" class="mr-2">Upcoming</label>
							</li>
							<li>
								<label class="select-box__option" for="5" aria-hidden="aria-hidden"><img
										src="@/assets/images/icon-live.svg" class="mr-2">Live</label>
							</li>
							<li>
								<label class="select-box__option" for="6" aria-hidden="aria-hidden"><img
										src="@/assets/images/icon-successsmall.svg" class="mr-2">Success</label>
							</li>
							<li>
								<label class="select-box__option" for="7" aria-hidden="aria-hidden"><img
										src="@/assets/images/icon-failed.svg" class="mr-2">Failed</label>
							</li>
						</ul>
					</div>

				</div>
				<div class="col-md-4">
					<input type="text" class="form-control f-Nunito heigh54" :placeholder="$t('placeholder.10')">
				</div>
			</div>

		</div>
	</div>
	<div class="tab-content">
		<div class="tab-pane fade active show" id="project1">
			<div class="panel-content">
				<div class="box-Upcoming">
					<div class="container" data-aos="fade-up" data-aos-delay="200">
						<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
						<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
						<span class="decor6"> <img src="@/assets/images/decor2.png"></span>
						<div class="row">
                            <ComponentIloVue />
                        </div>
						<span class="decor7"> <img src="@/assets/images/decor1.png"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane fade" id="project2">
			<div class="panel-content">
				<div class="box-Upcoming">
					<div class="container" data-aos="fade-up" data-aos-delay="200">
						<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
						<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
						<span class="decor6"> <img src="@/assets/images/decor2.png"></span>
						<div class="row">
                            <ComponentIloVue />
                        </div>
						<span class="decor7"> <img src="@/assets/images/decor1.png"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane fade" id="project3">
			<div class="panel-content">
				<div class="box-Upcoming">
					<div class="container" data-aos="fade-up" data-aos-delay="200">
						<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
						<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
						<span class="decor6"> <img src="@/assets/images/decor2.png"></span>
						<div class="row">
                            <ComponentIloVue />
                        </div>
						<span class="decor7"> <img src="@/assets/images/decor1.png"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane fade" id="project4">
			<div class="panel-content">
				<div class="box-Upcoming">
					<div class="container" data-aos="fade-up" data-aos-delay="200">
						<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
						<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
						<span class="decor6"> <img src="@/assets/images/decor2.png"></span>
						<div class="row">
                            <ComponentIloVue />
                        </div>
						<span class="decor7"> <img src="@/assets/images/decor1.png"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import ComponentIloVue from '../../../../components/ComponentIlo.vue';
export default {
    components:{ComponentIloVue}
}
</script>

<style>

</style>