// Login form
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = 12345678910;
    const mobilePin = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumber = document.getElementById("mobile-pin").value;
    const pinNumberConverted = parseInt(pinNumber);
    if (
      mobileNumberValueConverted === mobileNumber &&
      pinNumberConverted === mobilePin
    ) {
      window.location.href = "./home.html";
    } else {
      alert("Invalid Number Or Pin");
    }
  });
