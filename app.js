var http = require('http');
var express = require('express');
var app = express();

//var post_data = querystring.stringify({});

var request = require('request');
var connect = require('connect');

/*const api_key = "801f740768450fd78a5c7aaa16ac82b4";
const api_secret = "31c6b5e9b54b5abb";

const oauth_endpoint = "https://api.att.com/oauth/token";
const sms_endpoint = "https://api.att.com/myMessages/v2/messages"

var app = connect()
	.use(connect.query())
	.use(action)
.listen(8080);

function action(req, resp, next) {
	sendSMS("tel:+15165820276", "Hello", resp);
};

function sendSMS(mobilenumber, message, resp) {
	http.get('url?num=sddsdf&message=sdfjsdlkfds');
	request({
		url: oauth_endpoint,
		method: "POST",
		headers: { "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded" },
		body: "grant_type=client_credentials&client_id=" + api_key + "&client_secret=" + api_secret + "&scope=SMS"
	} ,
	function (error, response, body){
		request({
			url: sms_endpoint,
			method: "POST",
			headers: { "Authorization": "Bearer " + JSON.parse(body).access_token, "Content-Type": "application/x-www-form-urlencoded" },
			body: "address=" + encodeURIComponent(mobilenumber) + "&message=" + encodeURIComponent(message)
		} , function (error, response, body){ resp.write(body); resp.end(); });
	})
};*/
/*
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
*/
app.use(express.static(__dirname + '/'));
/*
app.post('/sendSMS', function(req, res){
	res.send("asdfasdf");
});
*/
app.listen(3000);