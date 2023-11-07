(function ($) {

	"use strict";
  

/*******************************************************/
/****************** ## Preloader *******************/
/*******************************************************/

	function preloader() {
	  $('.valorwide_preloader_in').fadeOut();
	  $('.valorwide_preloader').delay(150).fadeOut('slow');
	}
  
	preloader();
  

/*******************************************************/
/****************** ## Header Style  *******************/
/*******************************************************/

	function headerStyle() {
	  if ($('.valorwide_main-header').length) {
		var windowpos = $(window).scrollTop();
		var siteHeader = $('.valorwide_main-header');
		var scrollLink = $('.scroll-top');
		if (windowpos >= 110) {
		  siteHeader.addClass('fixed-header');
		  scrollLink.addClass('open');
		} else {
		  siteHeader.removeClass('fixed-header');
		  scrollLink.removeClass('open');
		}
	  }
	}
  
	headerStyle();
  

/*******************************************************/
/****************** ## Water Effects Ripples  *******************/
/*******************************************************/

	function rippleInit() {
	  $('.valorwide_ripple_version').ripples({
		dropRadius: 20,
		perturbance: 0.04,
	  });
	}
  
	rippleInit();
  
  
/*******************************************************/
/****************** ## Rotate text  *******************/
/*******************************************************/

  
	if ($('.circle-main').length) {
	  var text_1 = document.querySelector(".text_1 p.text_2");
	  text_1.innerHTML = text_1.innerHTML.split('').map(
		(char, i) =>
		`<span style="transform:rotate(${i*10}deg)">${char}</span>`
	  ).join('');
	}
  

/*******************************************************/
/****************** ## Parallax Scene for Icons  *******************/
/*******************************************************/

	if ($('.parallax-scene-1').length) {
	  var scene = $('.parallax-scene-1').get(0);
	  var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-2').length) {
	  var scene = $('.parallax-scene-2').get(0);
	  var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-3').length) {
	  var scene = $('.parallax-scene-3').get(0);
	  var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-4').length) {
	  var scene = $('.parallax-scene-4').get(0);
	  var parallaxInstance = new Parallax(scene);
	}
  

/*******************************************************/
/****************** ## Submenu Dropdown Toggle  *******************/
/*******************************************************/

	if ($('.valorwide_main-header li.dropdown ul').length) {
	  $('.valorwide_main-header .navigation li.dropdown').append(
		'<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');  
	}
  
	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {
  
	  var mobileMenuContent = $('.valorwide_main-header .menu-area .main-menu').html();
	  $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
	  $('.sticky-header .main-menu').append(mobileMenuContent);
  
	  //Dropdown Button
	  $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	  });
	  //Dropdown Button
	  $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
		$(this).prev('.megamenu').slideToggle(900);
	  });
	  //Menu Toggle Btn
	  $('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	  });
  
	  //Menu Toggle Btn
	  $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	  });
	}
  
  

/*******************************************************/
/****************** ## Nice Select  *******************/
/*******************************************************/

	$(document).ready(function () {
	  $('select:not(.ignore)').niceSelect();
	}); 
  
  
/*******************************************************/
/****************** ## Image Filters *******************/
/*******************************************************/

	$(window).on("load", function () {
  
	  if ($(".post-filter").length) {
		var postFilterList = $(".post-filter li");
		// for first init
		$(".filter-layout").isotope({
		  filter: ".filter-item",
		  animationOptions: {
			duration: 500,
			easing: "linear",
			queue: false
		  }
		});
  
		// on click filter links
		postFilterList.on("click", function () {
		  var Self = $(this);
		  var selector = Self.attr("data-filter");
		  postFilterList.removeClass("active");
		  Self.addClass("active");
  
		  $(".filter-layout").isotope({
			filter: selector,
			animationOptions: {
			  duration: 500,
			  easing: "linear",
			  queue: false
			}
		  });
		  return false;
		});
	  }
  
	});
  
  

