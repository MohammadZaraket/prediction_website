let gender_url = new URL('https://api.genderize.io?name=');
let age_url = new URL('https://api.agify.io/?name=');
let nationality_url = new URL('https://api.nationalize.io/?name=');
let dog_url = new URL('https://dog.ceo/api/breeds/image/random');

let form = document.getElementById("form");
let reminder = document.getElementById("guide");
let image = document.getElementById("image");

let display_age = document.getElementById("predicted-age");
let display_nation = document.getElementById("predicted-nation");
let display_gender = document.getElementById("predicted-gender");


window.onload = async (event) => {  // Display random dog image when loading page
    event.preventDefault();

    let dog_response = await fetch(dog_url);
    let dog_result = await dog_response.json();
    console.log(dog_result);
    image.src = dog_result.message; 
};


form.onsubmit = async (event) => {
    event.preventDefault();

    let input_name = document.getElementById("name").value;
   
    if(input_name==""){
       reminder.classList.add("red"); // in case the user didn't enter a name
    }

    else {
        reminder.classList.remove("red");

        let age_response = await fetch(age_url+input_name);
        let age_result = await age_response.json();

        let gender_response = await fetch(gender_url+input_name);
        let gender_result = await gender_response.json();

        let nation_response = await fetch(nationality_url+input_name);
        let nation_result = await nation_response.json();

        displayPrediction(age_result.age,gender_result.gender,nation_result.country);
}};

function displayPrediction(predicted_age,predicted_gender,predicted_nation){

    let nations="";
    display_age.innerHTML=predicted_age;
    display_gender.innerHTML=predicted_gender;

    for (var i=0; i<predicted_nation.length;i++)
    {
        nations+=predicted_nation[i].country_id + ", ";
    }
    display_nation.innerHTML= nations;
};