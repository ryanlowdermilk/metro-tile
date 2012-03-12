$(function () {
	$(".metro-tile").bind('mousedown', function (e) {
		var touchLeft = 33;
		var touchTop = 16;
		var touchBottom = 72;
		var touchRight = 66;
		var x = e.pageX - this.offsetLeft - $(this).parent().offset().left;
		var y = e.pageY - this.offsetTop - $(this).parent().offset().top;
		var width = $(this).width();
		var height = $(this).height();			
		var wp = parseInt(x/width*100);
		var hp = parseInt(y/height*100);
		var left = (wp <= touchLeft && hp >= touchTop && hp < touchBottom);
		var right = (wp >= touchRight && hp > touchTop && hp < touchBottom);
		var top = (hp > 0 && hp <= touchTop);
		var bottom = (hp > touchBottom);
		var middle = (hp > touchTop && hp < touchBottom && wp > touchLeft && wp < touchRight);
		if (right) $(this).addClass("tile_right");
		else if (left) $(this).addClass("tile_left");
		else if (bottom) $(this).addClass("tile_bottom");
		else if (top) $(this).addClass("tile_top");
		else if (middle) $(this).addClass("tile_middle");
		return false;
	});
});

$(function () {
	$(".metro-surface").mouseup(function (x) {
		$(".metro-tile").removeClass("tile_left");
		$(".metro-tile").removeClass("tile_right");
		$(".metro-tile").removeClass("tile_bottom");
		$(".metro-tile").removeClass("tile_top");
		$(".metro-tile").removeClass("tile_middle");
		$(".metro-tile").addClass("tile_reset");
		return false;
});
});