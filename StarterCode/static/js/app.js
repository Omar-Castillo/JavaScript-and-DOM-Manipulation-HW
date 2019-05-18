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

// Using arrows functions to simplify our code
tableData.forEach((sighting) => {
    console.log(sighting)
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

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

// Append one table row `tr` to the table body
var newRow = tbody.append("tr");

Object.entries(newEntry).forEach(([key, value]) => {
    console.log(key,value);
    newRow.append("td").text(value);
});

// Select the Filter Table Button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

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
    filteredData.forEach(sighting => {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) =>{
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    
});

// Select the Un-Filter Table Button
var unfilter = d3.select("#un-filter-btn");

unfilter.on("click", function() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the table
    d3.select("tbody").text("");

    //Run the full data into our filtered table
    tableData.forEach(sighting => {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) =>{
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
   
});