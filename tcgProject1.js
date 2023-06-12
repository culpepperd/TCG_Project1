// There is still time

// top boundary
var topBound = [15, 16, 17, 18, 19];

// bottom boundary
var bottomBound = [0, 1, 2, 3, 4];

// Right boundary
var rightBound = [4, 9, 14, 19];

// Left boundary
var leftBound = [0, 5, 10, 15];

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
	type: "Hero card",
	name: "Daniel",
	health: 40,
	attribute: "Guardian",
	defeated: false
};

// companion object
var companion = {
	type: "Companion card",
	name: "Jack Shepard",
	attribute: "Land Beast",
	health: 15,
	effect: "Provides designated hero with +3 power.",
	altEffect: "When called upon, can apply 1 sneak damage (sneak damage is unblockable).",
	defeated: false
}

// equipment object
var equipment = {
	type: "Equipment card",
	name: "Helm of Righteousness",
	defPwr: 7,
	broken: false
};

// weapon object
var weapon = {
	type: "Weapon card",
	name: "Rayalda's Gift",
	speed: 5,
	atkPwr: 10,
	defPwr: 4,
	broken: false
};

// attackAction object
var attackAction = {
	type: "Attack Action card",
	name: "Dominate",
	cost: 3,
	effect: "Destroy opponent's equipment.",
	maxCopies: 1,
	used: false
};

// attackReaction object
var attackReaction = {
	type: "Attack Reaction card",
	name: "Subtle Slip",
	cost: 1,
	effect: "Add +1 power to current attack action card.",
	maxCopies: 4,
	used: false
};

// defenseReaction object
var defenseReaction = {
	type: "Defense Reaction card",
	name: "Dodge Roll",
	cost: 2,
	effect: "Decrease oncoming attack by 2 power.",
	maxCopies: 4,
	used: false
};

var cardTypes = [hero.name, companion.name, equipment.name, weapon.name, attackAction.name, attackReaction.name, defenseReaction.name];

console.log(hero.name + "'s weapon is called, " + weapon.name + ", and his companion's name is " + companion.name + ".");

for (var i = 0; i < cardTypes.length; i++) {
	console.log(cardTypes[i]);
}


// for/in loop to print each property in card object
for (var prop in card) {
	console.log(prop + ": " + card[prop]);
}

for (var prop in hero) {
	console.log(prop + ": " + hero[prop]);
}

for (var prop in companion) {
	console.log(prop + ": " + companion[prop]);
}

for (var prop in equipment) {
	console.log(prop + ": " + equipment[prop]);
}

for (var prop in weapon) {
	console.log(prop + ": " + weapon[prop]);
}

for (var prop in attackAction) {
	console.log(prop + ": " + attackAction[prop]);
}

for (var prop in attackReaction) {
	console.log(prop + ": " + attackReaction[prop]);
}

for (var prop in defenseReaction) {
	console.log(prop + ": " + defenseReaction[prop]);
}