/*******************************************************/
/****************** ## Price Range Slider *******************/
/*******************************************************/

	if ($('.price-range-slider').length) {
	  $(".price-range-slider").slider({
		range: true,
		min: 20,
		max: 2000,
		values: [120, 300],
		slide: function (event, ui) {
		  $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
		}
	  });
  
	  $("input.property-amount").val($(".price-range-slider").slider("values", 0) + " - $" + $(".price-range-slider")
		.slider("values", 1));
	}
  
  
/*******************************************************/
/****************** ## Fact Counter & Text Count *******************/
/*******************************************************/  
  
	if ($('.count-box').length) {
	  $('.count-box').appear(function () {
  
		var $t = $(this),
		  n = $t.find(".count-text").attr("data-stop"),
		  r = parseInt($t.find(".count-text").attr("data-speed"), 10);
  
		if (!$t.hasClass("counted")) {
		  $t.addClass("counted");
		  $({
			countNum: $t.find(".count-text").text()
		  }).animate({
			countNum: n
		  }, {
			duration: r,
			easing: "linear",
			step: function () {
			  $t.find(".count-text").text(Math.floor(this.countNum));
			},
			complete: function () {
			  $t.find(".count-text").text(this.countNum);
			}
		  });
		}
  
	  }, {
		accY: 0
	  });
	}
  
  
/*******************************************************/
/****************** ## LightBox *******************/
/*******************************************************/  

	if ($('.lightbox-image').length) {
	  $('.lightbox-image').fancybox({
		openEffect: 'fade',
		closeEffect: 'fade',
		helpers: {
		  media: {}
		}
	  });
	}
  
/*******************************************************/
/****************** ## Tabs Box *******************/
/*******************************************************/  

  
	if ($('.tabs-box').length) {
	  $('.tabs-box .tab-buttons .tab-btn').hover( function (e) {
		e.preventDefault();
  
		var target = $($(this).attr('data-tab'));
  
		// Check if the target tab is already visible
		if ($(target).is(':visible')) {
		  return false;
		}
  
		// Make all of the tab buttons in the current tabs box inactive
		target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
  
		// Make the clicked tab button active
		$(this).addClass('active-btn');
  
		// Fade out all of the tab panels in the current tabs box
		target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
  
		// Remove the active-tab and animate__animated animate__fadeIn classes from all of the tab panels in the current tabs box
		target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass(
		  'active-tab animate__animated animate__fadeIn');
  
		// Fade in the target tab panel
		$(target).fadeIn(0);
  
		// Add the active-tab and animate__animated animate__fadeIn classes to the target tab panel
		$(target).addClass('active-tab animate__animated animate__fadeIn');
  
		// Execute the callback function
		if (typeof tabClickCallback === 'function') {
		  tabClickCallback(target);
		}
	  });
	}
  
 
	
/*******************************************************/
/****************** ## Swiper Slider Testimonials *******************/
/*******************************************************/  

  
	if ($('.gallery-thumbs').length) {
	  var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 0,
		slidesPerView: 5,
		loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		autoplay: {
		  delay: 5000, //autoplay delay in milliseconds
		  disableOnInteraction: false, //stops autoplay on user interaction
		},
	  });
	  var galleryUp = new Swiper('.slider-content', {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		thumbs: {
		  swiper: galleryThumbs,
		},
		autoplay: {
		  delay: 5000, //autoplay delay in milliseconds
		  disableOnInteraction: false, //stops autoplay on user interaction
		},
	  });
	}
  
  

/*******************************************************/
/****************** ## Accordion Box *******************/
/*******************************************************/  	

	if ($('.accordion-box').length) {
	  $(".accordion-box").on('click', '.acc-btn', function () {
  
		var outerBox = $(this).parents('.accordion-box');
		var target = $(this).parents('.accordion');
  
		if ($(this).hasClass('active') !== true) {
		  $(outerBox).find('.accordion .acc-btn').removeClass('active');
		}
  
		if ($(this).next('.acc-content').is(':visible')) {
		  return false;
		} else {
		  $(this).addClass('active');
		  $(outerBox).children('.accordion').removeClass('active-block');
		  $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
		  target.addClass('active-block');
		  $(this).next('.acc-content').slideDown(300);
		}
	  });
	}
  

