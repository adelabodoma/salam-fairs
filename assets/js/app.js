jQuery(document).ready(function ($) {
  const swiper = new Swiper(".header__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".header__swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".header__swiper .swiper-button-next",
      prevEl: ".header__swiper .swiper-button-prev",
    },
  });

  const statisticsSwiper = new Swiper(".statistics__swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".statistics__swiper .swiper-button-next",
      prevEl: ".statistics__swiper .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    },
  });

  const ProgramSwiper = new Swiper(".program__swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".program__controls .swiper-button-next",
      prevEl: ".program__controls .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    on: {
      init: function () {
        // checkArrow('.program__controls');
      },
      resize: function () {
        // checkArrow('.program__controls');
      }
    }
  });

  const activitiesSwiper = new Swiper(".activities__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".activities__controls .swiper-button-next",
      prevEl: ".activities__controls .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    },
    on: {
      init: function () {
        // checkArrow('.activities__controls');
      },
      resize: function () {
        // checkArrow('.activities__controls');
      }
    }
  });

  const testimonialSwiper = new Swiper(".testimonial__swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".testimonial__controls .swiper-button-next",
      prevEl: ".testimonial__controls .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      },
    },
    on: {
      init: function () {
        // checkArrow('.testimonial__controls');
      },
      resize: function () {
        // checkArrow('.testimonial__controls');
      }
    }
  });

  const mediaSwiper = new Swiper(".media-center__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".media-center__controls .swiper-button-next",
      prevEl: ".media-center__controls .swiper-button-prev",
    }
  });

  const twitterSwiper = new Swiper(".twitter-widget__swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".twitter-widget__controls .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".twitter-widget__controls .swiper-button-next",
      prevEl: ".twitter-widget__controls .swiper-button-prev",
    },
    on: {
      init: function () {
        // checkArrow('.twitter-widget__controls', 'flex');
      },
      resize: function () {
        // checkArrow('.twitter-widget__controls', 'flex');
      }
    }
  });


  function checkArrow(className, display = "block") {
    var arrowsWrapper = document.querySelector(className)
    if (window.innerWidth < 768) {
      arrowsWrapper.style.display = 'none';
    } else {
      arrowsWrapper.style.display = display;
    }
  }

  // REMOVE SPINNER
  setTimeout(() => {
    $('.loader').fadeOut('slow');
  }, 1000)


  // SEARCH FUNCTIONALITY
  $('#openSearchBtn').on('click', () => {
    $('.header__nav__search').toggle();
    $('body').addClass('backdrop');
  })

  $('#openSearchBtnWithMobile').on('click', () => {
    topFunction()
    $('.header__nav').show();
    $('.header__nav__search').show().css('bottom', '-85px');;
    $('.header__nav > .container').hide();

    $('body').addClass('backdrop');
  })

  $('#closeSearchBtn').on('click', () => {
    $('.header__nav__search').toggle();
    $('body').removeClass('backdrop');
  })

  const topButton = document.getElementById("gotToTopButton");
  const headerNav = document.querySelector(".header__mobile-nav");
  topButton.addEventListener('click', topFunction)

  window.onscroll = function () { scrollFunction(topButton, headerNav) };

  mobileNavMenuRender();


  let isAdvancedSearchOpened = false;
  $('#advancedSearch').on('click', (e) => {
    e.preventDefault();
    isAdvancedSearchOpened = !isAdvancedSearchOpened;


    if (isAdvancedSearchOpened) {
      e.target.innerHTML = '- بحث عادي';
      $('#advancedSearchContainer').fadeIn('slow');
    } else {
      e.target.innerHTML = '+ بحث متقدم';
      $('#advancedSearchContainer').fadeOut('slow');
    }
  })

});


function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    headerNav.style.top = '0px';
  } else {
    topButton.style.display = "none";
    headerNav.style.top = '60px';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		رجوع
	</a>
</li>`

  navExpand.forEach(item => {
    item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
    item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
    item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
  })


  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById('openMenu');
  const closeMenuBtn = document.getElementById('closeMenu');

  openMenuBtn.addEventListener('click', function () {
    $('.header__mobile').fadeIn('slow')
  })

  closeMenuBtn.addEventListener('click', function () {
    $('.header__mobile').fadeOut('slow')
  })
}


