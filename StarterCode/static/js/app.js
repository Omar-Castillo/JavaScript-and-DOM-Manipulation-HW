// from data.js
var tableData = data;

// create a reference to our table body
var tbody = d3.select("tbody");

// console.log(tableData);

//create variables to be populated for each category within the data file 
var tableKeys = Object.keys(tableData[0]);

//test that list of keys print out
console.log(tableKeys);

// Object.entries(tableData[0]).forEach(function([key, value]) {
//     console.log(`${key}: ${value}`);
// })

//Loop through data, append `tr` to our table, add data
// tableData.forEach(function(sighting){
//     console.log(sighting);
//     var row = tbody.append("tr");
//     //use object entries to  console.log each sighting input
//     Object.entries(sighting).forEach(function([key, value]) {
//         console.log(key, value);
//         //append a cell to the row for each value in sightings
//         var cell = row.append("td");
//         // update cell values from our data
//         cell.text(value);
//     });
// });

// Create a reference for new data to insert
var newEntry = {
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!"
};

//append data to existing data
tableData.splice(2, 0, newEntry);

// Using arrows functions to simplify our code
//create a function for displaying data
function ufoData(tableData) {
    tableData.forEach((sighting) => {
    console.log(sighting)
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
}

// display data
ufoData(tableData);

// Select the Date Filter Table Button
var dateFilter = d3.select("#date-filter-btn");

dateFilter.on("click", function() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    //get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter( (input) => input.datetime === inputValue);

    console.log(filteredData);

    //Clear the table
    d3.select("tbody").text("");

    //Run the new data into our filtered table
    ufoData(filteredData);
});

// Select the City Filter Table Button
var cityFilter = d3.select("#city-filter-btn");

cityFilter.on("click", function() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //select the input element and get the raw HTML node
    var inputElement = d3.select("#city");

    //get the value property of the input element
    var inputCity = inputElement.property("value");

    console.log(inputCity);
    console.log(tableData);

    var filteredCity = tableData.filter( (input) => input.city === inputCity);

    console.log(filteredCity);

    //Clear the table
    d3.select("tbody").text("");

    //Run the new data into our filtered table
    ufoData(filteredCity);
});

// Select the State Filter Table Button
var stateFilter = d3.select("#state-filter-btn");

stateFilter.on("click", function() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //select the input element and get the raw HTML node
    var inputElement = d3.select("#state");

    //get the value property of the input element
    var inputState = inputElement.property("value");

    console.log(inputState);
    console.log(tableData);

    var filteredState = tableData.filter( (input) => input.state === inputState);

    console.log(filteredState);

    //Clear the table
    d3.select("tbody").text("");

    //Run the new data into our filtered table
    ufoData(filteredState);
});

// Select the Country Filter Table Button
var countryFilter = d3.select("#country-filter-btn");

countryFilter.on("click", function() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //select the input element and get the raw HTML node
    var inputElement = d3.select("#country");

    //get the value property of the input element
    var inputCountry = inputElement.property("value");

    console.log(inputCountry);
    console.log(tableData);

    var filteredCountry = tableData.filter( (input) => input.country === inputCountry);

    console.log(filteredCountry);

    //Clear the table
    d3.select("tbody").text("");

    //Run the new data into our filtered table
    ufoData(filteredCountry);
});

// Select the Shape Filter Table Button
var shapeFilter = d3.select("#shape-filter-btn");

shapeFilter.on("click", function() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //select the input element and get the raw HTML node
    var inputElement = d3.select("#shape");

    //get the value property of the input element
    var inputShape = inputElement.property("value");

    console.log(inputShape);
    console.log(tableData);

    var filteredShape = tableData.filter( (input) => input.shape === inputShape);

    console.log(filteredShape);

    //Clear the table
    d3.select("tbody").text("");

    //Run the new data into our filtered table
    ufoData(filteredShape);
});

// Select the Un-Filter Table Button
var unfilter = d3.select("#un-filter-btn");

unfilter.on("click", function() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the table
    d3.select("tbody").text("");

    //Run the full data into our filtered table
    ufoData(tableData);
});