/*******************************************************/
/****************** ##  Banner-carousel *******************/
/*******************************************************/  	


	if ($('.banner-carousel').length) {
	  $('.banner-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		active: true,
		smartSpeed: 1000,
		autoplay: 6000,
		navText: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 1
		  },
		  800: {
			items: 1
		  },
		  1024: {
			items: 1
		  }
		}
	  });
	}
  
 

/*******************************************************/
/****************** ##  Single-item-carousel *******************/
/*******************************************************/  	

	if ($('.single-item-carousel').length) {
	  $('.single-item-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		smartSpeed: 500,
		autoplay: 1000,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 1
		  },
		  600: {
			items: 1
		  },
		  800: {
			items: 1
		  },
		  1200: {
			items: 1
		  }
  
		}
	  });
	}
  
  
/*******************************************************/
/****************** ##   Two-item-carousel *******************/
/*******************************************************/  	


	if ($('.two-item-carousel').length) {
	  $('.two-item-carousel').owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		smartSpeed: 500,
		autoplay: 1000,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 1
		  },
		  600: {
			items: 1
		  },
		  800: {
			items: 2
		  },
		  1200: {
			items: 2
		  }
  
		}
	  });
	}
  
  
/*******************************************************/
/****************** ## Three-item-carousel *******************/
/*******************************************************/  	

	if ($('.three-item-carousel').length) {
	  $('.three-item-carousel').owlCarousel({
		loop: true,
		margin: 25,
		nav: false,
		dots: true,
		smartSpeed: 500,
		autoplay: 1000,
		responsive: {
		  0: {
			items: 1,
			dotsEach: 3,
		  },
		  480: {
			items: 1,
			dotsEach: 3,
		  },
		  600: {
			items: 2,
			dotsEach: 3,
		  },
		  800: {
			items: 2,
			dotsEach: 3,
		  },
		  1200: {
			items: 3,
			dotsEach: 3,
		  }
  
		}
	  });
	}
 
	
/*******************************************************/
/****************** ## Four-item-carousel *******************/
/*******************************************************/  		
  
	if ($('.four-item-carousel').length) {
	  $('.four-item-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		smartSpeed: 500,
		autoplay: 1000,
		navText: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  800: {
			items: 3
		  },
		  1200: {
			items: 4
		  }
  
		}
	  });
	}
  

	
/*******************************************************/
/****************** ## Five-item-carousel *******************/
/*******************************************************/  


	if ($('.five-item-carousel').length) {
	  $('.five-item-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		smartSpeed: 500,
		autoplay: 1000,
		responsive: {
		  0: {
			items: 1,
			dotsEach: 3,
		  },
		  480: {
			items: 2,
			dotsEach: 3,
		  },
		  600: {
			items: 2,
			dotsEach: 3,
		  },
		  800: {
			items: 3,
			dotsEach: 3,
		  },
		  1200: {
			items: 4,
			dotsEach: 3,
		  },
		  1400: {
			items: 5,
			dotsEach: 3,
		  }
  
		}
	  });
	}
  

/*******************************************************/
/****************** ## Six-item-carousel *******************/
/*******************************************************/  


	if ($('.six-item-carousel').length) {
	  $('.six-item-carousel').owlCarousel({
		loop: true,
		margin: 25,
		nav: false,
		dots: true,
		smartSpeed: 500,
		autoplay: 1000,
		responsive: {
		  0: {
			items: 1,
			dotsEach: 3,
		  },
		  480: {
			items: 2,
			dotsEach: 3,
		  },
		  600: {
			items: 3,
			dotsEach: 3,
		  },
		  800: {
			items: 4,
			dotsEach: 3,
		  },
		  1200: {
			items: 5,
			dotsEach: 3,
		  },
		  1400: {
			items: 6,
			dotsEach: 3,
		  }
  
		}
	  });
	}
 
	

