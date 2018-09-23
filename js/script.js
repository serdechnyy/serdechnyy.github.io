$(document).ready(function() {

	$("ul.nav.nav-gallery.filters-filteringModeSingle li").click(function() {
		$(this).parent("ul").find('.filtr-active').toggleClass("filtr-active");
		$(this).toggleClass('filtr-active');
		console.log("li clicked");
	});

	// fancybox load
	/* This is basic - uses default settings */

	/* Using custom settings */

	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */

	$('a.example_group').fancybox({
		arrows: true,
		nextClick: true,
		closeBtn: true,
		'transitionIn': 'none',
		'transitionOut': 'none',
		'titlePosition': 'over',
		'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	});

	$(function() {
		$('nav#menu').mmenu()
	})

	$(function() {

		$("#menu").mmenu({}, {});
		$(".mh-head.mm-sticky").mhead({
			scroll: {
				hide: 200
			}
		});
		$(".mh-head:not(.mm-sticky)").mhead({
			scroll: false
		});

		$('body').on('click',
			'a[href^="#/"]',
			function() {
				alert("Thank you for clicking, but that's a demo link.");
				return false;
			}
		);
	});

	document.getElementById("questions").onclick = function() {
		console.log("clicked");
		var name_input = document.getElementById('user_name').value;
		var phone_input = document.getElementById('phone_number').value;
		var e_mail_input = document.getElementById('e_mail').value;

		$.ajax({
			url: "https://formspree.io/vimpil04@gmail.com",
			method: "POST",
			data: {
				message: "hello!"
			},
			dataType: "json"
		});
	};
	// END fancybox load

	//SVG path's hover

	$("a#ysmm").hover({
		function(){
		console.log("hover")
	}
	});
	
	//END SVG path's hover
});