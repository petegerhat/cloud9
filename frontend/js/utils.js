//define(['jquery'], function($) {
	/*
	function callWhenReady(selector, callback, scope, params) {
		if ($(selector).closest('body').length) {
			callback.call(scope, params);
		}
		else {
			setTimeout(function() {
				callWhenReady(selector, callback, scope, params);
			}, 1);
		}
	}
	*/
	function sanitizeData(jsonArray) {
		var newKey;
		jsonArray.forEach(function(item) {
			for (key in item) {
				newKey = key.replace(/\s/g, '').replace(/\./g, '');
				if (key != newKey) {
					item[newKey] = item[key];
					delete item[key];
				}
			}
		})
		return jsonArray;
	}
	//remove whitespace and dots from data : <propName> references
	function sanitizeColumns(jsonArray) {
		var dataProp = [];
		jsonArray.forEach(function(item) {
			dataProp = item['data'].replace(/\s/g, '').replace(/\./g, '');
			item['data'] = dataProp;
		})
		return jsonArray;
	}
//});

var cHeight = 0;

$('#mainCarousel').on('slide.bs.carousel', function (e) {
        var $nextImage = null;

        $activeItem = $('.active.item', this);

        if (e.direction == 'left'){
            $nextImage = $activeItem.next('.item').find('img');
        } else {
			if ($activeItem.index() == 0){
                $nextImage = $('img:last', $activeItem.parent());
            } else {
                $nextImage = $activeItem.prev('.item').find('img');
            }
	    }

        // prevents the slide decrease in height
        if (cHeight == 0) {
           cHeight = $(this).height();
           $activeItem.next('.item').height(cHeight);
        }

        // prevents the loaded image if it is already loaded
        var src = $nextImage.data('lazy-load-src');
        
        if (typeof src !== "undefined" && src != "") {
           $nextImage.attr('src', src)
           $nextImage.data('lazy-load-src', '');
        }
    });