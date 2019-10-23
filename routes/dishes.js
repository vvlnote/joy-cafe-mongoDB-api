const router = require('express').Router();
let Dish = require('../models/dish.model');

router.route('/').get((req, res) => {
	Dish.find()
		.populate('ingredients.ingredient')
		.then(dishes => res.json(dishes))
		.catch(err => res.status(400).json("Error: " + err));
});


router.route('/:id').get((req, res) => {
	Dish.findById(req.params.id)
		.populate('ingredients.ingredient')
		.then(dish => res.json(dish))
		.catch(err => res.status(400).json("Error: " - err));
});

router.route('/update/:id').post((req, res) => {
	Dish.findById(req.params.id)
		.then(dish => {
			console.log(req.body);
			dish.name = req.body.name;
			dish.price = req.body.price;
			dish.total_orders = req.body.total_orders;

			dish.save()
				.then(() => res.json("dish updated!"))
				.catch(err => res.status(400).json("Error: " - err));
		})
		.catch(err => res.status(400).json("Error: " - err));
});

module.exports = router;


