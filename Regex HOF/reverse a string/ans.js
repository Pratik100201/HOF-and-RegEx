let submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
	let input = document.getElementById("input").value
	let inptext = document.getElementById("inp")
	inptext.innerText = input
	let output = input.split("").reverse().join("")
	let outputtext = document.getElementById("op")
	outputtext.innerText = output

})
