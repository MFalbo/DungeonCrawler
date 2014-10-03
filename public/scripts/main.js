console.log("main.js linked");

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
	this.inventory = []
}
Player.prototype.levelUp = function() {
	this.lvl += 1;
}



// player: function(String){
// 		player = new Player(String);
// 		return player;
// 	},//wrong

$(document).ready(function(){
	
	var world = new World();
	var player = new Player();

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
		$('.intro').text(world.name);
		return false;
	});


});











