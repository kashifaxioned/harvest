/* Author: 

*/

// haburger functionality

$(".hamburger-btn").click(showNav)
$(".close-btn").click(hideNav)

let navSection = $(".nav-section")

function showNav() {
  $(".hamburger-btn").addClass("hide")
  navSection.addClass("flexShow")
}

function hideNav() {
  $(".hamburger-btn").removeClass("hide")
  navSection.removeClass("flexShow")
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
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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

// form validation functionality

// form validation

let formElements = $(".contact-form .form-group")
let fullName = $(".name")
let subject = $(".subject")
let email = $(".email")
let company = $(".company")
let policy = $(".policy")
let val;
let nameAttr;

// validation for contact form for no input
$(".submit-btn").click((e) => {
  e.preventDefault()
  $(".error").addClass("hide")
  formElements.map((idx, ele) => {
    formEle = $(ele).children(":nth-child(2)")
    validate(formEle)
    validateNotChecked(policy)
  })
  $(".contact-form").trigger("reset")
})

// validation function for no input
function validate(formEle) {
  val = formEle.val()
  console.log(val.length)
  if (val.length === 0) {
    emptyValidate(formEle)
  }
}


// function for selecting the target element

function emptyValidate(formEle) {
  nameAttr = formEle.attr("name")
  switch (nameAttr) {
    case "Name":
    case "Email":
    case "Company":
    case "Message":
      noValue(nameAttr)
    default:
  }
}

// function for DOM manipulation after validating
function noValue(name) {
  $(`input[name = "${name}"]`).addClass("error-border").next().removeClass("hide").html(`Please write your ${name}`)
  $(`textarea[name = "${name}"]`).addClass("error-border").next().removeClass("hide").html(`Please write your ${name}`)
}

// No value validation for policy checked
function validateNotChecked(policy) {
  if (!policy.prop("checked")) {
    policy.next().addClass("error-border");
    $(".form-group-checkbox .error").removeClass("hide").html("Please accept the terms and conditions");
  } else {
    policy.next().removeClass("error-border");
    $(".form-group-checkbox .error").addClass("hide");
  }
}


// on focus validtaion
fullName.on("blur", function (e) {
  stringValidate(e)
})
company.on("blur", function (e) {
  stringValidate(e)
})
email.on("blur", function (e) {
  emailValidate(e)
})


//  regular expression for string and email
let strRegEx = /^[A-Za-z]+$/
let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let targetElement;

// function for string validation
function stringValidate(e) {
  targetElement = $(e.target)
  if(targetElement.val().length === 0){
    targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} should not be epmty`)
  }
  else if ((targetElement.val().length < 12) && (targetElement.val().length > 3)) {
    targetElement.removeClass("error-border").next().addClass("hide")
    if (strRegEx.test(targetElement.val())) {
      targetElement.removeClass("error-border").next().addClass("hide")
    } else {
      targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} should contain only characters`)
    }
  } else {
    targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} is to small`)
  }
}

// function for email validation
function emailValidate(e) {
  targetElement = $(e.target)
  if(targetElement.val().length === 0){
    targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} should not be epmty`)
  }
  else if ((targetElement.val().length > 6)) {
    targetElement.removeClass("error-border").next().addClass("hide")
    if (emailRegEx.test(targetElement.val())) {
      targetElement.removeClass("error-border").next().addClass("hide")
    } else {
      targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} is incorrect`)
    }
  } else {
    targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} is to small`)
  }
}

policy.on("blur", () => {
  if (!policy.prop("checked")) {
    policy.next().addClass("error-border");
    $(".form-group-checkbox .error").removeClass("hide").html("Please accept the terms and conditions");
  } else {
    policy.next().removeClass("error-border");
    $(".form-group-checkbox .error").addClass("hide");
  }

})

// our-work filter

let categoryList = $(".category-item").children()
let workList = $(".our-work-item")

categoryList.click((e) => {
  let targetCategory = $(e.target)
  categoryList.map((idx, ele) => {
    let currentItem = $(ele)
    currentItem.removeClass("active-category")
    if(e.target === ele) {
      workList.map((workIdx, workEle) => {
        if(idx === 0) {
          $(workEle).removeClass("hide")
        } else if((idx === workIdx)) {
          filterList(idx)
        }else $(workEle).addClass("hide")
      })
    }
  })
  targetCategory.addClass("active-category")
})

function filterList (inpIdx) {
  workList.map((idx, ele) => {
    if(inpIdx < idx + 2){
      $(ele).removeClass("hide")
    }else {
      $(ele).addClass("hide")
    }
  })
}
