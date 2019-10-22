const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;


let DishSchema = new Schema({
	name: { 
		type: String, 
		required: true,
		unique: true
		},
	price: { type: Float},
	total_orders: { type: Number},
	ingredients: [{
		used_amount: {type: Float},
		ingredient: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Ingredient"
		}
	}]

});

module.exports = mongoose.model('Dish', DishSchema);