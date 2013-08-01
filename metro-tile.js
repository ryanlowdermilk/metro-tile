jQuery(function () {
	jQuery(".metro-tile").bind('mousedown', function (e) {
		var touchLeft = 33;
		var touchTop = 16;
		var touchBottom = 72;
		var touchRight = 66;
		var x = e.pageX - this.offsetLeft - jQuery(this).parent().offset().left;
		var y = e.pageY - this.offsetTop - jQuery(this).parent().offset().top;
		var width = jQuery(this).width();
		var height = jQuery(this).height();			
		var wp = parseInt(x/width*100);
		var hp = parseInt(y/height*100);
		var left = (wp <= touchLeft && hp >= touchTop && hp < touchBottom);
		var right = (wp >= touchRight && hp > touchTop && hp < touchBottom);
		var top = (hp > 0 && hp <= touchTop);
		var bottom = (hp > touchBottom);
		var middle = (hp > touchTop && hp < touchBottom && wp > touchLeft && wp < touchRight);
		if (right) jQuery(this).addClass("tile_right");
		else if (left) jQuery(this).addClass("tile_left");
		else if (bottom) jQuery(this).addClass("tile_bottom");
		else if (top) jQuery(this).addClass("tile_top");
		else if (middle) jQuery(this).addClass("tile_middle");
		return false;
	});
	
	jQuery(".metro-surface").mouseup(function (x) {
		jQuery(".metro-tile").removeClass("tile_left");
		jQuery(".metro-tile").removeClass("tile_right");
		jQuery(".metro-tile").removeClass("tile_bottom");
		jQuery(".metro-tile").removeClass("tile_top");
		jQuery(".metro-tile").removeClass("tile_middle");
		jQuery(".metro-tile").addClass("tile_reset");
		return false;
	});
});