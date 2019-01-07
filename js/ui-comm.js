(function($) {
	'use strict';

	var $doc = $(document),
		$win = $(window);


	/* 탭메뉴 */
	var tabMenu = function() {
		$doc.on('click', '[data-ui="tab-btn"]', function(e) {
			var $this = $(this),
			$target = $('#' + $this.data('target')),
			$group = $('[data-ui="tab-btn"][data-group="' + $this.data('group') + '"]'),
			$opened = (function() {
				var $element = undefined;
				$.each($group, function() {
					if ($(this).hasClass('is-active')) {
						$element = $('#' + $(this).data('target'));
					}
				});
				return $element;
			})();
			if (!$(this).hasClass('is-active')) {
				$group.removeClass('is-active');
				$(this).addClass('is-active');
				if ($opened !== undefined) {
					$opened.hide();
				}
				$target.show();
			}
			return;
			// e.preventDefault();
		});

	}
	tabMenu();

	var datepickers = function($win){
		var $wins = $win || $doc,
			$datepickers = $wins.find("[data-ui='datepicker']");
		if ($datepickers.length){
			$.datepicker.setDefaults({
				dateFormat: 'yy-mm-dd',
				prevText: '이전 달',
				nextText: '다음 달',
				monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
				monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
				dayNames: ['일', '월', '화', '수', '목', '금', '토'],
				dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
				showMonthAfterYear: true,
				yearSuffix: '년'
			});

			$("[data-ui='datepicker']").datepicker();

		}
		return;
	}
	datepickers();


	var select_2 = function($win){
		var $wins = $win || $doc,
			$selecters = $wins.find("[data-ui='selecter']");
		if ($selecters.length){
			$selecters.select2({
				minimumResultsForSearch: Infinity, //드롭 메뉴의 검색바 삭제
			});
		}
		return;
	}
	select_2();

	var tooltips = function($win){
		var $wins = $win || $doc,
			$tooltips = $wins.find("[data-tooltip]");
		if ($tooltips.length){
			$tooltips.attr({'title':''});
			$tooltips.tooltip({
				content: function() {
					return $(this).attr("data-tooltip");
				},
				track: true
			});
		}
		return;
	}
	tooltips();
	

})(jQuery);