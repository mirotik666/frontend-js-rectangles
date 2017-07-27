'use strict';


function getBottomSide(rectangle) {
	return rectangle.top + rectangle.height;
}

function getRightSide(rectangle) {
	return rectangle.left + rectangle.width;
}

function areIntersected(rectangleFirst, rectangleSecond) {

	let intersectedAxisX;
	let intersectedAxisY;

	if (rectangleFirst.top < getBottomSide(rectangleSecond) && getBottomSide(rectangleFirst) > rectangleSecond.top) {
		intersectedAxisY = true;
	}
	if (rectangleFirst.left < getRightSide(rectangleSecond) && getRightSide(rectangleFirst) > rectangleSecond.left) {
		intersectedAxisX = true;
	}
	if (intersectedAxisX & intersectedAxisY) {
		return true;
	}

	return false;
}


function filterVisible(rectangleFirst, array) {
	return array.filter(function(element) {
		if (element.width !== 0 && element.height !== 0) {
			return areIntersected(rectangleFirst, element);
		} else {
			return false;
		}
	});
}

console.log(filterVisible);