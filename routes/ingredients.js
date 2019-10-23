const router = require('express').Router();
let Ingredient = require('../models/ingredient.model');
//let Float = require('mongoose-float').loadType(mongoose);

router.route('/').get((req, res) => {
	Ingredient.find()
		.then(ingredients => res.json(ingredients))
		.catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
	Ingredient.findById(req.params.id)
		.then(ingredient => res.json(ingredient))
		.catch(err => res.status(400).json("Error: " - err));
});

router.route('/update/:id').post((req, res) => {
	Ingredient.findById(req.params.id)
		.then(ingredient => {
			console.log(req.body);
			ingredient.name = req.body.name;
			ingredient.unit_cost = req.body.unit_cost;
			ingredient.used_amount = req.body.used_amount;
			ingredient.available_amount = req.body.available_amount;
			ingredient.low_amount_alert = req.body.low_amount_alert;
			ingredient.alert = req.body.alert;
			console.log("ingredient = ", ingredient);
			ingredient.save()
				.then(() => res.json("Ingredient updated!"))
				.catch(err => res.status(400).json("Error: " - err));
		})
		.catch(err => res.status(400).json("Error: " - err));
});

module.exports = router;