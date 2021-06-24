jQuery(document).ready(function ($) {
  const swiper = new Swiper(".header__swiper", {
    slidesPerView: 1,
    direction: "vertical",
    pagination: {
      el: ".header__swiper .swiper-pagination",
      clickable: true,
    }
  });

  const sliderSelectors = ['.fairs__swiper', '.temp-fairs__swiper', '.youtube__swiper', '.partners__swiper', '.partners-2__swiper', '.sponsor__swiper', '.sponsor-2__swiper']

  sliderSelectors.forEach(selector => {
    const slide = new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: selector + "__controls .swiper-button-next",
        prevEl: selector + "__controls .swiper-button-prev",
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
        },
        resize: function () {
        }
      }
    })
  })

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


  /***********************************/
  $('#FAQAccordion').collapse({
    toggle: false
  })

  $('#FAQAccordion').on('hidden.bs.collapse', function (event) {
    console.log(event)
  })

});


function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    headerNav.style.top = '0px';
  } else {
    topButton.style.display = "none";
    // headerNav.style.top = '60px';
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


