function eduard(){
var voorn = prompt("wat is je naam");

if (voorn =="stop"){
	return voorn
}else{
	var achtern = prompt("wat is je achternaam")
	document.write("je voor naam is " + voorn + "<br>")
}
if (achtern =="stop"){
	return achtern
}else{
	document.write("je achter naam is " + achtern + "<br><br>")
}
eduard();
}
eduard();

