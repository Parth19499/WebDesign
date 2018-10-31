

function goHome(){
	location.href="index.html"
}
window.onload = function DynamicAllocation(){
	fillRadioList();
	fillWeeklyTop15();
	fillNewReleases();
	fillFeaturedPlaylists();
}
function fillRadioList(){
	var radioimages=['images/Selena.jpg','images/Coldplay.jpg','images/DJSnake.jpg','images/Enrique_Iglesias.jpg','images/Pop.jpg','images/Zayn_Malik.jpg'];
	var radiotext=['Selena Gomez','ColdPlay','Dj Snake','Enrique Iglesias','Pop','Zayn Malik'];
	var radiolistelement=document.getElementById('artist-list');
	for(var i=0;i<6;i++)
	{
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

function fillWeeklyTop15() {
	var songnames = ['Taki Taki','Girls Like You','Back To You','All the Stars','I Like It','In My Feelings'];
	var songalbums = ['Taki Taki','Girls Like You','13 Reasons Why (Season 2)','Black Panther The Album','Invasion of Privacy','Scorpion']
	var top15listelement = document.getElementById('weekly-top');
	for(var i=0;i<6;i++)
	{
		var node = document.createElement("LI");
		var node2 = document.createElement("A");
		node2.setAttribute('href','./queue.html');
		var node3 = document.createElement("DIV");
		var node4 = document.createElement("DIV");
		var class1 = document.createAttribute("class");       // Create a "class" attribute
		var class2 = document.createAttribute("class");
		class1.value = "song-title";                           // Set the value of the class attribute
		class2.value = "song-desc";
		node3.setAttributeNode(class1);
		node4.setAttributeNode(class2);
		var textnode1 = document.createTextNode(songnames[i]);
		var textnode2 = document.createTextNode(songalbums[i]);
		node3.appendChild(textnode1);
		node4.appendChild(textnode2);
		node2.appendChild(node3);
		node2.appendChild(node4);
		node.appendChild(node2);
		top15listelement.appendChild(node);
	}
}

function fillNewReleases() {
	var albumpiclocations = ['images/Grapevine.jpg','images/Close_To_Me.jpg','images/Waste_It_On_Me.jpg','images/It_Isnt_True.jpg','images/Sick_Boy_Siren.jpg','images/Happy_Now.jpg'];
	var albumtitles = ['Grapevine','Close To Me','Waste It On Me',"It Isn't True",'Sick Boy...Siren','Happy Now'];
	var albumartists = ['Tiesto','Ellie Goulding, Diplo','Steve Aoki','Sid Sriram','The ChainSmokers','Kygo'];
	var newreleaseslistelement = document.getElementById('new-releases-list');
	for(var i=0;i<6;i++)
	{
		var node = document.createElement("LI");
		var node2 = document.createElement("A");
		node2.setAttribute('href','');
		var node3 = document.createElement("IMG");
		node3.setAttribute('src',albumpiclocations[i]);
		var node4 = document.createElement("DIV");
		var node5 = document.createElement("DIV");
		var class1 = document.createAttribute("class");       // Create a "class" attribute
		var class2 = document.createAttribute("class");
		class1.value = "albumtitle";                           // Set the value of the class attribute
		class2.value = "albumartist";
		node4.setAttributeNode(class1);
		node5.setAttributeNode(class2);
		var textnode1 = document.createTextNode(albumtitles[i]);
		var textnode2 = document.createTextNode(albumartists[i]);
		node4.appendChild(textnode1);
		node5.appendChild(textnode2);
		node2.appendChild(node3);
		node2.appendChild(node4);
		node2.appendChild(node5);
		node.appendChild(node2);
		newreleaseslistelement.appendChild(node);
	}
}

function fillFeaturedPlaylists() {
	var playlistpiclocations = ['images/October_Workout_Mix.jpg','images/Editors_Pick_Of_the_Week.jpg','images/Fabulous_Freddie.jpg','images/Rock_Of_New_Ages.jpg','images/Fresh_R&B.jpg','images/Latest_Latin.jpg'];
	var playlisttitles = ['October Worko...','Editors pick of t...','Fabulous Freddie','Rock of New A...','Fresh R&B','Latest Latin'];
	var playlistsizes = ['35','50','30','30','35','30'];
	var featuredplaylistlistelement = document.getElementById('featured-playlist-list');
	for(var i=0;i<6;i++)
	{
		var node = document.createElement("LI");
		var node2 = document.createElement("A");
		node2.setAttribute('href','');
		var node3 = document.createElement("IMG");
		node3.setAttribute('src',playlistpiclocations[i]);
		var node4 = document.createElement("DIV");
		var node5 = document.createElement("DIV");
		var class1 = document.createAttribute("class");       // Create a "class" attribute
		var class2 = document.createAttribute("class");
		class1.value = "playlisttitle";                           // Set the value of the class attribute
		class2.value = "playlistsize";
		node4.setAttributeNode(class1);
		node5.setAttributeNode(class2);
		var textnode1 = document.createTextNode(playlisttitles[i]);
		var textnode2 = document.createTextNode(playlistsizes[i]);
		var textnode3 = document.createTextNode(' songs');
		node4.appendChild(textnode1);
		node5.appendChild(textnode2);
		node5.appendChild(textnode3);
		node2.appendChild(node3);
		node2.appendChild(node4);
		node2.appendChild(node5);
		node.appendChild(node2);
		featuredplaylistlistelement.appendChild(node);
	}
}
