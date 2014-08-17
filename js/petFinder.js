var apiKey = 'c1a0d60d5fb25740fc4165f3829c0900';
var apiSecret = 'a322d831b018a28f29fbf56fccc04e02';
var shelterID = 'NY773';

loadAllPets();

function loadAllPets(){
	$.getJSON('http://api.petfinder.com/shelter.getPets?format=json&id=' + shelterID + '&key=' + apiKey + '&callback=?')
	.done(function(petApiData) { 
  	//load pets into grid
  	//console.log(petApiData);
  	//var x=petApiData.getElementsByTagName("");
 // 	var pets = petApiData.petfinder.pets.pet; 
	//console.log(petApiData.petfinder.pets);
	var pets = petApiData.petfinder.pets;
	console.log(pets);
	var ul = document.getElementById("og-grid");
	$.each(pets.pet, function(idx, obj) {
		//for(var i = 0; i < obj.length; i++) {
			console.log("asdf" + obj.name.$t);
			var li = document.createElement("li");
			var link = document.createElement("a");
			var img = document.createElement("img");
			var div = document.createElement("div");
			div.setAttribute("style", "height: 75; width: 75; overflow: hidden");

			var dataTitle = obj.name.$t; //obj[i].name.$t;
			var dataDescription = (obj.description.$t).substring(0, 10) + "...";//obj[i].description.$t;
			link.setAttribute("data-title", dataTitle);
			link.setAttribute("data-description", dataDescription);
			/*if (obj.media.photos.length > 0) {
			img.setAttribute("src", obj.media.photos[0].$t);
			}*/
			var imgSrc = obj.media.photos.photo[3].$t;
			console.log(imgSrc);
			img.setAttribute("src", imgSrc);
			img.setAttribute("data-largesrc", imgSrc);
			img.setAttribute("style", "padding: 10px");


			img.setAttribute("style", "height: 200px; clip: rect(0px, 60px, 60px, 0px);");
			link.setAttribute("href", "https://www.petfinder.com/petdetail/" + obj.id.$t);
			li.appendChild(link);
			div.appendChild(img);
			link.appendChild(div);
			div.appendChild(img);
			ul.appendChild(li);

	//	}
	
});



   })
  .error(function(err) { alert('Error retrieving data!'); 
});
/*var result;
 $.ajax({
            type: "GET",
            url: 'http://api.petfinder.com/shelter.getPets?format=xml&key=' + apiKey + '&callback=?',
            dataType: "jsonp",
            success: function (xml) {
                result = xml.code;
                console.log(xml.petfinder);
            },
        });*/
}