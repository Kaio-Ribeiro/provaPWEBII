

let olho = document.getElementById("show")

olho.addEventListener("click", function(){
	let div = document.getElementById("number")

	let numCartao = div.getElementsByTagName("input")

	for(let i=0; i<numCartao.length; i++){
		if(numCartao[i].type == "text"){
			numCartao[i].type = "password"
		}else{
			numCartao[i].type = "text"
		}
	}
})

let inputs = document.getElementsByTagName("input")

inputs[9].addEventListener("click", function(){

	for(let i=0; i<9; i++){
		if(inputs[i].value == ""){
			alert("Preencha todos os dados do cartão")
			break;
		}
	}
})




