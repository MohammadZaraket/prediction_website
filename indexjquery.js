$(function() {

$.getJSON("https://dog.ceo/api/breeds/image/random", function(data){

console.log(data);

var content = "";
content += data.message;
console.log(content);

$("img").attr("src",content);

});






});


$(function(){

    $.getJSON("https://api.nationalize.io/?name=mohammad", function(data){

console.log(data);

var content2 = "";
content2 += data.country;
console.log(content2);

$("#test").html(content2);

});

});