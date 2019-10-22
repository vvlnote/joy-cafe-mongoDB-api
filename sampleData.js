require('./server');

let Ingredient = require('./models/ingredient.model');
let Dish = require('./models/dish.model');

//create ingredients sample data
let cabbage = new Ingredient({
	name: 'Cabbage',
	unit_cost: 1.29,
	used_amount: 0,
	available_amount: 20,
	low_amount_alert: 5,
	alert: false
});

let cauliflower = new Ingredient({
	name: 'Cauliflower',
	unit_cose: 2.55,
	used_amount: 0,
	available_amount: 20,
	low_amount_alert: 5,
	alert: false
});

let beef = new Ingredient({
	name: 'Beef',
	unit_cose: 3.45,
	used_amount: 0,
	available_amount: 25,
	low_amount_alert: 5,
	alert: false
});

let lotusRoot = new Ingredient({
	name: 'Lotus Root',
	unit_cose: 2.35,
	used_amount: 0,
	available_amount: 40,
	low_amount_alert: 15,
	alert: false
});

let pork = new Ingredient({
	name: 'Pork',
	unit_cose: 2.85,
	used_amount: 0,
	available_amount: 35,
	low_amount_alert: 5,
	alert: false
});

let tofu = new Ingredient({
	name: 'Tofu',
	unit_cose: 1.25,
	used_amount: 0,
	available_amount: 15,
	low_amount_alert: 5,
	alert: false
});

let pickledLongBeen = new Ingredient({
	name: 'Pickled Long Been',
	unit_cose: 1.35,
	used_amount: 0,
	available_amount: 25,
	low_amount_alert: 5,
	alert: false
});

let greenBellPepper = new Ingredient({
	name: 'Green Bell Pepper',
	unit_cose: 0.39,
	used_amount: 0,
	available_amount: 15,
	low_amount_alert: 3,
	alert: false
});

let chicken = new Ingredient({
	name: 'Chicken',
	unit_cose: 2.99,
	used_amount: 0,
	available_amount: 35,
	low_amount_alert: 10,
	alert: false
});

let shrimp = new Ingredient({
	name: 'Shrimp',
	unit_cose: 3.99,
	used_amount: 0,
	available_amount: 30,
	low_amount_alert: 10,
	alert: false
});

let rice = new Ingredient({
	name: 'Rice',
	unit_cose: 0.75,
	used_amount: 0,
	available_amount: 100,
	low_amount_alert: 20,
	alert: false
});



cabbage.save();
cauliflower.save();

beef.save();
lotusRoot.save();

pork.save();
tofu.save();

pickledLongBeen.save();
greenBellPepper.save();

chicken.save();
shrimp.save();

rice.save();

//create dishes sample data
let shreddedCabbage = new Dish({
	name: 'Shredded Cabbage',
	price: 14.00,
	total_orders: 0,
	ingredients: [
		{used_amount: 1.75,
		ingredient: cabbage._id},
		{used_amount: 0.30,
			ingredient: pork._id}
	]
});

shreddedCabbage.save();

let organicCauliflower = new Dish({
	name: 'Organic Cauliflower',
	price: 18,
	total_orders: 0,
	ingredients: [
		{used_amount: 1.89,
		ingredient: cauliflower._id},
		{used_amount: 0.50,
			ingredient: pork._id}
	]
});

organicCauliflower.save();

let hotClayPepperBeef = new Dish({
	name: 'Hot Clay Pepper Beef',
	price: 15.75,
	total_orders: 0,
	ingredients: [
		{used_amount: 2.00,
		ingredient: beef._id},
		{used_amount: 1.00,
			ingredient: greenBellPepper._id}
	]	
})

hotClayPepperBeef.save();

let stirFryLotusRoot = new Dish({
	name: 'Stir Fry Lotus Root',
	price: 14.95,
	total_orders: 0,
	ingredients: [
		{used_amount: 2.25,
		ingredient: lotusRoot._id},
		{used_amount: 0.50,
			ingredient: pork._id},
		{used_amount: 0.50,
			ingredient: greenBellPepper._id}
	]	
})

stirFryLotusRoot.save();

let mapoTofu = new Dish({
	name: 'Mapo Tofu',
	price: 15.00,
	total_orders: 0,
	ingredients: [
		{used_amount: 1.25,
		ingredient: pork._id},
		{used_amount: 1.00,
			ingredient: tofu._id}
	]		
});

mapoTofu.save();

//dish#6
let porkLongBeen = new Dish({
	name: 'Miced Pork with Pickled Long Been',
	price: 18.25,
	total_orders: 0,
	ingredients: [
		{//ingredient#7
			used_amount: 2.25,
			ingredient: pickledLongBeen._id},
		{//ingredient#5
			used_amount: 1.25,
			ingredient: pork._id}
	]	
})

porkLongBeen.save();

//dish#7
let porkGreenPepper = new Dish({
	name: 'Stir Fry Pork with Green Bell Pepper',
	price: 13.29,
	total_orders: 0,
	ingredients: [
		{//ingredient#8
			used_amount: 1.25,
			ingredient: greenBellPepper._id},
		{//ingredient#5
			used_amount: 1.75,
			ingredient: pork._id}
	]		
})

porkGreenPepper.save();

//dish#8
let friedSpicyChicken = new Dish({
	name: 'Fried Spicy Chicken',
	price: 18.00,
	total_orders: 0,
	ingredients: [
		{//ingredient#9
			used_amount: 2.25,
			ingredient: chicken._id}
	]	
})

friedSpicyChicken.save();

//dish#9
let stirFrySpicyShrimp = new Dish({
	name: 'Stir Fry Spicy Shrimp',
	price: 19.50,
	total_orders: 0,
	ingredients: [
		{//ingredient#10
			used_amount: 2.00,
			ingredient: shrimp._id},
		{//ingredient#8
			used_amount: 0.75,
			ingredient: greenBellPepper._id}
	]			
})

stirFrySpicyShrimp.save();

//dish#10
let bowlRice = new Dish({
	name: 'Rice',
	price: 2.00,
	total_orders: 0,
	ingredients: [
		{//ingredient#11
			used_amount: 1.00,
			ingredient: rice._id}
	]	
})

bowlRice.save();

Dish.find({})
	.populate('ingredients.ingredient')
	.exec(function(error, dishes) {
		console.log(JSON.stringify(dishes, null, "\t"))
})
