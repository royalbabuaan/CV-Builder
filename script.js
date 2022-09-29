// alert("loading");
function addNewWEField() {
    //   console.log("Adding new field");
  
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
  
    weOb.insertBefore(newNode, weAddButtonOb);
  }
  
  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  //generating cv
  function generateCV() {
    // console.log("generating CV");
  
    let nameField = document.getElementById("nameField").value;
  
    let nameT1 = document.getElementById("nameT1");
  
    nameT1 .innerHTML = nameField;
  
    //direct
  
    document.getElementById("nameT2").innerHTML = nameField;
  
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById(
      "contactField"
    ).value;
  
    //address
    document.getElementById("addressT").innerHTML = document.getElementById(
      "addressField"
    ).value;
    document.getElementById("fbT").innerHTML = document.getElementById(
      "fbField"
    ).value;
    document.getElementById("instaT").innerHTML = document.getElementById(
      "instaField"
    ).value;
    document.getElementById("linkedT").innerHTML = document.getElementById(
      "linkedField"
    ).value;
  
    //objective
  
    document.getElementById("objectiveT").innerHTML = document.getElementById(
      "objectiveField"
    ).value;
  
    //we
  
    let wes = document.getElementsByClassName("weField");
  
    let str = "";
  
    for (let e of wes) {
      str = str + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("weT").innerHTML = str;
  
    //aq
  
    let aqs = document.getElementsByClassName("eqField");
  
    let str1 = "";
  
    for (let e of aqs) {
      str1 += `<li> ${e.value} </li>`;
    }
  
    document.getElementById("aqT").innerHTML = str1;
  
    //code for setting image
  
    let file = document.getElementById("imgField").files[0];
  
    console.log(file);
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    console.log(reader.result);
  
    //set the image to template
  
    reader.onloadend = function () {
      document.getElementById("imgTemplate").src = reader.result;
    };
  
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
  }
  
  //print cv
  function printCV() {
    window.print();
  }

  //resetting the form
//   function reset() {
//     window.location.reload();
//   }




// watch

function Time() {
  // Creating object of the Date class
  var date = new Date();
  // Get current hour
  var hour = date.getHours();
  // Get current minute
  var minute = date.getMinutes();
  // Get current second
  var second = date.getSeconds();
  // Variable to store AM / PM
  var period = "";
  // Assigning AM / PM according to the current hour
  if (hour >= 12) {
  period = "PM";
  } else {
  period = "AM";
  }
  // Converting the hour in 12-hour format
  if (hour == 0) {
  hour = 12;
  } else {
  if (hour > 12) {
  hour = hour - 12;
  }
  }
  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  second = update(second);
  // Adding time elements to the div
  document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);
 }
  // Function to update time elements if they are less than 10
  // Append 0 before time elements if they are less than 10
 function update(t) {
  if (t < 10) {
  return "0" + t;
  }
  else {
  return t;
  }
 }
 Time();

//  yaha tak