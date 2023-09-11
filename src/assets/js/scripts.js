
  var scrollTrigger = 32;

  // $(document).ready(function() {
  //
  // });
  $(window).on('scroll', function () {

      var scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      $('nav.navbar').addClass('scrolled');
    } else {
      $('nav.navbar').removeClass('scrolled');
    }
  });


  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }


$('input[name="homepage_2"]').change(function(event) {
  /* Act on the event */
  $('.homepage_2target').addClass('d-none');


  var target = $('input[name="homepage_2"]:checked').data("target");
$('#' + target).removeClass('d-none');
});
