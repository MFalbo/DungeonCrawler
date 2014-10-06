// console.log("main.js linked");

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



// player: function(String){
// 		player = new Player(String);
// 		return player;
// 	},//wrong

$(document).ready(function(){
	
	var world = new World();
	var player = new Player();

	var characterInfoTemplate = $("#character-info");
	var characterInfoText = characterInfoTemplate.html();
	var characterTemplate = Handlebars.compile(characterInfoText);

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
		console.log(player);

		$('.initializeForm2').remove();
		$('body').append(characterTemplate({player: player}));
		return false;
	});

	$(".takeDmg").click(function(){
		player.takeDamage(5);
	});

	$(".restoreHealth").click(function(){
		player.restoreHealth(10);
	});


});











