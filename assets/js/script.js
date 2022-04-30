/* Author: 

*/

// haburger functionality

$(".hamburger-btn").click(showNav)
$(".close-btn").click(hideNav)

let navSection = $(".nav-section")

function showNav() {
  $(".hamburger-btn").addClass("hide")
  navSection.addClass("responsive-nav")
}

function hideNav() {
  $(".hamburger-btn").removeClass("hide")
  navSection.removeClass("responsive-nav")
}


// nav filter

let navItems = $(".nav-items")

navItems.children().click((e) => {
  navItems.children().map((idx, ele) => {
    $(ele).parent().removeClass("active")
  })
  $(e.target).parent().addClass("active")
})

// slick slider functionality for banner section

$(".banner-list").slick({
  autoplay: true,
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
})