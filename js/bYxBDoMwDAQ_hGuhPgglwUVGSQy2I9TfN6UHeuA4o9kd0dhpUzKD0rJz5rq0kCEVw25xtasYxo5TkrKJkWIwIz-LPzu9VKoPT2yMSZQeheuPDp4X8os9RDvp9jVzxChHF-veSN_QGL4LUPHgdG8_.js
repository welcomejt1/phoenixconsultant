
icl_lang = icl_vars.current_language;
icl_home = icl_vars.icl_home;

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }  
}

function icl_retry_mtr(a){
    var id = a.getAttribute('id');
    spl = id.split('_');
    var loc = location.href.replace(/#(.*)$/,'').replace(/(&|\?)(retry_mtr)=([0-9]+)/g,'').replace(/&nonce=([0-9a-z]+)(&|$)/g,'');
    if(-1 == loc.indexOf('?')){
        url_glue='?';
    }else{
        url_glue='&';
    }    
    location.href=loc+url_glue+'retry_mtr='+spl[3]+'&nonce='+spl[4];
    return false;
}
;document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
(function () {
	var prefix = [
		'-webkit-',
		'-o-',
		'-moz-',
		'-ms-',
		""
	];
	for ( var i = 0; i < prefix.length; i++ ) {
		if ( prefix[ i ] + 'transform' in document.documentElement.style ) {
			document.documentElement.className += " vc_transform ";
		}
	}
})();
/*
 On document ready jQuery will fire set of functions.
 If you want to override function behavior then copy it to your theme js file
 with the same name.
 */

jQuery( window ).load( function () {

} );
var vc_js = function () {
	vc_twitterBehaviour();
	vc_toggleBehaviour();
	vc_toggleBehaviourOld(); // todo remove on next release
	vc_tabsBehaviour();
	vc_accordionBehaviour();
	vc_teaserGrid();
	vc_carouselBehaviour();
	vc_slidersBehaviour();
	vc_prettyPhoto();
	vc_googleplus();
	vc_pinterest();
	vc_progress_bar();
	vc_plugin_flexslider();
	vc_google_fonts();
	vc_gridBehaviour();
	vc_rowBehaviour();
	vc_ttaActivation(); // @since 4.5
	jQuery( document ).trigger( 'vc_js' );
	window.setTimeout( vc_waypoints, 1500 );
};
jQuery( document ).ready( function ( $ ) {
	window.vc_js();
} ); // END jQuery(document).ready

if ( typeof window[ 'vc_plugin_flexslider' ] !== 'function' ) {
	window.vc_plugin_flexslider = function ( $parent ) {
		var $slider = $parent ? $parent.find( '.wpb_flexslider' ) : jQuery( '.wpb_flexslider' );
		$slider.each( function () {
			var this_element = jQuery( this );
			var sliderSpeed = 800,
				sliderTimeout = parseInt( this_element.attr( 'data-interval' ) ) * 1000,
				sliderFx = this_element.attr( 'data-flex_fx' ),
				slideshow = true;
			if ( sliderTimeout == 0 ) {
				slideshow = false;
			}

			this_element.is( ':visible' ) && this_element.flexslider( {
				animation: sliderFx,
				slideshow: slideshow,
				slideshowSpeed: sliderTimeout,
				sliderSpeed: sliderSpeed,
				smoothHeight: true
			} );
		} );
	};
}

/* Twitter
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_twitterBehaviour' ] !== 'function' ) {
	window.vc_twitterBehaviour = function () {
		jQuery( '.wpb_twitter_widget .tweets' ).each( function ( index ) {
			var this_element = jQuery( this ),
				tw_name = this_element.attr( 'data-tw_name' ),
				tw_count = this_element.attr( 'data-tw_count' );

			this_element.tweet( {
				username: tw_name,
				join_text: "auto",
				avatar_size: 0,
				count: tw_count,
				template: "{avatar}{join}{text}{time}",
				auto_join_text_default: "",
				auto_join_text_ed: "",
				auto_join_text_ing: "",
				auto_join_text_reply: "",
				auto_join_text_url: "",
				loading_text: '<span class="loading_tweets">loading tweets...</span>'
			} );
		} );
	};
}

/* Google plus
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_googleplus' ] !== 'function' ) {
	window.vc_googleplus = function () {
		if ( jQuery( '.wpb_googleplus' ).length > 0 ) {
			(function () {
				var po = document.createElement( 'script' );
				po.type = 'text/javascript';
				po.async = true;
				po.src = 'https://apis.google.com/js/plusone.js';
				var s = document.getElementsByTagName( 'script' )[ 0 ];
				s.parentNode.insertBefore( po, s );
			})();
		}
	}
}

/* Pinterest
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_pinterest' ] !== 'function' ) {
	window.vc_pinterest = function () {
		if ( jQuery( '.wpb_pinterest' ).length > 0 ) {
			(function () {
				var po = document.createElement( 'script' );
				po.type = 'text/javascript';
				po.async = true;
				po.src = 'http://assets.pinterest.com/js/pinit.js';
				var s = document.getElementsByTagName( 'script' )[ 0 ];
				s.parentNode.insertBefore( po, s );
				//<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>
			})();
		}
	}
}

/* Progress bar
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_progress_bar' ] !== 'function' ) {
	window.vc_progress_bar = function () {
		if ( typeof jQuery.fn.waypoint !== 'undefined' ) {

			jQuery( '.vc_progress_bar' ).waypoint( function () {
				jQuery( this ).find( '.vc_single_bar' ).each( function ( index ) {
					var $this = jQuery( this ),
						bar = $this.find( '.vc_bar' ),
						val = bar.data( 'percentage-value' );

					setTimeout( function () {
						bar.css( { "width": val + '%' } );
					}, index * 200 );
				} );
			}, { offset: '85%' } );
		}
	}
}

/* Waypoints magic
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_waypoints' ] !== 'function' ) {
	window.vc_waypoints = function () {
		if ( typeof jQuery.fn.waypoint !== 'undefined' ) {
			jQuery( '.wpb_animate_when_almost_visible:not(.wpb_start_animation)' ).waypoint( function () {
				jQuery( this ).addClass( 'wpb_start_animation' );
			}, { offset: '85%' } );
		}
	}
}

/* Toggle
 * @deprecated since 4.4
 ---------------------------------------------------------- */
// @todo remove on next release
if ( typeof window[ 'vc_toggleBehaviourOld' ] !== 'function' ) {
	/**
	 * @deprecated will be removed in next release
	 */
	window.vc_toggleBehaviourOld = function () {
		jQuery( ".wpb_toggle" ).unbind( 'click' ).click( function ( e ) {
			if ( jQuery( this ).next().is( ':animated' ) ) {
				return false;
			}
			if ( jQuery( this ).hasClass( 'wpb_toggle_title_active' ) ) {
				jQuery( this ).removeClass( 'wpb_toggle_title_active' ).next().slideUp( 500 );
			} else {
				jQuery( this ).addClass( 'wpb_toggle_title_active' ).next().slideDown( 500 );
			}
		} );
		jQuery( '.wpb_toggle_content' ).each( function ( index ) {
			if ( jQuery( this ).next().is( 'h4.wpb_toggle' ) == false ) {
				jQuery( '<div class="last_toggle_el_margin"></div>' ).insertAfter( this );
			}
		} );
	}
}

/* Toggle/FAQ
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_toggleBehaviour' ] !== 'function' ) {
	window.vc_toggleBehaviour = function ( $el ) {
		var event = function ( e ) {
			e && e.preventDefault && e.preventDefault();
			var title = jQuery( this );
			var element = title.closest( '.vc_toggle' );
			var content = element.find( '.vc_toggle_content' );
			if ( element.hasClass( 'vc_toggle_active' ) ) {
				content.slideUp( {
					duration: 300,
					complete: function () {
						element.removeClass( 'vc_toggle_active' );
					}
				} );
			} else {
				content.slideDown( {
					duration: 300,
					complete: function () {
						element.addClass( 'vc_toggle_active' );
					}
				} );
			}
		};
		if ( $el ) {
			if ( $el.hasClass( 'vc_toggle_title' ) ) {
				$el.unbind( 'click' ).click( event );
			} else {
				$el.find( ".vc_toggle_title" ).unbind( 'click' ).click( event );
			}
		} else {
			jQuery( ".vc_toggle_title" ).unbind( 'click' ).on( 'click', event );
		}
	}
}

/* Tabs + Tours
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_tabsBehaviour' ] !== 'function' ) {
	window.vc_tabsBehaviour = function ( $tab ) {
		if ( jQuery.ui ) {
			/* jQuery(function ($) {
			 $(document.body).off('click.preview', 'a')
			 }); */ // this causes wp-customizer bug
			var $call = $tab || jQuery( '.wpb_tabs, .wpb_tour' ),
				ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split( '.' ) : '1.10',
				old_version = parseInt( ver[ 0 ] ) == 1 && parseInt( ver[ 1 ] ) < 9;
			// if($call.hasClass('ui-widget')) $call.tabs('destroy');
			$call.each( function ( index ) {
				var $tabs,
					interval = jQuery( this ).attr( "data-interval" ),
					tabs_array = [];
				//
				$tabs = jQuery( this ).find( '.wpb_tour_tabs_wrapper' ).tabs( {
					show: function ( event, ui ) {
						wpb_prepare_tab_content( event, ui );
					},
					beforeActivate: function ( event, ui ) {
						ui.newPanel.index() !== 1 && ui.newPanel.find( '.vc_pie_chart:not(.vc_ready)' );
					},
					activate: function ( event, ui ) {
						wpb_prepare_tab_content( event, ui );
					}
				} );
				if ( interval && interval > 0 ) {
					try {
						$tabs.tabs( 'rotate', interval * 1000 );
					} catch ( e ) {
						// nothing.
						window.console && window.console.log && console.log( e );
					}
				}

				jQuery( this ).find( '.wpb_tab' ).each( function () {
					tabs_array.push( this.id );
				} );

				jQuery( this ).find( '.wpb_tabs_nav li' ).click( function ( e ) {
					e.preventDefault();
					/*if (jQuery.inArray(jQuery(this).attr('href'), tabs_array)) {
					 if (old_version) {
					 $tabs.tabs("select", jQuery(this).attr('href'));
					 } else {
					 $tabs.tabs("option", "active", jQuery(jQuery(this).attr('href')).index() - 1);
					 }
					 return false;
					 }*/
					if ( old_version ) {
						$tabs.tabs( "select", jQuery( 'a', this ).attr( 'href' ) );
					} else {
						$tabs.tabs( "option", "active", jQuery( this ).index() );
					}
					return false;
				} );

				jQuery( this ).find( '.wpb_prev_slide a, .wpb_next_slide a' ).click( function ( e ) {
					e.preventDefault();
					if ( old_version ) {
						var index = $tabs.tabs( 'option', 'selected' );
						if ( jQuery( this ).parent().hasClass( 'wpb_next_slide' ) ) {
							index ++;
						}
						else {
							index --;
						}
						if ( index < 0 ) {
							index = $tabs.tabs( "length" ) - 1;
						}
						else if ( index >= $tabs.tabs( "length" ) ) {
							index = 0;
						}
						$tabs.tabs( "select", index );
					} else {
						var index = $tabs.tabs( "option", "active" ),
							length = $tabs.find( '.wpb_tab' ).length;

						if ( jQuery( this ).parent().hasClass( 'wpb_next_slide' ) ) {
							index = (index + 1) >= length ? 0 : index + 1;
						} else {
							index = index - 1 < 0 ? length - 1 : index - 1;
						}

						$tabs.tabs( "option", "active", index );
					}

				} );

			} );
		}
	}
}
;