/*******************************************************/
/****************** ## Project-item-carousel *******************/
/*******************************************************/  

	if ($('.project-carousel').length) {
	  $('.project-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		smartSpeed: 500,
		autoplay: 1000,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  800: {
			items: 3
		  },
		  1200: {
			items: 4
		  }
  
		}
	  });
	}
  

/*******************************************************/
/****************** ## Testimonial-item-carousel *******************/
/*******************************************************/  


	if ($('.testimonial-carousel').length) {
	  $('.testimonial-carousel').owlCarousel({
		loop: true,
		margin: 25,
		nav: false,
		dots: false,
		smartSpeed: 500,
		autoplay: 1000,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 1
		  },
		  600: {
			items: 1
		  },
		  800: {
			items: 1
		  },
		  1200: {
			items: 1
		  }
  
		}
	  });
	}
  

/*******************************************************/
/****************** ## Client-item-carousel *******************/
/*******************************************************/ 


	if ($('.client-carousel').length) {
	  $('.client-carousel').owlCarousel({
		loop: true,
		margin: 170,
		nav: false,
		dots: false,
		smartSpeed: 500,
		autoplay: 1000,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  600: {
			items: 3
		  },
		  800: {
			items: 4
		  },
		  1200: {
			items: 5
		  }
		}
	  });
	}
  
  
/*******************************************************/
/****************** ## Progress Bar *******************/
/*******************************************************/ 

	if ($('.count-bar').length) {
	  $('.count-bar').appear(function () {
		var el = $(this);
		var percent = el.data('percent');
		$(el).css('width', percent).addClass('counted');
	  }, {
		accY: -50
	  });
  
	}
  
  
/*******************************************************/
/****************** ## Search Popup *******************/
/*******************************************************/ 

	if ($('#search-popup').length) {
  
	  //Show Popup
	  $('.search-toggler').on('click', function () {
		$('#search-popup').addClass('popup-visible');
	  });
	  $(document).keydown(function (e) {
		if (e.keyCode === 27) {
		  $('#search-popup').removeClass('popup-visible');
		}
	  });
	  //Hide Popup
	  $('.close-search,.search-popup .overlay-layer').on('click', function () {
		$('#search-popup').removeClass('popup-visible');
	  });
  
	}
  

/*******************************************************/
/****************** ##  Scroll top button  *******************/
/*******************************************************/ 
  
  
	$(function () {
	  $(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	  });
  
	  $('.go-top').on('click', function () {
		$("html, body").animate({
		  scrollTop: "0"
		}, 500);
	  });
	});
  
  
