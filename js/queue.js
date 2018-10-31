function goHome(){
	location.href="index.html"
}
window.onload = function DynamicAllocation(){
	enQ();
}
function enQ(){
	var qImages = ['images/TOH.jpg','images/NE.jpg'];
	var qNames = ['Zingat','Proper Patola'];
	var ul = document.getElementById("qList");
	for(var i=0;i<2;i++)
	{
		console.log(i);
		var node = document.createElement("LI");
		var node2 = document.createElement("DIV");
		var node3 = document.createElement("IMG");
		var node4 = document.createElement("DIV");
		node3.setAttribute('src',qImages[i]);
		node3.setAttribute('alt',qNames[i]);
		var class1 = document.createAttribute("class");       // Create a "class" attribute
		var class2 = document.createAttribute("class");
		class1.value = "img-size";                           // Set the value of the class attribute
		class2.value = "text-size";
		node2.setAttributeNode(class1);   
		node4.setAttributeNode(class2);   
		var textnode = document.createTextNode(qNames[i]);
		node4.appendChild(textnode);
		node2.appendChild(node3);
		node.appendChild(node2);
		node.appendChild(node4);
		ul.appendChild(node);
	}
}
function animateMe(x){
	x.style.width = "250px";
	var text = document.getElementsByClassName("text-size");
	var centerQ = document.getElementById("qH3");
	centerQ.style.textAlign = "center";
	for(var i=0;i<text.length;i++){
		text[i].style.display = "inline-block";
		text[i].style.marginLeft = "15px";
	}
}
function resetMe(x){
	x.style.width = "85px";
	var text = document.getElementsByClassName("text-size");
	var centerQ = document.getElementById("qH3");
	centerQ.style.textAlign = "left";
	for(var i=0;i<text.length;i++){
		text[i].style.display = "none";
		text[i].style.marginLeft = "-25px";
	}
}