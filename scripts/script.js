
//var loginIndex = localStorage.getItem('loginIndex')? JSON.parse(localStorage.getItem('items1')) : "null";
var loginIndex = localStorage.getItem('loginIndex');


var fname = document.getElementById("firstName");
var lname = document.getElementById("lastName");
var password = document.getElementById("password");
var email = document.getElementById("email");
var address = document.getElementById("address");
var country = document.getElementById("country");
var state = document.getElementById("state");
var gridCheck1 = document.getElementById("gridCheck1");

//register button
//var buttonPress = document.getElementById("registerButton");

//login button

var emailLogin = document.getElementById("emailLogin");
var passwordLogin = document.getElementById("passwordLogin");
//var loginButtonPress = document.getElementById("loginButton");
var gridCheckLogin = document.getElementById("gridCheckLogin");



// localStorage.clear();
console.log(localStorage);





let fNameArray = localStorage.getItem('items1') ? JSON.parse(localStorage.getItem('items1')) : [];
let lNameArray = localStorage.getItem('items2') ? JSON.parse(localStorage.getItem('items2')) : [];
let passwordArray = localStorage.getItem('items3') ? JSON.parse(localStorage.getItem('items3')) : [];
let emailArray = localStorage.getItem('items4') ? JSON.parse(localStorage.getItem('items4')) : [];
let addressArray = localStorage.getItem('items5') ? JSON.parse(localStorage.getItem('items5')) : [];
let countryArray = localStorage.getItem('items6') ? JSON.parse(localStorage.getItem('items6')) : [];
let stateArray = localStorage.getItem('items7') ? JSON.parse(localStorage.getItem('items7')) : [];





//register
//buttonPress.addEventListener('click', function () {

function register(){

  var fnameBool = false;
  var lnameBool = false;
  var passwordBool = false;
  var emailBool = false;
  var addressBool = false;
  var countryBool = false;
  var stateBool = false;
  var gridCheck1Bool = false;

    if(fname.value == ""){
      alert("Please fill the first name");
      return;
    }
    else{
      fnameBool = true;
    }

    if(lname.value == ""){
      alert("Please fill the last name");
      return;
    }
    else{
      lnameBool = true;
    }
    if(password.value == ""){
      alert("Please fill the password");
      return;
    }
    else{
    passwordBool = true;
    }

    if(email.value == ""){
      alert("Please fill the email");
      return;
    }
    else{

      if(emailArray.length == 0){
          emailBool = true;

      }
      else{


        for (var i = 0; i < emailArray.length; i++) {

          if(emailArray[i] == email.value){
            emailBool = false;
  alert("this email is already registered");
            break;

          }
          else{
            emailBool = true;
         }
       }
      }




    }

    if(address.value == ""){
      alert("Please fill the address");
      return;
    }
    else{
      addressBool = true;
    }

    if(country.value == ""){
      alert("Please fill the country");
      return;
    }
    else{
      countryBool = true;
    }

    if(state.value == ""){
      alert("Please fill the state");
      return;
    }
    else{
      stateBool = true;
    }

    if(gridCheck1.checked == false){
      alert("Please check the checkbox");
    }
    else {
      gridCheck1Bool = true;
    }

    if(fnameBool && lnameBool && passwordBool && emailBool && addressBool && countryBool && stateBool && gridCheck1Bool){

      fNameArray.push(fname.value);
      lNameArray.push(lname.value);
      passwordArray.push(password.value);
      emailArray.push(email.value);
      addressArray.push(address.value);
      countryArray.push(country.value);
      stateArray.push(state.value);

      localStorage.setItem('items1', JSON.stringify(fNameArray));
      localStorage.setItem('items2', JSON.stringify(lNameArray));
      localStorage.setItem('items3', JSON.stringify(passwordArray));
      localStorage.setItem('items4', JSON.stringify(emailArray));
      localStorage.setItem('items5', JSON.stringify(addressArray));
      localStorage.setItem('items6', JSON.stringify(countryArray));
      localStorage.setItem('items7', JSON.stringify(stateArray));

       alert("You are successfully registered");

    }
}
//});



// log in

