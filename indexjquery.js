$(function() {

$.getJSON("https://dog.ceo/api/breeds/image/random", function(data){

console.log(data);

var content = "";
content += data.message;
console.log(content);

$("img").attr("src",content);

});


});