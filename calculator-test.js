
it('should calculate the monthly rate correctly', function () {
  const defaultVaules = { 
    amount:1200,
    years:20,
    rate:3
  }
  expect(calculateMonthlyPayment(defaultVaules)).toEqual("6.66");
});


it("should return a result with 2 decimal places", function() {
  const defaultVaules = { 
    amount:100000,
    years:10,
    rate:6
  }
  expect(calculateMonthlyPayment(defaultVaules)).toEqual(1110.21.toFixed(2));
});

/// etc