/* Tabs + Tours
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_accordionBehaviour' ] !== 'function' ) {
	window.vc_accordionBehaviour = function () {
		jQuery( '.wpb_accordion' ).each( function ( index ) {
			var $this = jQuery( this );
			var $tabs,
				interval = $this.attr( "data-interval" ),
				active_tab = ! isNaN( jQuery( this ).data( 'active-tab' ) ) && parseInt( $this.data( 'active-tab' ) ) > 0 ? parseInt( $this.data( 'active-tab' ) ) - 1 : false,
				collapsible = active_tab === false || $this.data( 'collapsible' ) === 'yes';
			//
			$tabs = $this.find( '.wpb_accordion_wrapper' ).accordion( {
				header: "> div > h3",
				autoHeight: false,
				heightStyle: "content",
				active: active_tab,
				collapsible: collapsible,
				navigation: true,

				activate: vc_accordionActivate,
				change: function ( event, ui ) {
					if ( jQuery.fn.isotope != undefined ) {
						ui.newContent.find( '.isotope' ).isotope( "layout" );
					}
					vc_carouselBehaviour( ui.newPanel );
				}
			} );
			if ( true === $this.data( 'vcDisableKeydown' ) ) {
				$tabs.data( 'uiAccordion' )._keydown = function () {
				};
			}
			//.tabs().tabs('rotate', interval*1000, true);
		} );
	}
}

/* Teaser grid: isotope
 ---------------------------------------------------------- */
