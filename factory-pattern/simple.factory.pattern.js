// without simple factory pattern

const serviceLogistics = (truckType) => {
	switch (truckType) {
		case 'small':
			return {
				name: "Truck small",
				doors: 6,
				price: "100.000 VND"
			};
		case 'medium':
			return {
				name: "Truck medium",
				doors: 16,
				price: "1.000.000 VND"
			};
	}
}

console.log(`Level 0:::`, serviceLogistics('medium'));

// with simple factory pattern
class ServiceLogistics {
	constructor(
		name = "Truck small",
		doors = 6,
		price = "100.000 VND",
	) {
		this.name = name;
		this.doors = doors;
		this.price = price;
	}

	static getTransport = (truckType) => {
		switch (truckType) {
			case 'small':
				return new ServiceLogistics();
			case 'medium':
				return new ServiceLogistics(
					"Truck medium",
					16,
					"1.000.000 VND"
				);
		}
	}
}

console.log(`Level xxx:::`, ServiceLogistics.getTransport('medium'));
