function addition(nummer1, nummer2){
	document.write(nummer1 + " + " + nummer2 + " = " )
	document.write(nummer1 + nummer2)
}
addition(10, 12)

function subtraction(nummer1, nummer2){
	document.write("<br>" + nummer1 + " - " + nummer2 + " = " )
	document.write(nummer1 - nummer2)
}
subtraction(58, 34)

function increment(nummer1){
	for(i = 1; i<=3; i++){
	document.write("<br>"+nummer1)
	document.write(" + " + "1" + " = ")
	nummer1++
	document.write(nummer1)
	}
}
increment(12)

function tim(nummer1){
	for(k = 1; k<=3; k++){
	document.write("<br>"+nummer1)
	document.write(" - " + "1" + " = ")
	nummer1--
	document.write(nummer1)
	}
}
tim(34)