if ( typeof window[ 'vc_teaserGrid' ] !== 'function' ) {
	window.vc_teaserGrid = function () {
		var layout_modes = {
			fitrows: 'fitRows',
			masonry: 'masonry'
		};
		jQuery( '.wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)' ).each( function () {
			var $container = jQuery( this );
			var $thumbs = $container.find( '.wpb_thumbnails' );
			var layout_mode = $thumbs.attr( 'data-layout-mode' );
			$thumbs.isotope( {
				// options
				itemSelector: '.isotope-item',
				layoutMode: (layout_modes[ layout_mode ] == undefined ? 'fitRows' : layout_modes[ layout_mode ])
			} );
			$container.find( '.categories_filter a' ).data( 'isotope', $thumbs ).click( function ( e ) {
				e.preventDefault();
				var $thumbs = jQuery( this ).data( 'isotope' );
				jQuery( this ).parent().parent().find( '.active' ).removeClass( 'active' );
				jQuery( this ).parent().addClass( 'active' );
				$thumbs.isotope( { filter: jQuery( this ).attr( 'data-filter' ) } );
			} );
			jQuery( window ).bind( 'load resize', function () {
				$thumbs.isotope( "layout" );
			} );
		} );

		/*
		 var isotope = jQuery('.wpb_grid ul.thumbnails');
		 if ( isotope.length > 0 ) {
		 isotope.isotope({
		 // options
		 itemSelector : '.isotope-item',
		 layoutMode : 'fitRows'
		 });
		 jQuery(window).load(function() {
		 isotope.isotope("layout");
		 });
		 }
		 */
	}
}

