

function goHome(){
	location.href="index.html"
}
window.onload = function DynamicAllocation(){
	fillRadioList();
}
function fillRadioList(){
	var radioimages=['images/Selena.jpg','images/Coldplay.jpg','images/DJSnake.jpg','images/Enrique_Iglesias.jpg','images/Pop.jpg','images/Zayn_Malik.jpg'];
	var radiotext=['Selena Gomez','ColdPlay','Dj Snake','Enrique Iglesias','Pop','Zayn Malik'];
	console.log('Before for');
	var radiolistelement=document.getElementById('artist-list');
	for(var i=0;i<6;i++)
	{
		console.log(i);
		var node = document.createElement("LI");
		var node2 = document.createElement("DIV");
		var node3 = document.createElement("IMG");
		var node4 = document.createElement("DIV");
		node3.setAttribute('src',radioimages[i]);
		node3.setAttribute('alt',radiotext[i]);
		var class1 = document.createAttribute("class");       // Create a "class" attribute
		var class2 = document.createAttribute("class");
		class1.value = "img-size";                           // Set the value of the class attribute
		class2.value = "text-size";
		node2.setAttributeNode(class1);   
		node4.setAttributeNode(class2);   
		var textnode = document.createTextNode(radiotext[i]);
		node4.appendChild(textnode);
		node2.appendChild(node3);
		node.appendChild(node2);
		node.appendChild(node4);
		radiolistelement.appendChild(node);
	}
}
