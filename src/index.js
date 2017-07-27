'use strict';

function areIntersected(rectangleA, rectangleB) {

    function getBottomSide(rectangle) {
        return rectangle.top + rectangle.height;
    }

    function getRightSide(rectangle) {
        return rectangle.left + rectangle.width;
    }

    let intersectedAxisX;
    let intersectedAxisY;

    if (rectangleA.top < getBottomSide(rectangleB) && getBottomSide(rectangleA) > rectangleB.top) {
        intersectedAxisY = true;
    }
    if (rectangleA.left < getRightSide(rectangleB) && getRightSide(rectangleA) > rectangleB.left) {
        intersectedAxisX = true;
    }
    if (intersectedAxisX & intersectedAxisY) {
        return true;
    }

    return false;
}



function filterVisible(rectangleA, array) {
    return array.filter(function(element) {
        if (element.width !== 0 && element.height !== 0) {
            return areIntersected(rectangleA, element);
        } else {
            return false;
        }
    });
}

console.log(filterVisible);