if ( typeof window[ 'vc_carouselBehaviour' ] !== 'function' ) {
	window.vc_carouselBehaviour = function ( $parent ) {
		var $carousel = $parent ? $parent.find( ".wpb_carousel" ) : jQuery( ".wpb_carousel" );
		$carousel.each( function () {
			var $this = jQuery( this );
			if ( $this.data( 'carousel_enabled' ) !== true && $this.is( ':visible' ) ) {
				$this.data( 'carousel_enabled', true );
				var carousel_width = jQuery( this ).width(),
					visible_count = getColumnsCount( jQuery( this ) ),
					carousel_speed = 500;
				if ( jQuery( this ).hasClass( 'columns_count_1' ) ) {
					carousel_speed = 900;
				}
				/* Get margin-left value from the css grid and apply it to the carousele li items (margin-right), before carousele initialization */
				var carousele_li = jQuery( this ).find( '.wpb_thumbnails-fluid li' );
				carousele_li.css( { "margin-right": carousele_li.css( "margin-left" ), "margin-left": 0 } );

				jQuery( this ).find( '.wpb_wrapper:eq(0)' ).jCarouselLite( {
					btnNext: jQuery( this ).find( '.next' ),
					btnPrev: jQuery( this ).find( '.prev' ),
					visible: visible_count,
					speed: carousel_speed
				} )
					.width( '100%' );//carousel_width

				var fluid_ul = jQuery( this ).find( 'ul.wpb_thumbnails-fluid' );
				fluid_ul.width( fluid_ul.width() + 300 );

				jQuery( window ).resize( function () {
					var before_resize = screen_size;
					screen_size = getSizeName();
					if ( before_resize != screen_size ) {
						window.setTimeout( 'location.reload()', 20 );
					}
				} );
			}

		} );
	}
}

if ( typeof window[ 'vc_slidersBehaviour' ] !== 'function' ) {
	window.vc_slidersBehaviour = function () {
		//var sliders_count = 0;
		jQuery( '.wpb_gallery_slides' ).each( function ( index ) {
			var this_element = jQuery( this );
			var ss_count = 0, $imagesGrid;

			/*if ( this_element.hasClass('wpb_slider_fading') ) {
			 var sliderSpeed = 500, sliderTimeout = this_element.attr('data-interval')*1000, slider_fx = 'fade';
			 var current_ss;

			 function slideshowOnBefore(currSlideElement, nextSlideElement, options) {
			 jQuery(nextSlideElement).css({"position" : "absolute" });
			 jQuery(nextSlideElement).find("div.description").animate({"opacity": 0}, 0);
			 }

			 function slideshowOnAfter(currSlideElement, nextSlideElement, options) {
			 jQuery(nextSlideElement).find("div.description").animate({"opacity": 1}, 2000);

			 jQuery(nextSlideElement).css({"position" : "static" });
			 var new_h = jQuery(nextSlideElement).find('img').height();
			 if ( jQuery.isNumeric(new_h) ) {
			 //this_element.animate({ "height" : new_h }, sliderSpeed );
			 }
			 }

			 this_element.find('ul')
			 .before('<div class="ss_nav ss_nav_'+ss_count+'"></div><div class="wpb_fading_nav"><a id="next_'+ss_count+'" href="#next"></a> <a id="prev_'+ss_count+'" href="#prev"></a></div>')
			 .cycle({
			 fx: slider_fx, // choose your transition type, ex: fade, scrollUp, shuffle, etc...
			 pause: 1,
			 speed: sliderSpeed,
			 timeout: sliderTimeout,
			 delay: -ss_count * 1000,
			 before: slideshowOnBefore,
			 after:slideshowOnAfter,
			 pager:  '.ss_nav_'+ss_count
			 });
			 //.find('.description').width(jQuery(this).width() - 20);
			 ss_count++;
			 }
			 else*/
			if ( this_element.hasClass( 'wpb_slider_nivo' ) ) {
				var sliderSpeed = 800,
					sliderTimeout = this_element.attr( 'data-interval' ) * 1000;

				if ( sliderTimeout == 0 ) {
					sliderTimeout = 9999999999;
				}

				this_element.find( '.nivoSlider' ).nivoSlider( {
					effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify sets like: 'fold,fade,sliceDown'
					slices: 15, // For slice animations
					boxCols: 8, // For box animations
					boxRows: 4, // For box animations
					animSpeed: sliderSpeed, // Slide transition speed
					pauseTime: sliderTimeout, // How long each slide will show
					startSlide: 0, // Set starting Slide (0 index)
					directionNav: true, // Next & Prev navigation
					directionNavHide: true, // Only show on hover
					controlNav: true, // 1,2,3... navigation
					keyboardNav: false, // Use left & right arrows
					pauseOnHover: true, // Stop animation while hovering
					manualAdvance: false, // Force manual transitions
					prevText: 'Prev', // Prev directionNav text
					nextText: 'Next' // Next directionNav text
				} );
			}
			else if ( this_element.hasClass( 'wpb_image_grid' ) ) {
				if ( jQuery.fn.imagesLoaded ) {
					$imagesGrid = this_element.find( '.wpb_image_grid_ul' ).imagesLoaded( function () {
						$imagesGrid.isotope( {
							// options
							itemSelector: '.isotope-item',
							layoutMode: 'fitRows'
						} );
					} );
				} else {
					this_element.find( '.wpb_image_grid_ul' ).isotope( {
						// options
						itemSelector: '.isotope-item',
						layoutMode: 'fitRows'
					} );
				}

			}
		} );
	}
}
if ( typeof window[ 'vc_prettyPhoto' ] !== 'function' ) {
	window.vc_prettyPhoto = function () {
		try {
			// just in case. maybe prettyphoto isnt loaded on this site
			if ( jQuery && jQuery.fn && jQuery.fn.prettyPhoto ) {
				jQuery( 'a.prettyphoto, .gallery-icon a[href*=".jpg"]' ).prettyPhoto( {
					animationSpeed: 'normal', /* fast/slow/normal */
					padding: 15, /* padding for each side of the picture */
					opacity: 0.7, /* Value betwee 0 and 1 */
					showTitle: true, /* true/false */
					allowresize: true, /* true/false */
					counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
					//theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square */
					hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
					deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
					modal: false, /* If set to true, only the close button will close the window */
					callback: function () {
						var url = location.href;
						var hashtag = (url.indexOf( '#!prettyPhoto' )) ? true : false;
						if ( hashtag ) {
							location.hash = "!";
						}
					} /* Called when prettyPhoto is closed */,
					social_tools: ''
				} );
			}
		} catch ( err ) {
			window.console && window.console.log && console.log( err );
		}
	}
}

