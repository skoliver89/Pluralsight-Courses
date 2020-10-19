/*jslint browser:true */
"use strict";

function validateForm() {
  var status = true;
  var x;

  // reset the form
  x = document.getElementsByClassName('error');
  while (x[0]){
    x[0].classList.remove('error');
  }


  // validate full name
  x = document.forms.myForm.name.value;
  if (!x || !x.trim()) {
    status = false;
    document.getElementById('fullName').className = "error";
  }

  // validate phone number
  x = document.forms.myForm.phone.value;
  x = x.replace(/\D/g, '');
  if (x.length < 10 || x.length > 15) {
    status = false;
    document.getElementById('phoneNumber').className = "error";
  }

  // validate payment method
  x = document.forms.myForm.payMethod.value;
  if (!x) {
    status = false;
    document.getElementById('payment').className = "error";
  }

  // validate CC Number
  x = document.forms.myForm.ccNumber.value;
  x = x.replace(/\D/g, '');
  if (x.length < 14 || x.length > 19) {
    status = false;
    document.getElementById('ccNumber').className = "error";
  }

  // validate Vehicle Preference
  x = document.forms.myForm.vehicle.value;
  if (!x) {
    status = false;
    document.getElementById('vehicle').className = "error";
  }

  // Show error 'Jumbotron' when there are validation errors present
  // and scroll to the top of the page.
  if (!status) {
    document.getElementById('formProblems').className = "error";
    window.scrollTo(0,0);
  }
  return status;
} // end validateForm