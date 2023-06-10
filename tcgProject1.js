// card object
var card = {
	name: "Mask of Momentum",
	type: "Equipment",
	flavorText: "Light as feathers; Delicate as petals; Strong as oak",
	defense: 2,
	affiliation: "Ninja",
	effects: ["Once per turn effect: When an attack action card you control is the third or higher chain link in a row to hit, draw a card.", "Blade Break: If you defend with this, destroy it after combat."],
	attached: false,
	broken: false,
	defending: false,
	// method to attach to Hero
	// method to defend, receive damage and break
};

for (var prop in card) {
	console.log(prop + ": " + card[prop]);
}