/*******************************************************/
/****************** ##  tour details calender dynamic  *******************/
/*******************************************************/ 
	// tour details calender dynamic

	var monthFormatter = new Intl.DateTimeFormat("en-us", { month: "long" });
	var weekdayFormatter = new Intl.DateTimeFormat("en-us", { weekday: "long" });
	
	var dates = [];
	dates[0] = new Date(); // defaults to today
	dates[1] = addDays(dates[0], 31);
	
	var currentDate = 0; // index into dates[]
	var previousDate = 1;
	
	var datesBoxes = $(".date-picker-date");
	var displayBoxes = $(".date-picker-display");
	
	// sensible default just in case jQuery doesn't kick in
	// makes sure that the experience is still usable, and when $(window).width() returns then this variable is updated to the correct value
	var windowWidth = 300;
	var colourPickerWidth = 300;
	
	// set up dates
	$(document).ready(function() {
	  // will work the same the first time as every other
	  updateDatePicker();
	  
	  // update dates shown to correct dates
	  $(datesBoxes[0]).text(getDateString(dates[0]));
	  $(datesBoxes[1]).text(getDateString(dates[1]));
	  
	  $(displayBoxes[0]).text(dates[0].getDate() + " " + monthFormatter.format(dates[0]).slice(0,3));
	  $(displayBoxes[1]).text(dates[1].getDate() + " " + monthFormatter.format(dates[1]).slice(0,3));
	});
	
	// add event listeners
	$(document).ready(function() {
	  
	  // has to be applied each time, as it's removed when calendar is reset
	  applyDateEventListener();
	  
	  $(".date-picker-date").click(function(e) {
		
		// if active, toggle picker off and return
		var currentlyActive = $(this).hasClass("active");
		if (currentlyActive) {
		  $(this).removeClass("active");
		  hideDatePicker();
		  return;
		}
		
		$(".date-picker-date").removeClass("active");
		$(this).addClass("active");
		
		// update currentDate
		previousDate = currentDate;
		if ($(this)[0].id == "date-picker-date-first") {
		  currentDate = 0;
		} else {
		  currentDate = 1;
		}
		
		// update calendar
		showDatePicker(e);
		updateDatePicker();
	  });
	  
	  $("#date-picker-next-month").click(function() {
		changeMonth("Next");
	  });
	  
	  $("#date-picker-previous-month").click(function() {
		changeMonth("Previous");
	  });
	  
	  $("#date-picker-exit").click(function() {
		hideDatePicker();
	  });
	  
	  $(document).click(function(e) {
		var target = $(e.target);
		var clickedOnPicker = (target.closest("#date-picker-modal").length);
		var clickedOnDate = (target.closest(".date-picker-date").length);
		var isPreviousOrNext = target.hasClass("previous-month") || target.hasClass("next-month");
		
		if (!(clickedOnPicker || clickedOnDate || isPreviousOrNext)) {
		  hideDatePicker();
		}
	  });
	  
	});
	
	// called on initialising (set to today) and then every time the month changes or on moving between dates
	function updateDatePicker(changeMonth = false) {
	  
	  var datePicker = $("#date-picker");
	  var curDate = dates[currentDate]; // shorthand
	  
	  // check if it needs to update
	  // updates if changed month directly (changeMonth) or if switched to other .date-picker-date and month is different (differentMonth)
	  var differentMonth = checkChangedMonth();
	  if (changeMonth === false && differentMonth === false) { return; }
	  
	  updatePickerMonth();
	  
	  // clear out all tr instances other than the header row
	  // really just removing all rows and appending header row straight back in
	  var headerRow = `
		<tr id="date-picker-weekdays">
		  <th>S</th>
		  <th>M</th>
		  <th>T</th>
		  <th>W</th>
		  <th>T</th>
		  <th>F</th>
		  <th>S</th>
		</tr>`;
	  // clear all rows
	  datePicker.contents().remove();
	  datePicker.append(headerRow);
	  
	  var todayDate = curDate.getDate();
	  var firstOfMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
	  var firstWeekday = firstOfMonth.getDay(); // 0-indexed; 0 is Sunday, 6 is Saturday
	  var lastMonthToInclude = firstWeekday; // happily, this just works as-is.
	  var firstOfNextMonth = addMonths(firstOfMonth, 1);
	  var lastOfMonth = addDays(firstOfNextMonth, -1).getDate();
	  
	  var openRow = "<tr class='date-picker-calendar-row'>";
	  var closeRow = "</tr>";
	  var currentRow = openRow;
	  
	  // Add in as many of last month as required
	  if (lastMonthToInclude > 0) {
		var lastMonthLastDay = addDays(firstOfMonth, -1);
		var lastMonthDays = lastMonthLastDay.getDate();
		var lastMonthStartAdding = lastMonthDays - lastMonthToInclude + 1;
		
		// add days from previous month
		// takes arguments (start loop, end loop <=, counter, 'true' if current month OR class if another month (optional, default "") )
		//addToCalendar(lastMonthStartAdding, lastMonthDays, 0, "previous-month");
		//addToCalendar(lastMonthStartAdding, lastMonthDays, 0, "month-previous");
		addToCalendar(lastMonthStartAdding, lastMonthDays, 0, "previous-month");
	  }
	  
	  // fill out rest of row with current month
	  // doesn't matter how many of last month were included, all accounted for
	  addToCalendar(1, 7 - lastMonthToInclude, lastMonthToInclude, true);
	  
	  // reset for current month generation
	  currentRow = openRow;
	  
	  var counter = 7;
	  var addedFromCurrentMonth = 7 - firstWeekday + 1;
	  
	  addToCalendar(addedFromCurrentMonth, lastOfMonth, counter, true);
	  
	  // at this point, counter = all of this month + whatever was included from last month
	  counter = lastMonthToInclude + lastOfMonth;
	  var nextMonthToInclude = counter % 7 === 0 ? 0 : 7 - (counter % 7);
	  
	  addToCalendar(1, nextMonthToInclude, counter, "next-month");
	  
	  // add event listener again
	  applyDateEventListener();
	  
	  // update current date box
	  updateDateShown();
	  
	  
	  
	  // functions scoped to this outer function
	  //############################################################
	  function checkChangedMonth() {
		// updates if changed month directly (changeMonth) or if switched to other .date-picker-date and month is different (differentMonth)
		var differentMonth = false;
		// checks if it's the same date again
		if (currentDate !== previousDate) {
		  // if either month or year are different then month has changed
		  if (dates[0].getMonth() !== dates[1].getMonth() || dates[0].getYear() !== dates[1].getYear() ) {
			differentMonth = true;
		  }
		}
		
		return differentMonth;
		
	  }
	  
	  function addToCalendar(start, end, counter, cellClass) {
		
		var currentMonth = cellClass === true ? true : false;
		
		for (var i = start; i <= end; i++) {
		  counter += 1;
		  if (i === todayDate && currentMonth) {
			currentRow += `<td class="active">${i}</td>`;
		  } else if (cellClass && !currentMonth) {
			currentRow += `<td class="${cellClass}">${i}</td>`;
		  } else {
			currentRow += `<td>${i}</td>`;
		  }
		  if (counter % 7 === 0) {
			datePicker.append(currentRow + closeRow);
			currentRow = openRow;
		  }
		}
	  }
	}
	
	function updatePickerMonth() {
	  var monthName = monthFormatter.format(dates[currentDate]);
	  var year = dates[currentDate].getFullYear();
	  var dateText = monthName + " " + year;
	  $("#date-picker-month").text(dateText);
	}
	
	function dateSelected(currentDay) {
	  
	  // update the active .date-picker-date with the current date
	  var activeDate = $( $(".date-picker-date.active")[0] );
	  
	  // get current date and update
	  dates[currentDate].setDate(currentDay);
	  updateDateShown();
	}
	
	// 'direction' can be either "Next" or "Previous"
	function changeMonth(direction) {
	  
	  var increment = direction === "Next" ? 1 : -1;
	  
	  // change month
	  dates[currentDate] = addMonths(dates[currentDate], increment);
	  
	  // change month name in picker
	  updatePickerMonth();
	  
	  // update calendar
	  // passes 'true' that month has changed
	  updateDatePicker(true);
	}
	
	function showDatePicker(e) {
	  
	  var pxFromTop = $(".date-picker-date").offset().top;
	  var datePicker = $("#date-picker-modal");
	  datePicker.css("top", pxFromTop + 40);
	  // check if right edge of colourPicker will go off the edge of the screen, and if so then reduce left by that amount
	  var rightEdge = e.pageX + colourPickerWidth;
	  var overflowWidth = rightEdge - windowWidth;
	  if (overflowWidth > 0) {
		datePicker.css("left", e.pageX - overflowWidth);
	  } else {
		datePicker.css("left", e.pageX);
	  }
	  
	  $("#date-picker-modal").removeClass("hidden-2");
	}
	
	function hideDatePicker() {
	  $(".date-picker-date").removeClass("active");
	  $("#date-picker-modal").addClass("hidden-2");
	}
	
	function applyDateEventListener() {
	  
	  $("#date-picker td").click(function() {
		
		// Calendar UI
		$("#date-picker td").removeClass("active");
		$(this).addClass("active");
		
		// update variables
		let currentDay = $(this).text();
		
		// update the current date
		dateSelected(currentDay);
	
		// change month based on calendar day class
		if ($(this).hasClass("previous-month")) {
		  changeMonth("Previous");
		} else if ($(this).hasClass("next-month")) {
		  changeMonth("Next");
		} else {
		  // clicked in current month; made selection so hide picker again
		  hideDatePicker();
		}
	  });
	  
	}
	
	// Utilities
	//################################################################
	// set location for date picker
	$(document).ready(function() {
	  updateWidths();
	});
	
	$(window).resize(function() {
	  updateWidths();
	});
	
	function updateWidths() {
	  windowWidth = $(window).width();
	}
	
	function addDays(date, days) {
	  var result = new Date(date);
	  result.setDate(result.getDate() + days);
	  return result;
	}
	
	function addMonths(date, months) {
	  var result = new Date(date);
	  result.setMonth(result.getMonth() + months);
	  return result;
	}
	
	function getDateString(date) {
	  var year = date.getFullYear();
	
	  var month = (1 + date.getMonth()).toString();
	  month = month.length > 1 ? month : '0' + month;
	
	  var day = date.getDate().toString();
	  day = day.length > 1 ? day : '0' + day;
	
	  return day + '/' + month + '/' + year;
	}
	
	function updateDateShown() {
	  var formattedDate = getDateString(dates[currentDate]);
	  var updateDateBox = $(datesBoxes[currentDate]);
	  
	  var updateDisplayBox = $(displayBoxes[currentDate]);
	  var dayAndMonth = dates[currentDate].getDate() + " " + monthFormatter.format(dates[currentDate]).slice(0,3);
	  
	  updateDateBox.text(formattedDate);
	  updateDisplayBox.text(dayAndMonth);
	}







