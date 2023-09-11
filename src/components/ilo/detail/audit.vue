<template>
  <div>
  <div class="card mb-4">
    <div class="row">
      <div class="col-12 text-center text-18 mb-3">
      <span class="text-success">
        <i class="icofont-check-circled text-32"></i>
        Verifiled
      </span>
        &nbsp;
        &nbsp;
        <span>
        by <strong>solidproof.io</strong>
      </span>
      </div>

      <div class="col-12">
        <p class="mb-3 text-18 ">
          # No issues were found <br>
          The contract does not contain issues of high or medium criticality.
        </p>

        <p class="mb-3 text-18 ">
          # Notice <br>
          Contract can be manipulated by owner functions. The ownership should be renounced.
        </p>
        <p class="mb-3 text-18 ">
          Not a financial advice. Always DYOR.
        </p>

        <p>
          <a href="#" class="text-gold  text-18 ">
            View audit
            <i class="icofont-external-link"></i>
          </a>
        </p>

      </div>
    </div>
  </div>


  <div class="card">
    <div class="row">
      <div class="col-12 text-center text-18">
      <span class="text-success">
        <i class="icofont-search-job text-32"></i>
        Team is KYC verified
      </span>
        &nbsp;
        &nbsp;
        <span>
        by <strong>solidproof.io</strong>
      </span>
      </div>


    </div>
  </div>

  <div class="row text-18">
    <div class="col-12  mt-3 col-md-6">
      <a class="text-gold" href="#">Log in</a> to submit an audit
    </div>
    <div class="col-12 mt-3 col-md-6 text-md-right">
      <a class="text-gold" href="#">Log in</a> to submit KYC info
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "audit"
}
</script>

<style scoped>
  div[class^="col-"] {
    padding: 0 15px 0 15px;
  }
  .row {
    margin: 0 -15px 0 -15px;
  }
</style>
