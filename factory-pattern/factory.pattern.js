class Car {
	constructor({
		name = "Ford Ranger 2023",
		doors = 4,
		price = "10 VND",
		customerInfo = {}
	}) {
		this.name = name;
		this.doors = doors;
		this.price = price;
		this.customerInfo = customerInfo;
	}
}

class ServiceLogistics {
	transportClass;

	constructor(transportClass) {
		this.transportClass = transportClass;
	}

	getTransport = (transportData) => {
		return new this.transportClass(transportData)
	}
}

let carService = new ServiceLogistics(Car);

console.log('CarService::', carService.getTransport({
	customerInfo: {
		name: "Mary",
		age: 25,
	}
}))

class Truck {
	constructor({
		name = "Container 2023",
		doors = 16,
		price = "100 VND",
		customerInfo = {}
	}) {
		this.doors = doors;
		this.price = price;
		this.name = name;
		this.customerInfo = customerInfo;
	}
}

let truckService = new ServiceLogistics(Truck);

console.log('TruckService::', truckService.getTransport({
	customerInfo: {
		name: "Alex",
		age: 20,
	}
}))