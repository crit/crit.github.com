(function($){
	var app = {};

	app.bindRoutes = function(){
		$('.navbar-nav a').on('click', function(e){
			e.preventDefault(); // block standard nav linking
			var $el = $(this);
			$('.navbar-nav li.active').removeClass('active');
			$el.parent().addClass('active');

			app.showPage($el.attr('href'));
			return true;
		});
	};

	app.showPage = function(href) {
		$('#stage').load('/workout/partials/' + href);
	}

	$(function(){
		app.bindRoutes();
	});
}(jQuery))