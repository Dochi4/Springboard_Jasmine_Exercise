
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const defaultValues = { 
    amount: 1200,
    years: 20,
    rate: 3
  };
  const loanAmount = document.querySelector("input[id='loan-amount']");
  loanAmount.value = defaultValues.amount;
  const loanYears = document.querySelector("input[id='loan-years']");
  loanYears.value = defaultValues.years;
  const loanRate = document.querySelector("input[id='loan-rate']");
  loanRate.value = defaultValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const I = (values.rate / 100) / 12;
  const N = Math.floor(values.years * 12);

  const loanCalc = (P * I) / (1 - (1 + I) ** -N);

  return loanCalc.toFixed(2);
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const uiMonthly = document.querySelector("#monthly-payment");
  uiMonthly.innerText = "$" + monthly; 
}