var http = require('http');
var express = require('express');
var request = require('request');

var app = express();

var post_data = querystring.stringify({

});
var apiKey = "801f740768450fg78a5c7aaa16ac82b4";

var post_options = {
      host: 'api.att.com',
      port: '80',
      path: '/myMessages/v2/messages',
      method: 'POST',
      authorization: 'Bearer ' + apiKey,
      headers: {
          'Content-Type': 'application/json',
          'Content-Length': post_data.length
      }
  };

request.post({
	url : 'https://api.att.com/myMessages/v2/messages', 
	

	function(error, response, body) {
	console.log(error, response, body);
})

app.use(express.static(__dirname + '/'));
app.post('/sendSMS', function(req, res){
	
	res.send("asdfasdf");
});
app.listen(3000);