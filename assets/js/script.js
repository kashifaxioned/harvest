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

// slick slider functionality for work section

$(".portfolio").slick({
  autoplay: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