/*******************************************************/
/****************** ##  Select 2 Update  *******************/
/*******************************************************/ 

	// Initialize Select2 on the select element
	$('#state').select2();

	// Click event handler for the label
	$('.select-location').click(function() {
		// Trigger the Select2 dropdown when the label is clicked
		$('#state').select2('open');
	});

	$('#type').select2();

	// Click event handler for the label
	$('.select-type').click(function() {
		// Trigger the Select2 dropdown when the label is clicked
		$('#type').select2('open');
	});

	$('#state1').select2();

	// Click event handler for the label
	$('.select-location1').click(function() {
		// Trigger the Select2 dropdown when the label is clicked
		$('#state1').select2('open');
	});

	$('#type1').select2();

	// Click event handler for the label
	$('.select-type1').click(function() {
		// Trigger the Select2 dropdown when the label is clicked
		$('#type1').select2('open');
	});



	$(".select2-search__field").attr("placeholder", "Your Placeholder Text");

	// Date Picker
	$("#datepicker").datepicker({
		dateFormat: "dd M, D", // Date format: "20 Oct, Fri"
		onSelect: function(dateText, inst) {
		// $("#datepicker").text("" + dateText);
		}
	});
	$("#datepicker2").datepicker({
		dateFormat: "dd M, D", // Date format: "20 Oct, Fri"
		onSelect: function(dateText, inst) {
		// $("#datepicker").text("" + dateText);
		}
	});		
	$("#datepicker3").datepicker({
		dateFormat: "dd M, D", // Date format: "20 Oct, Fri"
		onSelect: function(dateText, inst) {
		// $("#datepicker").text("" + dateText);
		}
	});	
	$("#datepicker4").datepicker({
		dateFormat: "dd M, D", // Date format: "20 Oct, Fri"
		onSelect: function(dateText, inst) {
		// $("#datepicker").text("" + dateText);
		}
	});		



/*******************************************************/
/****************** ##  AOS Animation  *******************/
/*******************************************************/ 

	AOS.init();
  






// end ==================================================
	



	jQuery(document).on('ready', function () {
	  (function ($) {
		// add your functions
  
	  })(jQuery);
	});
  
  
  
	$(window).on('scroll', function () {
		// add your functions
		// AOS Animation
		AOS.init();
	  	headerStyle();
	});
  
  
  
	$(window).on('load', function () {
		// add your functions

	});
  
  
  
  })(window.jQuery);