if ( typeof window[ 'vc_google_fonts' ] !== 'function' ) {
	window.vc_google_fonts = function () {
		return false; // @todo check this for what this is needed
	}
}
window.vcParallaxSkroll = false;
if ( typeof window[ 'vc_rowBehaviour' ] !== 'function' ) {
	window.vc_rowBehaviour = function () {
		var $ = window.jQuery;
		var local_function = function () {
			var $elements = $( '[data-vc-full-width="true"]' );
			$.each( $elements, function ( key, item ) {
				var $el = $( this );
				var $el_full = $el.next( '.vc_row-full-width' );
				var el_margin_left = parseInt( $el.css( 'margin-left' ), 10 );
				var el_margin_right = parseInt( $el.css( 'margin-right' ), 10 );
				var offset = 0 - $el_full.offset().left - el_margin_left;
				var width = $( window ).width();
				$el.css( {
					'position': 'relative',
					'left': offset,
					'box-sizing': 'border-box',
					'width': $( window ).width()
				} );
				if ( ! $el.data( 'vcStretchContent' ) ) {
					var padding = (- 1 * offset);
					if ( padding < 0 ) {
						padding = 0;
					}
					var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
					if ( paddingRight < 0 ) {
						paddingRight = 0;
					}
					$el.css( { 'padding-left': padding + 'px', 'padding-right': paddingRight + 'px' } );
				}
				$el.attr( "data-vc-full-width-init", "true" );
			} );
		};
		/**
		 * @todo refactor as plugin.
		 * @returns {*}
		 */
		var parallaxRow = function () {
			var vcSkrollrOptions,
				callSkrollInit = false;
			if ( vcParallaxSkroll ) {
				vcParallaxSkroll.destroy();
			}
			$( '.vc_parallax-inner' ).remove();
			$( '[data-5p-top-bottom]' ).removeAttr( 'data-5p-top-bottom data-30p-top-bottom' );
			$( '[data-vc-parallax]' ).each( function () {
				var skrollrSpeed,
					skrollrSize,
					skrollrStart,
					skrollrEnd,
					$parallaxElement,
					parallaxImage,
					youtubeId;
				callSkrollInit = true; // Enable skrollinit;
				if ( $( this ).data( 'vcParallaxOFade' ) == 'on' ) {
					$( this ).children().attr( 'data-5p-top-bottom', 'opacity:0;' ).attr( 'data-30p-top-bottom',
						'opacity:1;' );
				}

				skrollrSize = $( this ).data( 'vcParallax' ) * 100;
				$parallaxElement = $( '<div />' ).addClass( 'vc_parallax-inner' ).appendTo( $( this ) );
				$parallaxElement.height( skrollrSize + '%' );

				parallaxImage = $( this ).data( 'vcParallaxImage' );

				youtubeId = vcExtractYoutubeId( parallaxImage );

				if ( youtubeId ) {
					insertYoutubeVideoAsBackground( $parallaxElement, youtubeId );
				} else if ( parallaxImage !== undefined ) {
					$parallaxElement.css( 'background-image', 'url(' + parallaxImage + ')' );
				}

				skrollrSpeed = skrollrSize - 100;
				skrollrStart = - skrollrSpeed;
				skrollrEnd = 0;

				$parallaxElement.attr( 'data-bottom-top', 'top: ' + skrollrStart + '%;' ).attr( 'data-top-bottom',
					'top: ' + skrollrEnd + '%;' );
			} );

			if ( callSkrollInit && window.skrollr ) {
				vcSkrollrOptions = {
					forceHeight: false,
					smoothScrolling: false,
					mobileCheck: function () {
						return false;
					}
				};
				vcParallaxSkroll = skrollr.init( vcSkrollrOptions );
				return vcParallaxSkroll;
			}
			return false;
		};
		/**
		 * @todo refactor as plugin.
		 * @returns {*}
		 */
		var fullHeightRow = function () {
			$( '.vc_row-o-full-height:first' ).each( function () {
				var $window,
					windowHeight,
					offsetTop,
					fullHeight;
				$window = $( window );
				windowHeight = $window.height();
				offsetTop = $( this ).offset().top;
				if ( offsetTop < windowHeight ) {
					fullHeight = 100 - offsetTop / (windowHeight / 100);
					$( this ).css( 'min-height', fullHeight + 'vh' );
				}
			} );
		};
		$( window ).unbind( 'resize.vcRowBehaviour' ).bind( 'resize.vcRowBehaviour', local_function );
		$( window ).bind( 'resize.vcRowBehaviour', fullHeightRow );
		local_function();
		fullHeightRow();
		initVideoBackgrounds(); // must be called before parallax
		parallaxRow();
	}
}

