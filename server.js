const cheerio = require('cheerio');
const express = require('express');
const request = require('request');

var app = express();

app.get('/schools', (req, res) => {
	// this route return an object with the school name as key and the number of restaurants as the value
	var url = 'http://universityeats.com/';

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



app.listen(3000, () => {
	console.log("Running on 3000");
});


