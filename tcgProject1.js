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

// hero object
var hero = {
	name: "Daniel",
	health: 40,
	attribute: "Guardian",
	defeated: false
};

// equipment object
var equipment = {
	name: "Helm of Righteousness",
	defPwr: 7,
	broken: false
};

// weapon object
var weapon = {
	name: "Rayalda's Gift",
	speed: 5,
	atkPwr: 10,
	defPwr: 4,
	broken: false
};

// attackAction object
var attackAction = {
	name: "Dominate",
	cost: 3,
	effect: "Destroy opponent's equipment.",
	maxCopies: 1,
	used: false
};

// attackReaction object
var attackReaction = {
	name: "Subtle Slip",
	cost: 1,
	effect: "Add +1 power to current attack action card.",
	maxCopies: 4,
	used: false
};

// defenseReaction object
var defenseReaction = {
	name: "Dodge Roll",
	cost: 2,
	effect: "Decrease oncoming attack by 2 power.",
	maxCopies: 4,
	used: false
};


for (var prop in card) {
	console.log(prop + ": " + card[prop]);
}