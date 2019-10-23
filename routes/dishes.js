const router = require('express').Router();
let Dish = require('../models/dish.model');

router.route('/').get((req, res) => {
	Dish.find()
		.then(dishes => res.json(dishes))
		.catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;