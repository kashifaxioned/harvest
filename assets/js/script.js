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





