function login(){
  var emailLoginBool = false;
  var passwordLoginBool = false;
  var gridCheckLoginBool = false;
  var emailIndex;

  if(emailLogin.value == ""){
    alert("Please fill the email");
    return;
  }
  else{

   emailLoginBool = true;
//      for (var i = 0; i < emailArray.length; i++) {
// if(emailArray[i] == emailLogin.value){
//   emailIndex = i;
// }
//
//      }

  }

  if(passwordLogin.value == ""){
    alert("Please fill the password");
    return;
  }
  else{
    for (var i = 0; i < passwordArray.length; i++) {

      if(passwordArray[i] == passwordLogin.value){
        passwordLoginBool = true;

       localStorage.setItem('loginIndex', i);


        break;

      }
      else{
        passwordLoginBool = false;

      }
    }
  }

  if(gridCheckLogin.checked == false){
    alert("Please check the checkbox");
    return;
  }
  else {
    gridCheckLoginBool = true;
  }

  if(emailLoginBool && passwordLoginBool && gridCheckLoginBool){

  //  alert(localStorage.getItem('loginIndex')+" successfully logged in");
  alert(emailLogin.value+" successfully logged in");



  }
  else {
    alert("Incorrect user details");
  }

}

//hotel Booking

var hotelLocation = document.getElementById("hotelLocation");
var hotelBookFrom = document.getElementById("hotelBookFrom");
var hotelBookTo = document.getElementById("hotelBookTo");
var hotelName = document.getElementById("hotelName");
var hotelGridCheck = document.getElementById("hotelGridCheck");

let hotelArray = localStorage.getItem('items9') ? JSON.parse(localStorage.getItem('items9')) : [];


function bookHotel(){
  if(localStorage.getItem('loginIndex') != "null"){
    if(hotelLocation.value != "" && hotelBookFrom.value != "" && hotelBookTo.value != "" && hotelName.value != "" ){
    hotelArray.push(localStorage.getItem('loginIndex'));
    hotelArray.push("Hotel Location: "+hotelLocation.value+", Book From: "+hotelBookFrom.value+", Book To: "+hotelBookTo.value+", Hotel Name: "+hotelName.value);
    localStorage.setItem('items9', JSON.stringify(hotelArray));
    alert("saved");
 }
  else {
    {
      alert("fill all fields");
    }
  }

  }
  else{
    alert("Please log in first");
  }


}


//train Booking


var trainFrom = document.getElementById("trainFrom");
var trainTo = document.getElementById("trainTo");
var trainDepart = document.getElementById("trainDepart");
var trainReturn = document.getElementById("trainReturn");
var trainClass = document.getElementById("trainClass");
var trainGridCheck = document.getElementById("trainGridCheck");

let trainArray = localStorage.getItem('items10') ? JSON.parse(localStorage.getItem('items10')) : [];


function bookTrain(){
  if(localStorage.getItem('loginIndex') != "null"){
if(trainFrom.value != "" && trainTo.value != "null" && trainDepart.value != "" && trainReturn.value != "" && trainClass.value != "" ){

    trainArray.push(localStorage.getItem('loginIndex'));
    var info = "Train From: "+trainFrom.value+", Train To: "+trainTo.value+", Train Depart: "+trainDepart.value+", Train Return: "+trainReturn.value+", Train Class: "+trainClass.value;
    trainArray.push(info);
    localStorage.setItem('items10', JSON.stringify(trainArray));
    alert("saved");
  }
  else {
alert("please fill all fields");
  }

  }
  else{
    alert("Please log in first");
  }


}



//flight Booking


var flightFrom = document.getElementById("flightFrom");
var flightTo = document.getElementById("flightTo");
var flightDepart = document.getElementById("flightDepart");
var flightReturn = document.getElementById("flightReturn");
var flightClass = document.getElementById("flightClass");
var flightGridCheck = document.getElementById("flightGridCheck");

let flightArray = localStorage.getItem('items11') ? JSON.parse(localStorage.getItem('items11')) : [];


function bookFlight(){



  if(localStorage.getItem('loginIndex') != "null"){
    if(flightFrom.value != "" && flightTo.value != "null" && flightDepart.value != "" && flightReturn.value != "" && flightClass.value != "" ){
    flightArray.push(localStorage.getItem('loginIndex'));
    var info = "Flight From: "+flightFrom.value+", Flight To: "+flightTo.value+", Flight Depart: "+flightDepart.value+", Flight Return "+flightReturn.value+", Flight Class: "+flightClass.value;
    flightArray.push(info);
    localStorage.setItem('items11', JSON.stringify(flightArray));
    alert("saved");
  }
  else{
      alert("fill all fields");
  }

  }
  else{
    alert("Please log in first");
  }


}

// contact us Form


var fname1 = document.getElementById("firstName1");
var lname1 = document.getElementById("lastName1");
var email1 = document.getElementById("email1");
var address1 = document.getElementById("address1");
var country1 = document.getElementById("country1");
var state1 = document.getElementById("state1");
var textArea1 = document.getElementById("textArea1");





let fNameArray1 = localStorage.getItem('items12') ? JSON.parse(localStorage.getItem('items12')) : [];

