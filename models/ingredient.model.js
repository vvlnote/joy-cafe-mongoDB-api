const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema;


let IngredientSchema = new Schema({
	name: { 
		type: String, 
		required: true,
		unique: true
		},
	unit_cost: { type: Float},
	used_amount: { type: Float},
	available_amount: { type: Float},
	low_amount_alert: { type: Float},
	alert: {type: Boolean, default: false}
});

module.exports = mongoose.model('Ingredient', IngredientSchema);