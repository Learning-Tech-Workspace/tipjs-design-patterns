function getPrice(originalPrice, typePromotion = "default") {

	if (typePromotion === "preOrder") {
		return originalPrice * 0.8; // giảm 20%
	}

	if (typePromotion === "birthday") {
		return originalPrice * 0.5;
	}

	if (typePromotion === "promotion") {
		return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
	}

	if (typePromotion === "default") {
		return originalPrice;
	}
}

console.log(`----> PRICE:::`, getPrice(200, "preOrder"));
console.log(`----> PRICE:::`, getPrice(200, "promotion"));
console.log(`----> PRICE:::`, getPrice(200, "birthday"));
console.log(`----> PRICE:::`, getPrice(200, "default"));