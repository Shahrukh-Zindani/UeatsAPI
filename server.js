const cheerio = require('cheerio');
const express = require('express');
const request = require('request');

const url = 'http://universityeats.com/';

var app = express();

app.get('/schools', (req, res) => {
	// this route returns an object with the school name as key and the number of restaurants as the value.
	

	request(url, (error, response, html) => {
		if(!error && response.statusCode == 200) {

			var $ = cheerio.load(html);
			var json = {};

			var numberOfSchools = $('.title').get().length;

			for(var i = 0; i < numberOfSchools; i++) {
				var row = $('.title').get(i);
				name = $(row).text();
				var restaurants = $('.hours').get(i);
				restaurants = $(restaurants).text();
				restaurants = Number(restaurants.split(' ')[0]);
				json[name] = restaurants;
			}
			
			res.send(json);	
		}	
	});
});

app.get('/schools/:id', (req, res) => {
	//this route returns an object giving information about the number of on campus and off campus restaurants.
	var url = `http://universityeats.com/${req.params.id}`;

	request(url , (error, response, html) => {
		if(!error && response.statusCode == 200) {

			var $ = cheerio.load(html);
			var json = {};

			for(var n = 1; n<3; n++){
				var row = $('.title').get(n);
				var name = $(row).text()
				var restaurants = $('.hours').get(n-1);
				restaurants = $(restaurants).text();
				restaurants = Number(restaurants.split(' ')[0]);
				json[name] = restaurants;
			}
			
			res.send(json)
		}
	});
});

app.get('/schools/:id/:pid', (req, res) => {
	//this route returns an object giving information about the number of open and closed restaurants.
	var url = `http://universityeats.com/${req.params.id}/${req.params.pid}`;

	request(url, (error, response, html) => {
		if(!error && response.statusCode ==200) {

			var $ = cheerio.load(html);
			var json = {};
			var numberOfClosed = $('.row.closed').get().length;
			var numberOfOpen = $('.row').get().length;
			numberOfOpen = numberOfOpen - numberOfClosed;
			console.log(numberOfOpen)
			console.log(numberOfClosed)
			var openArray = [];
			var closedArray = [];
			for(var i =0; i<numberOfOpen; i++) {
				var row = $('.row').get(i);
				var info = $(row).children('.info').children().first();
				var name = $(info).children('.title').text();
				openArray.push(name);
			}
			for(var i =0; i<numberOfClosed; i++) {
				var row = $('.row.closed').get(i);
				var info = $(row).children('.info').children().first();
				var name= $(info).children('.title').text();
				closedArray.push(name);
			}

			json['open-restaurants'] = openArray;
			json['closed-restaurants'] = closedArray;
			res.send(json);
			
		}
	})
})


app.listen(3000, () => {
	console.log("Running on 3000");
});

exports = module.exports = app;


