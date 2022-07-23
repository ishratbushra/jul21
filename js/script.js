//js
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
rating.create({
  'selector': '#rating'
});
rating.create({
  'selector': '#rating',
  // use Font Awesome Icons
  'unselectedIcon': 'fa fa-star-o red-font',
  'selectedIcon': 'fa fa-star',
});
rating.create({
  'selector': '#rating',
  'outOf': 10,
});
rating.create({
  'selector': '#rating',
  'defaultRating': 4,
});
rating.create({
  'selector': '#rating',
  'name': 'my-name',
});
rating.create({
  'selector': '#rating',
  'ratingClass': 'class-1 class-2',
});
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
//jq
Chocolat(document.querySelectorAll('.chocolat-image'), {
  // options here
})