# UEatsAPI.

This is a REST API built entirely in Node.js that can be used to retrieve information on any school from the a famous website that has record of a lot of on campus and off campus restaurants for a lot of campuses around the US., [University Eats](http://universityeats.com/).

UEatsAPI can retrieve names of all schools in the database, the number of on campus and off campus restaurants in these schools, and the names of the on campus and off campus restauarnts that are open and closed . 

UEatsAPI is not an official UEats API, and was simply something I built for fun in my free time. 

## Software Stack and Supporting Frameworks Used

1. Javascript
2. Node.js
    - [Express](http://expressjs.com/en/index.html)
    - [Request](https://github.com/request/request)
    - [Cheerio](https://github.com/cheeriojs/cheerio)


##Prerequisites
All that is required to run UEatsAPI is [Node.js](https://nodejs.org/en/), with `npm` installed.

##Usage
To use the API, first clone/download this repo. Then, perform the following steps:

```
cd UEatsAPI
npm install
node server.js
```

This will start the UEats server, which can be queried to retrieve the required information. 

To query the API, first ensure that you have a valid school's name (we will use `ut-dallas` as a sample, in this case).

Now, to obtain the names of the schools in this website, go on to your favourite web browser, and enter the following into the URL bar, and hit enter:

```
http://localhost:3000/schools/
```

If you would like information on **Number of Oncampus and Offcampus restaurants** for a specific school, run the following in your web browser (as above):

```
http://localhost:3000/schools/ut-dallas
```

If you would like to retrieve a specific school's  **Open and Closed Restaurants that are On Campus**, run the following, as above:

```
http://localhost:3000/schools/ut-dallas/on
```
Finally, if you would like to retrieve a specific school's  **Open and Closed Restaurants that are Off Campus**, run the following, as above:

```
http://localhost:3000/schools/ut-dallas/off
```

Similarly, if you would like to retrieve this information through your own client (i.e. not through your browser, but through your own code), you can simply send a GET request to `server.js`, with the required data (that is, a valid **School Name**), in the format described above (i.e. `/schools/school-name`). You will receive a response in the JSON format outlined below.

Below are the names of the schools, this API currently supports.
```
ut-dallas

ut-austin

baylor

florida

washington

portland

arizona-state

berkeley
```


##JSON Response Format
Here, we outline (by example) the JSON response format for all of the GET calls described above. We will once again use the example of player `ut-dallas`. 

If we execute a `/schools`, we will receive a response like this one:
The key is the name of the University and the value is the total number of on campus and off campus restaurants for each school.

```json
{
  "UT Dallas": 133,
  "UT Austin": 138,
  "Baylor": 32,
  "Florida": 59,
  "University of Washington": 41,
  "University of Portland": 16,
  "Arizona State": 50,
  "UC Berkeley": 15
}
```

If we execute a `/schools/ut-dallas` GET call for school name `ut-dallas`, we will receive a response like this one:

```json
{
  "Off Campus": 110,
  "On Campus": 23
}
```

Similarly, for a `/schools/ut-dallas/on` GET call for school name `ut-dallas`, we will receive a response like this one:

```json
{
  "open-restaurants": [
    "2 mato",
    "Ben & Jerry's",
    "Bookstore Coffee Shop",
    "Chick-Fil-A",
    "Coffee Corner",
    "Create",
    "IHOP Express",
    "Jason's Deli",
    "Moe's",
    "Novel Brew",
    "Outtakes - DHW",
    "Outtakes - SU",
    "Panda Express",
    "Papa John's Pizza",
    "RH West Dining Hall",
    "Subway",
    "The Pub"
  ],
  "closed-restaurants": [
    "Breakfast Burrito Cart",
    "Chef's Table",
    "Einstein Bros Bagels",
    "Food Truck",
    "Hot Dog Cart",
    "SU Dining Hall"
  ]
}
```

Finally, for a `/schools/ut-dallas/off` GET call for school name `ut-dallas`, we will receive a response like this one:

```json
{
  "open-restaurants": [
    "Afrah Mediterranean Restaurant & Pastries",
    "Ali Baba Mediterranean Grill",
    "Baker Brothers American Deli",
    "Bambu Asian Cuisine",
    "Banana Leaf Thai Cuisine",
    "Besa's Pizza",
    "Black-eyed Pea",
    "Bombay Chopstix",
    "Bone Daddy's",
    "Bop House",
    "Braum's",
    "Brick House Tavern + Tap",
    "Buffalo Wild Wings",
    "Cafe Amore",
    "Cafe Brazil",
    "Cafe Brazil",
    "Campisi's",
    "Cappuccino Italian Bistro",
    "Carmine's Pizzeria",
    "Cassis Exotic Drinks & Tea",
    "Chang Jing",
    "Chili's",
    "Chipotle",
    "Chuy's",
    "Cici's Pizza",
    "Cindi's New York Delicatessen",
    "Corner Bakery Cafe",
    "Dimassi's Mediterranean Buffet",
    "Eggroll Express",
    "Fadi's Mediterranean Grill",
    "Fadia's Deli",
    "Frankie's Mexican Cuisine",
    "Freebird's World Burrito",
    "Fuddruckers",
    "Fuzzy's Taco Shop",
    "Geisha Steak and Sushi",
    "Great Outdoor Sub Shop",
    "Haystack Burgers & Barley",
    "i Java and Chai",
    "IHOP",
    "In-N-Out Burger",
    "In-N-Out Burger",
    "Jason's Deli",
    "Jeng Chi Restaurant",
    "Jersey Mike's Subs",
    "Jimmy John's",
    "La Madeleine French Bakery & Cafe",
    "Little Greek Restaurant",
    "Lover's Egg Roll",
    "LYFE Kitchen",
    "Marcus Cafe",
    "Marshall's Bar-B-Q",
    "Masala Wok",
    "McDonald's",
    "McDonald's",
    "Mooyah",
    "Naan Sushi",
    "Noodle Wave",
    "Old Town Creamery",
    "Olive Burger",
    "Olive Oil's Pizzeria",
    "Palio's Pizza Cafe",
    "Panda Express",
    "Panera Bread",
    "Pollo Tropical",
    "Potbelly",
    "Qdoba",
    "QQ Teahouse",
    "Raising Cane's",
    "Reverie Bakeshop",
    "Russo's Coal-Fired Pizzeria",
    "Shady's Burger Joint",
    "Smoothie Factory",
    "Snappy Salads",
    "Sonic Drive-In",
    "Sonny Bryan's Smokehouse",
    "SPIN! Neapolitan Pizza",
    "Steak 'n Shake",
    "Steak and Shake",
    "Sugarless deLite",
    "Sushi Sakana",
    "Sushi Town",
    "Sweet Firefly",
    "Sweet Mix",
    "Taco Bell",
    "Taco Cabana",
    "Taco Ocho",
    "Taiwan Cafe",
    "Tejano BBQ & More",
    "The Festive Kitchen",
    "The Pizza Guy",
    "Tin Star",
    "Tom + Chee - Richardson",
    "Torchy's Tacos",
    "Tutti Frutti Frozen Yogurt",
    "Twisted Root Burger Co.",
    "Urban Eatz",
    "Wendy's",
    "Wendy's",
    "Wendy's Old Fashioned Hamburgers",
    "Whataburger",
    "Which Wich",
    "Wingstop",
    "Yumilicious",
    "Zenna Thai & Japanese Restaurant",
    "Zesty Mexican Bar & Grill",
    "Zhabuki",
    "Zinga! Frozen Yogurt",
    "Zoës Kitchen"
  ],
  "closed-restaurants": [
    "Mumtaz Indian Restaurant"
  ]
}
```

(**Note:** There may be varying amounts of information for any of these REST calls, depending on how much information is available to University Eats for a given school. The data will also keep varying depending on the time these calls are made as the data like restauants open and closed keep changing according to the time.)
