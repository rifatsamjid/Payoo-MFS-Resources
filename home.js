const pin = 1234;
const transactionData = [];

// reused function get input value to number
function getInputValueNumber(id) {
  const convertValue = parseInt(document.getElementById(id).value);
  return convertValue;
}

// get inner text
function getInnerText(id) {
  const element = parseInt(document.getElementById(id).innerText);
  return element;
}

// set inner text
function setInnerText(value) {
  const elementsValue = (document.getElementById("amount").innerText = value);
}

// toggling feature

// toggling function
function handelToggling(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// add money
document.getElementById("add-money").addEventListener("click", function () {
  handelToggling("add-money-parent");
});

// cash out
document
  .getElementById("withdraw-money")
  .addEventListener("click", function () {
    handelToggling("withdraw-money-parent");
  });

// transfer money
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    handelToggling("transfer-money-parent");
  });

// get bonus

document.getElementById("get-bonus").addEventListener("click", function () {
  handelToggling("get-bonus-parent");
});

// pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
  handelToggling("pay-bill-parent");
});
// transaction
document.getElementById("transaction").addEventListener("click", function () {
  handelToggling("transaction-history-parent");
});

// form

// Add Amount
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankName = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = getInputValueNumber("add-amount");
    if (addAmount <= 0) {
      alert("Invalid Balance");
      return;
    }
    const pinNumber = getInputValueNumber("pin-number");
    const mainAmount = getInnerText("amount");
    if (accountNumber.length < 11) {
      alert("Please correct the number");
      return;
    }
    if (pinNumber !== pin) {
      alert("Please correct your pin number");
      return;
    }

    const totalAmount = addAmount + mainAmount;
    setInnerText(totalAmount);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

// withdraw money

document
  .getElementById("btn-withdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankNumber = document.getElementById("bank-number").value;
    const withdrawAmount = getInputValueNumber("withdraw-amount");
    const bankPin = getInputValueNumber("bank-pin");
    const amount = getInnerText("amount");
    if (amount < withdrawAmount || withdrawAmount <= 0) {
      alert("Invalid Balance");
      return;
    }
    if (bankNumber.length < 11) {
      alert("Please correct your bank number");
      return;
    }
    if (bankPin !== pin) {
      alert("Please correct your pin number");
      return;
    }
    const currentTotalAmount = amount - withdrawAmount;
    setInnerText(currentTotalAmount);
    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

// transfer money
document
  .getElementById("btn-transfer")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const transferAccount = document
      .getElementById("transfer-account-number")
      .value.trim();
    const transferAmount = getInputValueNumber("transfer-amount");
    const transferPin = getInputValueNumber("transfer-pin");
    const availableAmount = getInnerText("amount");
    if (availableAmount < transferAmount || transferAmount <= 0) {
      alert("Invalid Balance");
      return;
    }
    if (transferAccount.length < 11) {
      alert("Please correct your bank number");
      return;
    }
    if (transferPin !== pin) {
      alert("Please correct your pin number");
      return;
    }
    const currentAmount = availableAmount - transferAmount;
    setInnerText(currentAmount);
    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

// pay bill
document
  .getElementById("btn-pay-now")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bankAccount = document.getElementById("select-bank").value;
    const billerAccountNumber = document.getElementById("biller-account").value;
    const amountPay = getInputValueNumber("pay-amount");
    const accountPin = getInputValueNumber("pay-amount-pin-number");
    const availableAmount = getInnerText("amount");
    if (availableAmount < amountPay || amountPay <= 0) {
      alert("Invalid Balance");
      return;
    }
    if (billerAccountNumber.length < 11) {
      alert("Please correct your bank number");
      return;
    }
    if (accountPin !== pin) {
      alert("Please correct your pin number");
      return;
    }
    const currentAmount = availableAmount - amountPay;
    setInnerText(currentAmount);
  });

// transaction
document.getElementById("transaction").addEventListener("click", function () {
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerText = "";
  for (const data of transactionData) {
    const div = document.createElement("div");

    div.innerHTML = `
    <div
          class="bg-white mt-5 p-3 rounded-xl flex justify-between items-center"
        >
          <div class="flex items-center gap-3">
            <div class="p-3 rounded-full bg-[#f4f5f7]">
              <img src="./assets/wallet1.png" alt="" />
            </div>
            <div>
              <h1 class="font-semibold text-xl">${data.name}</h1>
              <p class="text-[#080808b3]">${data.date}</p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        `;

    transactionContainer.appendChild(div);
  }
});