if ( typeof window[ 'vc_gridBehaviour' ] !== 'function' ) {
	window.vc_gridBehaviour = function () {
		jQuery.fn.vcGrid && jQuery( '[data-vc-grid]' ).vcGrid();
	}
}
/* Helper
 ---------------------------------------------------------- */
if ( typeof window[ 'getColumnsCount' ] !== 'function' ) {
	window.getColumnsCount = function ( el ) {
		var find = false,
			i = 1;

		while ( find == false ) {
			if ( el.hasClass( 'columns_count_' + i ) ) {
				find = true;
				return i;
			}
			i ++;
		}
	}
}

var screen_size = getSizeName();
function getSizeName() {
	var screen_size = '',
		screen_w = jQuery( window ).width();

	if ( screen_w > 1170 ) {
		screen_size = "desktop_wide";
	}
	else if ( screen_w > 960 && screen_w < 1169 ) {
		screen_size = "desktop";
	}
	else if ( screen_w > 768 && screen_w < 959 ) {
		screen_size = "tablet";
	}
	else if ( screen_w > 300 && screen_w < 767 ) {
		screen_size = "mobile";
	}
	else if ( screen_w < 300 ) {
		screen_size = "mobile_portrait";
	}
	return screen_size;
}

function loadScript( url, $obj, callback ) {

	var script = document.createElement( "script" );
	script.type = "text/javascript";

	if ( script.readyState ) {  //IE
		script.onreadystatechange = function () {
			if ( script.readyState == "loaded" ||
				script.readyState == "complete" ) {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {  //Others
		/*
		 script.onload = function(){

		 callback();
		 };
		 */
	}

	script.src = url;
	$obj.get( 0 ).appendChild( script );
}

if ( typeof window[ 'wpb_prepare_tab_content' ] !== 'function' ) {
	/**
	 * Prepare html to correctly display inside tab container
	 *
	 * @param event - ui tab event 'show'
	 * @param ui - jquery ui tabs object
	 */
	window.wpb_prepare_tab_content = function ( event, ui ) {
		var panel = ui.panel || ui.newPanel,
			$pie_charts = panel.find( '.vc_pie_chart:not(.vc_ready)' ),
			$round_charts = panel.find( '.vc_round-chart' ),
			$line_charts = panel.find( '.vc_line-chart' ),
			$carousel = panel.find( '[data-ride="vc_carousel"]' ),
			$ui_panel, $google_maps;
		vc_carouselBehaviour();
		vc_plugin_flexslider( panel );
		if ( ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		if ( panel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			panel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		$pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
		$round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart( { reload: false } );
		$line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart( { reload: false } );
		$carousel.length && jQuery.fn.carousel && $carousel.carousel( 'resizeAction' );
		$ui_panel = panel.find( '.isotope, .wpb_image_grid_ul' ); // why var name '$ui_panel'?
		$google_maps = panel.find( '.wpb_gmaps_widget' );
		if ( $ui_panel.length > 0 ) {
			$ui_panel.isotope( "layout" );
		}
		if ( $google_maps.length && ! $google_maps.is( '.map_ready' ) ) {
			var $frame = $google_maps.find( 'iframe' );
			$frame.attr( 'src', $frame.attr( 'src' ) );
			$google_maps.addClass( 'map_ready' );
		}
		if ( panel.parents( '.isotope' ).length ) {
			panel.parents( '.isotope' ).each( function () {
				jQuery( this ).isotope( "layout" );
			} );
		}
	}
}
var vc_ttaActivation = function () {
	jQuery( '[data-vc-accordion]' ).on( 'show.vc.accordion', function ( e ) {
		var $ = window.jQuery, ui = {};
		ui.newPanel = $( this ).data( 'vc.accordion' ).getTarget();
		window.wpb_prepare_tab_content( e, ui );
	} );
};

var vc_accordionActivate = function ( event, ui ) {
	if ( ui.newPanel.length && ui.newHeader.length ) {
		var $pie_charts = ui.newPanel.find( '.vc_pie_chart:not(.vc_ready)' ),
			$round_charts = ui.newPanel.find( '.vc_round-chart' ),
			$line_charts = ui.newPanel.find( '.vc_line-chart' ),
			$carousel = ui.newPanel.find( '[data-ride="vc_carousel"]' );
		if ( jQuery.fn.isotope != undefined ) {
			ui.newPanel.find( '.isotope, .wpb_image_grid_ul' ).isotope( "layout" );
		}
		if ( ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		//jQuery('html, body').animate({scrollTop: ui.newHeader.offset().top - 100}, 1000); // #1370 enhancement, #1762 issue.
		vc_carouselBehaviour( ui.newPanel );
		vc_plugin_flexslider( ui.newPanel );
		$pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
		$round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart( { reload: false } );
		$line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart( { reload: false } );
		$carousel.length && jQuery.fn.carousel && $carousel.carousel( 'resizeAction' );
		if ( ui.newPanel.parents( '.isotope' ).length ) {
			ui.newPanel.parents( '.isotope' ).each( function () {
				jQuery( this ).isotope( "layout" );
			} );
		}
	}
};

/**
 * Reinitialize all video backgrounds
 */
function initVideoBackgrounds() {
	jQuery( '.vc_row' ).each( function () {
		var $row = jQuery( this ),
			youtubeUrl,
			youtubeId;

		if ( $row.data( 'vcVideoBg' ) ) {
			youtubeUrl = $row.data( 'vcVideoBg' );
			youtubeId = vcExtractYoutubeId( youtubeUrl );

			if ( youtubeId ) {
				$row.find( '.vc_video-bg' ).remove();
				insertYoutubeVideoAsBackground( $row, youtubeId );
			}

			jQuery( window ).on( 'grid:items:added', function ( event, $grid ) {
				if ( ! $row.has( $grid ).length ) {
					return;
				}

				vcResizeVideoBackground( $row );
			} );
		} else {
			$row.find( '.vc_video-bg' ).remove();
		}
	} );
}

/**
 * Insert youtube video into element.
 *
 * Video will be w/o controls, muted, autoplaying and looping.
 */
function insertYoutubeVideoAsBackground( $element, youtubeId, counter ) {
	if ( 'undefined' === typeof( YT.Player ) ) {
		// wait for youtube iframe api to load. try for 10sec, then abort
		counter = 'undefined' === typeof( counter ) ? 0 : counter;
		if ( counter > 100 ) {
			console.warn( 'Too many attempts to load YouTube api' );
			return;
		}

		setTimeout( function () {
			insertYoutubeVideoAsBackground( $element, youtubeId, counter ++ );
		}, 100 );

		return;
	}

	var player,
		$container = $element.prepend( '<div class="vc_video-bg"><div class="inner"></div></div>' ).find( '.inner' );

	player = new YT.Player( $container[ 0 ], {
		width: '100%',
		height: '100%',
		videoId: youtubeId,
		playerVars: {
			playlist: youtubeId,
			iv_load_policy: 3, // hide annotations
			enablejsapi: 1,
			disablekb: 1,
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			rel: 0,
			loop: 1
		},
		events: {
			onReady: function ( event ) {
				event.target.mute().setLoop( true );
			}
		}
	} );

	vcResizeVideoBackground( $element );

	jQuery( window ).bind( 'resize', function () {
		vcResizeVideoBackground( $element );
	} );
}

/**
 * Resize background video iframe so that video content covers whole area
 */
function vcResizeVideoBackground( $element ) {
	var iframeW,
		iframeH,
		marginLeft,
		marginTop,
		containerW = $element.innerWidth(),
		containerH = $element.innerHeight(),
		ratio1 = 16,
		ratio2 = 9;

	if ( ( containerW / containerH ) < ( ratio1 / ratio2 ) ) {
		iframeW = containerH * (ratio1 / ratio2);
		iframeH = containerH;

		marginLeft = - Math.round( ( iframeW - containerW ) / 2 ) + 'px';
		marginTop = - Math.round( ( iframeH - containerH ) / 2 ) + 'px';

		iframeW += 'px';
		iframeH += 'px';
	} else {
		iframeW = containerW;
		iframeH = containerW * (ratio2 / ratio1);

		marginTop = - Math.round( ( iframeH - containerH ) / 2 ) + 'px';
		marginLeft = - Math.round( ( iframeW - containerW ) / 2 ) + 'px';

		iframeW += 'px';
		iframeH += 'px';
	}

	$element.find( '.vc_video-bg iframe' ).css( {
		maxWidth: '1000%',
		marginLeft: marginLeft,
		marginTop: marginTop,
		width: iframeW,
		height: iframeH
	} );
}

/**
 * Extract video ID from youtube url
 */
function vcExtractYoutubeId( url ) {
	if ( 'undefined' === typeof(url) ) {
		return false;
	}

	var id = url.match( /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/ );

	if ( null != id ) {
		return id[ 1 ];
	}

	return false;
}
;/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,b.href&&f&&"map"===e.nodeName.toLowerCase()?(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g)):!1):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return d&&"static"===b.css("position")?!1:e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});
;/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;h>g;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(c).undelegate(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});
;/*!
 * jQuery UI Tabs 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;return function(b){var c,d;b=b.cloneNode(!1),c=b.href.replace(a,""),d=location.href.replace(a,"");try{c=decodeURIComponent(c)}catch(e){}try{d=decodeURIComponent(d)}catch(e){}return b.hash.length>1&&c===d}}(),_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(c.active):this.active=a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){return a(e).attr("aria-controls")===d?(b=c,!1):void 0}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===b||-1===b)&&(b=this.tabs.length?0:!1)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),-1===b&&(b=c?!1:0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d===this.options.active?!1:d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||b.metaKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),0>b&&(b=e),b}for(var e=this.tabs.length-1;-1!==a.inArray(d(),this.options.disabled);)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this,c=this.tabs,d=this.anchors,e=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,d){var e,f,g,h=a(d).uniqueId().attr("id"),i=a(d).closest("li"),j=i.attr("aria-controls");b._isLocal(d)?(e=d.hash,g=e.substring(1),f=b.element.find(b._sanitizeSelector(e))):(g=i.attr("aria-controls")||a({}).uniqueId()[0].id,e="#"+g,f=b.element.find(e),f.length||(f=b._createPanel(g),f.insertAfter(b.panels[c-1]||b.tablist)),f.attr("aria-live","polite")),f.length&&(b.panels=b.panels.add(f)),j&&i.data("ui-tabs-aria-controls",j),i.attr({"aria-controls":g,"aria-labelledby":h}),f.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),c&&(this._off(c.not(this.tabs)),this._off(d.not(this.anchors)),this._off(e.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var c,d=0;c=this.tabs[d];d++)b===!0||-1!==a.inArray(d,b)?a(c).addClass("ui-state-disabled").attr("aria-disabled","true"):a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(a){a.preventDefault()}}),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=h?!1:this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,h.length&&this.options.hide?this._hide(h,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h.hide(),e()),h.attr("aria-hidden","true"),c.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr("aria-hidden","false"),c.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(b){var c=this.options.disabled;c!==!1&&(void 0===b?c=!1:(b=this._getIndex(b),c=a.isArray(c)?a.map(c,function(a){return a!==b?a:null}):a.map(this.tabs,function(a,c){return c!==b?c:null})),this._setupDisabled(c))},disable:function(b){var c=this.options.disabled;if(c!==!0){if(void 0===b)c=!0;else{if(b=this._getIndex(b),-1!==a.inArray(b,c))return;c=a.isArray(c)?a.merge([b],c).sort():[b]}this._setupDisabled(c)}},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),f=e.find(".ui-tabs-anchor"),g=this._getPanelForTab(e),h={tab:e,panel:g},i=function(a,b){"abort"===b&&d.panels.stop(!1,!0),e.removeClass("ui-tabs-loading"),g.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr};this._isLocal(f[0])||(this.xhr=a.ajax(this._ajaxSettings(f,c,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(e.addClass("ui-tabs-loading"),g.attr("aria-busy","true"),this.xhr.done(function(a,b,e){setTimeout(function(){g.html(a),d._trigger("load",c,h),i(e,b)},1)}).fail(function(a,b){setTimeout(function(){i(a,b)},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})});
;;(function($){
	$.extend( $.ui.tabs.prototype, {
		rotation: null,
		rotationDelay: null,
		continuing: null,
		rotate: function( ms, continuing ) {
			var self = this,
				o = this.options;

			if((ms > 1 || self.rotationDelay === null) && ms !== undefined){//only set rotationDelay if this is the first time through or if not immediately moving on from an unpause
				self.rotationDelay = ms;
			}

			if(continuing !== undefined){
				self.continuing = continuing;
			}

			var rotate = self._rotate || ( self._rotate = function( e ) {
				clearTimeout( self.rotation );
				self.rotation = setTimeout(function() {
					var t = o.active;
					self.option( "active",  ++t < self.anchors.length ? t : 0 );
				}, ms );

				if ( e ) {
					e.stopPropagation();
				}
			});

			var stop = self._unrotate || ( self._unrotate = !continuing
				? function(e) {
					if (e.clientX) { // in case of a true click
						self.rotate(null);
					}
				}
				: function( e ) {
					t = o.active;
					rotate();
				});

			// start rotation
			if ( ms ) {
				this.element.bind( "tabsactivate", rotate );
				this.anchors.bind( o.event + ".tabs", stop );
				rotate();
			// stop rotation
			} else {
				clearTimeout( self.rotation );
				this.element.unbind( "tabsactivate", rotate );
				this.anchors.unbind( o.event + ".tabs", stop );
				delete this._rotate;
				delete this._unrotate;
			}

			//rotate immediately and then have normal rotation delay
			if(ms === 1){
				//set ms back to what it was originally set to
				ms = self.rotationDelay;
			}

			return this;
		},
		pause: function() {
			var self = this,
				o = this.options;

			self.rotate(0);
		},
		unpause: function(){
			var self = this,
				o = this.options;

			self.rotate(1, self.continuing);
		}
	});
})(jQuery);