let lNameArray1 = localStorage.getItem('items13') ? JSON.parse(localStorage.getItem('items13')) : [];
let emailArray1 = localStorage.getItem('items14') ? JSON.parse(localStorage.getItem('items14')) : [];
let addressArray1 = localStorage.getItem('items15') ? JSON.parse(localStorage.getItem('items15')) : [];
let countryArray1 = localStorage.getItem('items16') ? JSON.parse(localStorage.getItem('items16')) : [];
let stateArray1 = localStorage.getItem('items17') ? JSON.parse(localStorage.getItem('items17')) : [];
let textAreaArray1 = localStorage.getItem('items18') ? JSON.parse(localStorage.getItem('items18')) : [];




function submitForm(){

  var fnameBool = false;
  var lnameBool = false;

  var emailBool = false;
  var addressBool = false;
  var countryBool = false;
  var stateBool = false;
  var textAreaBool = false;

    if(fname1.value == ""){
      alert("Please fill the first name");
      return;
    }
    else{
      fnameBool = true;
    }

    if(lname1.value == ""){
      alert("Please fill the last name");
      return;
    }
    else{
      lnameBool = true;
    }


    if(email1.value == ""){
      alert("Please fill the email");
      return;
    }
    else{


          emailBool = true;


    }

    if(address1.value == ""){
      alert("Please fill the address");
      return;
    }
    else{
      addressBool = true;
    }

    if(country1.value == ""){
      alert("Please fill the country");
      return;
    }
    else{
      countryBool = true;
    }

    if(state1.value == ""){
      alert("Please fill the state");
      return;
    }
    else{
      stateBool = true;
    }

    if(textArea1.value == ""){
      alert("Please fill the text area");
      return;
    }
    else{
    textAreaBool = true;
    }

    if(fnameBool && lnameBool && emailBool && addressBool && countryBool && stateBool && textAreaBool){

      fNameArray1.push(fname1.value);
      lNameArray1.push(lname1.value);

      emailArray1.push(email1.value);
      addressArray1.push(address1.value);
      countryArray1.push(country1.value);
      stateArray1.push(state1.value);
        textAreaArray1.push(textArea1.value);

      localStorage.setItem('items12', JSON.stringify(fNameArray1));
      localStorage.setItem('items13', JSON.stringify(lNameArray1));

      localStorage.setItem('items14', JSON.stringify(emailArray1));
      localStorage.setItem('items15', JSON.stringify(addressArray1));
      localStorage.setItem('items16', JSON.stringify(countryArray1));
      localStorage.setItem('items17', JSON.stringify(stateArray1));
          localStorage.setItem('items18', JSON.stringify(textAreaArray1));

       alert("Your form submitted successfully");

    }
}




// create List


document.addEventListener('DOMContentLoaded', function() {
  // alert("test");
  // var lcr = localStorage.getItem(lcRequest);
  // var lsUI=localStorage.getItem(loggedUserIndex);
  // alert(lcr);
  // alert(index);
  // alert(dbRequest.count);

  for(var i=0;i<hotelArray.length;i+=2)
  {
    // alert("hello");
    // document.getElementById('dataShown').innerHTML = "<li> <h3> Data Selected</h3> </li>";


    if(hotelArray[i]==parseInt(localStorage.getItem('loginIndex')))
    {
      // var taskID = ;
      //alert(hotelArray[i+1]);
       document.getElementById('dataShown').innerHTML +="<li>" + hotelArray[i+1] + "</li>";
      //show lcRequest[i+1] in my list
    }
  }
  for(var i=0;i<trainArray.length;i+=2)
  {
    // alert("hello");
    // document.getElementById('dataShown').innerHTML = "<li> <h3> Data Selected</h3> </li>";
    if(trainArray[i]==parseInt(localStorage.getItem('loginIndex')))
    {
      // var taskID = ;
      //alert(hotelArray[i+1]);
       document.getElementById('dataShown').innerHTML +="<li>" + trainArray[i+1] + "</li>";
      //show lcRequest[i+1] in my list
    }
  }
  for(var i=0;i<flightArray.length;i+=2)
  {
    // alert("hello");
    // document.getElementById('dataShown').innerHTML = "<li> <h3> Data Selected</h3> </li>";
    if(flightArray[i]==parseInt(localStorage.getItem('loginIndex')))
    {
      // var taskID = ;
      //alert(hotelArray[i+1]);
       document.getElementById('dataShown').innerHTML +="<li>" + flightArray[i+1] + "</li>";
      //show lcRequest[i+1] in my list
    }
  }
});


//logout

function logout(){
  localStorage.setItem('loginIndex', "null");
}
