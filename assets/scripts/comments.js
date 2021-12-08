function comment(ele){
			if(typeof(Storage) !== "undefined"){
				if(event.keyCode == 13) {
					if(localStorage.comment !== "null"){
						localStorage.comment =  ele.value+"</br><hr>"+localStorage.comment;
						document.getElementById("myText").value = "";
						document.getElementById("allcomments").innerHTML=localStorage.comment;
					}
					else{
						localStorage.comment="";
					}
				}
			}
			else {
				document.getElementById("allcomments").innerHTML = "Sorry, your browser does not support web storage...";
			}
		}