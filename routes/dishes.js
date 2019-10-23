const router = require('express').Router();
let Dish = require('../models/dish.model');

router.route('/').get((req, res) => {
	Dish.find()
		.populate('ingredients.ingredient')
		.then(dishes => res.json(dishes))
		.catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;

// Dish.find({})
// 	.populate('ingredients.ingredient')
// 	.exec(function(error, dishes) {
// 		console.log(JSON.stringify(dishes, null, "\t"))
// })