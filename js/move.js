//To DO
// Add list of pawns who made first move to local storage, check this before each pawn moves to see
function move(square){

	var nums = [1,2,3,4,5,6,7,8]
	var numsLet = ["One","Two","Three","Four","Five","Six","Seven",'Eight']

	alert("MOVE FUNCTION")  //when user clicks on square calls this plus passes its name as argument
	var current=localStorage.getItem('currentPiece')
	var row=current.length //check if piece is in pawns or other row
	if(row <=6){
		alert("-1")
		var row=-1
	}
	else{
		var row=-2
		alert("-2")
	}
	function checkPiece(row){    //first check which piece is being moved to determine how it can be moved  //HERE doesn't work - nums above 9 just return last number (i.e 10 = 0 11 =1)
            var num=current.slice(row) 
            alert("num =" + num)
            if(num<9){
            	var piece ="pawn"
            	return piece
            }
            if (num ==9 || num==16){
            	var piece ="rook"
            	return piece
            }
            if(num==11|| num==14){
            	var piece ="knight"
            	return piece
            }
            if(num==10||num==15){
            	var piece ="bishop"
            	return piece
            }
            if (num==12){
            	var piece ="queen"
            	return piece
            }
            if(num==13){
            	var piece ="king"
            	return piece
            }
	}
	var piece = checkPiece(row)  //change this to i.e var piece which will contain a string with current piece in it
	alert("piece is a " + piece)
	var lastSquare=localStorage.getItem('currentSquare');
	var turn = localStorage.getItem("turn")
	var targetSquare=(square)   // load the last clicked piece (current), the square it was on and the target square
	//Check how far away target is (later will have different pieces)
	
	var targCol = targetSquare.slice(-1)
	var currentCol = lastSquare.slice(-1)
	var targRow = targetSquare.substr(0, targetSquare.length - 1)
	var currentRow = lastSquare.substr(0,lastSquare.length -1)
	alert("value initially targCol"+ targCol+"targ Row "+targRow +"currentrow " +currentRow+"current Col"+currentCol)
	for (var i in numsLet){   //Convert column name from string to number so can compare difference
		
		if (targRow ==numsLet[i]){
			var targRow=nums[i]
           
	}
    }
    for (var i in numsLet){   //Convert column name from string to number so can compare difference
		
		if (currentRow ==numsLet[i]){
			var currentRow=nums[i]
           
    }
     }  

   
    if (piece =="pawn"){
    	var num=current.slice(row) 
    	var fullPiece = turn+num
        const pawns = JSON.parse(localStorage.getItem('pawns'));
    	for(var i =0;i <pawns.length;i++){
    		
    		if(pawns[i]==fullPiece){
    			alert("found piece!")   //if is here give it two moves then remove from list
    		
    		if(targRow<(currentRow+2)&& currentCol !=targCol){
    			return 
    		}
    	}
    
    	
       if((targRow!=currentRow && currentCol !=targCol)){
    		
    		return
    	}   //ADD DIAGONAL CONDITION HERE ..ie tarCol (+ or -1 AND square not null (should throw anyway if OWN))
    }
}
   // if ((targCol-currentCol) > 1){
   // 	alert("Greater")
   // 	return

   // }
    function castleMove(targCol, currentCol){
    	  
		    if ((Math.abs(targCol - currentCol) > 0 )&& (Math.abs(targRow - currentRow )>0)){  //testing change this and generalise once works - this is for pawns
		    	alert("Invalid move ")  
		    	return false 
    	}
    }
    function knightMove(targCol, targRow){
    	    currentCol=parseInt(currentCol)
    	    alert("testing Five")
    	    alert(targRow==currentRow-1)
    	    alert(targCol==currentCol+2)
    	    alert(targCol)
    	    alert(currentCol)
    	    alert(currentCol+2)
    	    alert(5==3+2)
    	    alert("targ Row == " +targRow+"currentRow=" +currentRow+"targ Col="+targCol +"current Col="+currentCol) //test this first
        	if((targRow==(currentRow-2))&& (targCol ==(currentCol-1))){
    		alert("valid One") //works
    		return
    	}
    	else if ((targRow==(currentRow+2))&& (targCol ==(currentCol+1))){
    		alert("valid Two")
    		return
    }
    else if ((targRow==(currentRow-1)) && (targCol ==(currentCol+2))){ // < TEST THIS FIRST
    		alert("valid Three")
    		return
    	}
    else if ((targRow==(currentRow+1))&& (targCol ==(currentCol+2))){
    		alert("valid Four")
    		return
    	}
    else if ((targRow==(currentRow-1))&& (targCol ==(currentCol+2))){
    		alert("valid Five")
    		return
    	}
    else if ((targRow==(currentRow+1))&& (targCol ==(currentCol-2))){
    		alert("valid Six") //works
    		return
    	}
    else{
    	alert("none of the abov")
    	return false
    }
    }
    function bishopMove (targCol,targRow){
    	
         if (currentCol ==targCol && currentRow==targRow){
         	alert("ended bishopMove")
         	return 
         }
         if(!targRow || !targCol){
         	alert("no targ")
         	return
         }
         alert("current Row" +currentRow +"targ row"+targRow)
         alert("row diff"+ (Math.abs(currentRow)-Math.abs(targRow)))
         if(Math.abs(currentRow-targRow)==1){ //this is to stop from evaluating false if only want to mvoe one square away
         	alert("only one away")
         	return 
         }
         alert("targCol =" +targCol)
         alert("targRow ="+targRow)
         //check if there is a piece on each square here ie if (targCol Tar Row ) !==(empty)return "invaldi move"

         if (targCol > currentCol){
         	targCol --
         }
         else{
         	targCol++
         }
         if(targRow >currentRow){
         	targRow --
         }
         else{
         	targRow++
         }

         //document.getElementById() - use this to check if squares in between are occupied or not - IMPORTANT
         alert("targ Col now " + targCol +" Targ Row now " +targRow)
         for(var i in nums){
         if (targRow ==nums[i]){
			var useRow=numsLet[i]
			alert("Test for doc get elem in bish func" + useRow + targCol)

			
		}
	    }
	    if(document.getElementById(useRow+targCol).firstElementChild){
				alert("suqare occupied")
				return false  

			}

         bishopMove(targCol,targRow)
    }   //for queen try pawnMove bishopMove and castleMove as can do all three
    if (piece =="bishop"){
    	//first check if is a valid move (should be a maths way to do this)
    	if (targCol==currentCol){
    		alert("invalid move")
    		return
    	}
    	if (targRow==currentRow){
    		alert("invaldi move")
    		return 
    	}
    	alert("math.abs current row - targ "+(Math.abs(currentRow-targRow)))
    	alert("same for col"+ Math.abs(currentCol-targCol))
    	if (Math.abs(currentRow-targRow) != (Math.abs(currentCol-targCol))){
    		alert("Invalid move")
    			return 
    		}
    	

    	//Then check if piece on target is own then run the following code to check if there are pieces in the squares between 
    	result=bishopMove(targCol,targRow)
    	if(result==false){
    		alert("invalid Move!")
    		return   //Once this function works add it and castle check and pawn check to Queen - try all and have the others as catch 
    	}
    }
    function kingMove(targCol, targRow){
    	if((Math.abs(targCol-currentCol))>1 || Math.abs(targRow-currentRow)>1){
    		alert("invalid move")
    		return false
    	}
    	else{
    		return 
    	}
    	}
    
    if (piece ==="king"){
    	result= kingMove(targCol, targRow)
    	if (result ===false){
    		alert("invalid move!")
    		return
    	}
    }
    if (piece ==="rook"){
    	result = castleMove(targCol, currentCol)
    	if(result===false){
    		alert("invalid move!")
    		return 
    	}
    }
    if(piece =="queen"){
    	try{
    		result=castleMove(targCol, currentCol)
    	}
    	catch(error){
    		alert("invalid")
    	}
    	try{
    		result=bishopMove(targCol, currentCol)
    	}
    	catch(error)
        {

    		alert("invalid move") //add king move here (is pawn plus backwards and diagonal)
    	}
    	}
      if(piece=="knight"){
      	var result = knightMove (targCol,targRow)
      	if(result==false){
      		return
      	}
      }
    
    //if(piece =="queen"){//
    // try(i.e bishop move)
     //catch castle moe
     //catch pawnmove
     //catch invalid move return 
   // }//

	// One Two Thre Fou Fiv Six Sev Eig  
	// if target ....slice (1,3) == ""...= 1 }(i.e turn into numerical then check difference)
 
	if (turn == 'white'){
		var firstLetter = "w"
		alert("piece =" + piece)
		if (piece==="rook"){
			alert("rook")
			var piece="assets/rook.png"
		}
		else if (piece ==="knight"){
			var piece ="assets/knight.png"
		}
		else if (piece ==="bishop"){
			var piece = "assets/bishop.png"
        }
        else if (piece =="queen"){
        	var piece ="assets/queen.png"
        }
        else if(piece =="king"){
        	var piece ="assets/king.png"
        }
		else{
		var piece = "assets/pawn.png"
	    }
		}

	
	else{
		var firstLetter="b"
		alert("piece =" + piece)
		if (piece==="rook"){
			var piece="assets/rook2.png"
			alert("rook loaded")
		}
        else if (piece =="knight"){
        	var piece = "assets/knight2.png"
        }
        else if(piece =="bishop"){
          var piece = "assets/bishop2.png"
        }
        else if (piece =="queen"){
        	var piece ="assets/queen2.png"
        }
        else if(piece =="king"){
        	var piece ="assets/king2.png"
        }
		else{
		var piece = "assets/pawn2.png"
		alert("pawn loaded")
	}
	}               //check whose turn it is 
	if (turn == "white" & current[0]!=="w"){   //check currently selected piece is of the right colour
		alert("select a piece first!")
		return
	}
	if (turn == "black" & current[0]!=="b"){
		alert("select a piece first!")
		return
	}
	if (document.getElementById(square).firstElementChild == null){
		
		var targ=(document.getElementById(targetSquare))
		alert("just beofre load piece =" + piece)
		document.getElementById(targetSquare).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+targetSquare+'\')">'; //puts piece in new square
        document.getElementById(lastSquare).innerHTML = '' //removes piece from old square
         if (turn =="white"){
    	localStorage.setItem("turn","black")
    	return
    }
    if (turn =="black"){
    	localStorage.setItem("turn","white")
    }
        return   //if square is empty add a piece to it then switch turns

	}
	if (document.getElementById(square).firstElementChild.id[0] ==firstLetter){   //if click on square with your own piece it will do nothing
		alert("Own")
		return

	}
	else{
	alert("MOVE")
	var name=document.getElementById(square).firstElementChild
	alert("Black or White: " + name.id[0] )
	if (name.id[0]==firstLetter) //check if trying to take own piece!
	{
		alert("Own Piece!")
		return 
	}
	
	
	document.getElementById(targetSquare).innerHTML = '<img src="'+ piece  +'" class="piece" id="'+ current +'"" onclick="clicked(\''+current+'\',\''+targetSquare+'\')">'; //puts piece in new square
    alert("to replace" + lastSquare)
    document.getElementById(lastSquare).innerHTML = '' //removes piece from old square
    if (turn =="white"){
    	alert("changing turn to white")
    	localStorage.setItem("turn","black")
    }
    if (turn =="black"){
    	alert("changing turn to black")
    	localStorage.setItem("turn","white")
    }
   
   
}
}

