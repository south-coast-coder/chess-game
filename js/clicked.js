function clicked(piece,square){
	alert(piece)
	var piece=piece
	var name=document.getElementById(piece).parentElement.id
	alert (name)
	console.log("name"+name)
	localStorage.setItem('currentPiece', piece);
	localStorage.setItem('currentSquare', name);
}

