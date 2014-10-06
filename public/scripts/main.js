// console.log("main.js linked");

// -------------------------Constructors--------------------------
// World Constructor
var World = function(name){
	this.name = name,
	this.player = Object,
	this.rooms = Array,
	this.items = Array,
	this.monsters = Array
}
World.prototype.createPlayer = function(playerName) {
	this.player = new Player(playerName);
};

//These should potentially be prototype methods on a room
World.prototype.populateItems = function(){
	return items
};
World.prototype.populateMonsters = function() {
	return monsters;
};

// Player Constructor
var Player = function(name){
	this.name = name,
	this.type = Object, //save for second dev round? Require player to be instance of character type which needs to be instance of character?
	this.lvl = 1,
	this.health = 100,
	this.inventory = []
}
Player.prototype.levelUp = function() {
	this.lvl += 1;
}
Player.prototype.takeDamage = function(dmgAmount){
	this.health -= dmgAmount;
	this.health <= 0 ? console.log("Your Player has died!!") : console.log("Player took damage.  Health is " + this.health);
}
Player.prototype.restoreHealth = function(restoreAmount) {
	this.health += restoreAmount;
	this.health > 100 ? this.health = 100 : this.health;
	console.log("Player restored health.  Health is " + this.health);
};

var Room = function(){
	this.monster = Object,
	this.item = Object,
	this.leftDoor = Boolean,
	this.rightDoor = Boolean
	this.locationNum = Number
}

// Monster Constructor
var Monster = function(){
	this.name = String,
	this.type = Object,
	this.lvl = Number,
	this.health = 100,
	this.items = []
}

// ----------------Handlebars Templates---------------
var characterInfoTemplate = $("#character-info");
var characterInfoText = characterInfoTemplate.html();
var characterTemplate = Handlebars.compile(characterInfoText);


var createMap = function(){
	for(var i=0; i<5; i++){
		var tempRoom = new Room();
		tempRoom.locationNum = i;
		if(i===0){
			tempRoom.leftDoor = false;
			tempRoom.rightDoor = true;
		}else if(i===4){
			tempRoom.leftDoor = true;
			tempRoom.rightDoor = false;
		}else{
			tempRoom.leftDoor = true;
			tempRoom.rightDoor = true;
		}
		map.push(tempRoom);
	}
};

var world = new World();
var player = new Player();
var map = [];

createMap();

console.log(map);
world.rooms = map;

$(document).ready(function(){
	
	// var world = new World();
	// var player = new Player();
	// var map = [];

	// for(var i=0; i<5; i++){
	// 	var tempRoom = new Room();
	// 	tempRoom.locationNum = i;
	// 	if(i===0){
	// 		tempRoom.leftDoor = false;
	// 		tempRoom.rightDoor = true;
	// 	}else if(i===4){
	// 		tempRoom.leftDoor = true;
	// 		tempRoom.rightDoor = false;
	// 	}else{
	// 		tempRoom.leftDoor = true;
	// 		tempRoom.rightDoor = true;
	// 	}
	// 	map.push(tempRoom);
	// }

	// console.log(map);
	// world.rooms = map;

	$('.initializeForm').submit(function(){

		world.name = $('#worldName').val();
		console.log(world);
		// world = new World(worldName);

		$('.initializeForm').replaceWith($('.initializeForm2'));
		$('.initializeForm2').show();

		return false;
	});

	$('.initializeForm2').submit(function(){

		player.name = $('#playerName').val();
		world.player = player;
		console.log(player);

		$('.initializeForm2').remove();
		$('body').append(characterTemplate({player: player}));
		return false;
	});

//Temporary event handlers to test damage and restore player methods
	$(".takeDmg").click(function(){
		player.takeDamage(5);
	});

	$(".restoreHealth").click(function(){
		player.restoreHealth(10);
	});


});











