function goHome(){
	location.href="index.html"
}
window.onload = function DynamicAllocation(){
	enQ("qList");
	enQ2("suggestions-list");
}
function enQ(x){
	var qImages = ['images/TOH.jpg','images/NE.jpg','images/mareya.jpg','images/LY.jpg','images/CM.jpg','images/DL.jpg','images/AND.jpg','images/World.jpg','images/SP.jpg','images/SC.jpg'];
	var qNames = ['Zingat','Proper Patola','Mareya','Chogada','Cheater Mohan','New Rules','Naina Da Kya Kasoor','World','Spider-man','Sheik Chillie'];
	var ul = document.getElementById(x);
	for(var i=0;i<qImages.length;i++)
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

function enQ2(x){
	var qImages = ['images/TOH.jpg','images/NE.jpg','images/mareya.jpg','images/LY.jpg','images/CM.jpg','images/DL.jpg','images/AND.jpg','images/World.jpg','images/SP.jpg','images/SC.jpg'];
	var qNames = ['Zingat','Proper Patola','Mareya','Chogada','Cheater Mohan','New Rules','Naina Da Kya Kasoor','World','Spider-man','Sheik Chillie'];
	var ul = document.getElementById(x);
	for(var i=0;i<qImages.length;i++)
	{
		console.log(i);
		var node = document.createElement("LI");
		var node2 = document.createElement("DIV");
		var node3 = document.createElement("IMG");
		var node4 = document.createElement("DIV");
		var node5 = document.createElement("DIV");
		node3.setAttribute('src',qImages[i]);
		node3.setAttribute('alt',qNames[i]);
		var class1 = document.createAttribute("class");       // Create a "class" attribute
		var class2 = document.createAttribute("class");
		var class3 = document.createAttribute("class");
		class1.value = "img-size2";                           // Set the value of the class attribute
		class2.value = "text-size2";
		class3.value = "div-cont";
		node2.setAttributeNode(class1);   
		node4.setAttributeNode(class2);   
		node5.setAttributeNode(class3);   
		var textnode = document.createTextNode(qNames[i]);
		node4.appendChild(textnode);
		node2.appendChild(node3);
		node5.appendChild(node2);
		node5.appendChild(node4);
		node.appendChild(node5);
		// node.appendChild(node4);
		ul.appendChild(node);
	}
}

function animateMe(x){
	x.style.width = "250px";
	var text = document.getElementsByClassName("text-size");
	var centerQ = document.getElementById("qH3");
	// var Q = document.getElementsByIClassName("qHead");
	// Q.style.width = "";
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