$(document).ready(function(){
			//$('#index_posts').equalize('outerHeight');

			$('.back-to-top').on('click', function(){
        $('html, body').animate({'scrollTop': 0});
			});
			$('.back-to-top').scrollToFixed({
				opacity:1
			});


			$('.postcontent').each(function(){
				var el = $(this).find('img, iframe').first();
				el.appendTo($(this).parents('.index_article_rocky').find('.postfeatured'));
			});

			/*Start animations*/

			setTimeout(function(){

				window.$footer_rocky = $('.footer_rocky');
				var footerPosition = $footer_rocky.outerHeight() + $footer_rocky.offset().top;
				if(footerPosition < $(window).height()){
					$footer_rocky.addClass('fixed-bottom');
				}


				$('.sidebar_rocky .box').addClass('go-in');

				var showArticle = function(multiplier, el){
					setTimeout(function(){
						el.addClass('go-in');
					},200*multiplier);
				}

				var $index_articles = $('.index_article_rocky');
				for (var i = 0; i < $index_articles.length; i++) {
					var el = $index_articles.eq(i);
					showArticle(i, el);
				};

			},200)

		});