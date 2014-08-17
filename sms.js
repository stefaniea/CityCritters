alert("hello?");
console.log("why");
var cellnum=15165820276;
var msg="POOOOP!!!";
$.get('https://datadipity.com/clickslide/girlswhocodesms.json?update&postparam[num]='+cellnum+'&postparam[message]='+msg+'&PHPSESSID=gae519f8k5humje0jqb195nob6')
.done(function(data){
	alert("wooooooo");
});