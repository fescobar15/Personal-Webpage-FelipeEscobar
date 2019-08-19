"use strict";
/*global*/
// Function to calculate and set age in the html
function setAge(){
  // Variables to save actual date
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let day = date.getDay();
  //Calculate current age
  let age = year - 1997;
  //If birthday has not passed in the current year current age must decrease in one year
  if(month<=4 && day<15)
  {
    age = age - 1;
  }
  //Set the age in the html element with ID "age"
  document.getElementById("age").innerHTML = age;
}