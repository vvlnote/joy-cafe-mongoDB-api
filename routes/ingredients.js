const router = require('express').Router();
let Ingredient = require('../models/ingredient.model');

router.route('/').get((req, res) => {
	Ingredient.find()
		.then(ingredients => res.json(ingredients))
		.catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;