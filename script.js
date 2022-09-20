function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var first_name = ["abandoned","enricke"];

	var name = capFirst(first_name[getRandomInt(0, first_name.length + 1)]);
    document.getElementById("random_name").innerHTML = name; 
}