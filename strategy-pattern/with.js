/**
 * Giảm giá cho khách hàng đặt trước
 * @param {number} originalPrice
 * @returns {number}
 */
function getPreOrderPrice(originalPrice) {
	return originalPrice * 0.8;
}

/**
 * Giảm giá cho khách hàng vào ngày sinh nhật
 * @param {number} originalPrice
 * @returns {number}
 */
function getBirthdayPrice(originalPrice) {
	return originalPrice * 0.5;
}

/**
 * Default price
 * @param {number} originalPrice
 * @returns {number}
 */
function getDefaultPrice(originalPrice) {
	return originalPrice;
}

// key: type promotion, value: function for that promotion
const promotionStrategies = {
	preOrder: getPreOrderPrice,
	birthday: getBirthdayPrice,
	default: getDefaultPrice,
};

function getPrice(originalPrice, typePromotion) {
	return promotionStrategies[typePromotion](originalPrice);
}

console.log(`----> PRICE:::`, getPrice(200, "preOrder"));
console.log(`----> PRICE:::`, getPrice(200, "birthday"));
console.log(`----> PRICE:::`, getPrice(200, "default"));