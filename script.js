let p = document.getElementById("status")
let btn = document.getElementById("enterBtn")

btn.addEventListener("click",() => {
	let h1 = document.createElement("h1")
	p.textContent =  "Entered Metaverse" 
	h1.textContent =  p.textContent
	
})