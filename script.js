let weeklyBudget = document.querySelector(".weekly-budget")
let budget = document.querySelector(".budget")
let availableBalance = document.querySelector(".balance-amount")
let enterExpense = document.querySelector(".enter-expense");
//location selectors for form 2
let entertainment = document.querySelector(".listEntertainment");
let bills = document.querySelector(".listBills");
let clothing = document.querySelector(".listClothing");
let food = document.querySelector(".listFood");
let spentAmount = document.querySelector(".spend-heading");
let alertbox = document.querySelector(".alert-container");


let entertainmentAmount = 0;
let foodAmount = 0;
let clothingAmount = 0;
let billsAmount = 0;
// let totalSpend = (entertainmentAmount + foodAmount + clothingAmount + billsAmount);

let totalSpend = 0;
let availableBalanceTotal = 0;


//innertext updates
entertainment.innerHTML = `<span class="fas fa-dice icon"></span>Entertainment: $${entertainmentAmount.toFixed(2)}`;
bills.innerHTML = `<span class="fas fa-file-invoice-dollar icon"></span>Bills: $${billsAmount.toFixed(2)}`;
clothing.innerHTML = `<span class="fas fa-tshirt icon"></span>Clothing: $${clothingAmount.toFixed(2)}`;
food.innerHTML = `<span class="fas fa-utensils icon"></span>Food: $${foodAmount.toFixed(2)}`;
spentAmount.innerText = `Total Spent: $${totalSpend.toFixed(2)}`;
console.log(totalSpend)



let foodSelect = document.querySelector(".select-food");
let clothingSelect = document.querySelector(".select-clothing");
let billsSelect = document.querySelector(".select-bills");
let entSelect = document.querySelector(".select-ent");



//first form
budget.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budget);
    let amount = Number(data.get("amount"));
    // console.log(amount)
    weeklyBudget.innerText = `Weekly Budget: $${amount.toFixed(2)}`;
    availableBalanceTotal = amount;
    availableBalance.innerText = `$${amount.toFixed(2)}`;

    budget.style.display = "none";
    enterExpense.style.display = "flex";
})



let foodValue = foodSelect.getAttribute("value");
let clothingValue = clothingSelect.getAttribute("value");
let billsValue = billsSelect.getAttribute("value");
let entValue = entSelect.getAttribute("value");
console.log(foodValue)
console.log(clothingValue)
console.log(billsValue)
console.log(entValue)

//second form

enterExpense.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(enterExpense);
    let select = data.get("select1");
    let input = Number(data.get("text1"));
    console.log(select);
    console.log(input);
    enterExpense.reset();
    if (input > availableBalanceTotal) {
        // added return to stop function from running
        return alertbox.style.display = "flex";
    }
    else if (foodValue === select) {
        foodAmount += input;
        food.innerHTML = `<span class="fas fa-utensils icon"></span>Food: $${foodAmount.toFixed(2)}`;
    } else if (clothingValue === select) {
        clothingAmount += input;
        clothing.innerHTML = `<span class="fas fa-tshirt icon"></span>Clothing: $${clothingAmount.toFixed(2)}`;
    } else if (entValue === select) {
        entertainmentAmount += input;
        entertainment.innerHTML = `<span class="fas fa-dice icon"></span>Entertainment: $${entertainmentAmount.toFixed(2)}`;
    } else {
        billsAmount += input;
        bills.innerHTML = `<span class="fas fa-file-invoice-dollar icon"></span>Bills: $${billsAmount.toFixed(2)}`
    };

    totalSpend += input;
    spentAmount.innerText = `Spent Amount: $${totalSpend.toFixed(2)}`;
    availableBalanceTotal -= input;
    availableBalance.innerText = `$${availableBalanceTotal.toFixed(2)}`;

});

// added alert stuff
// alert
let alertX = document.querySelector(".delete");
alertX.addEventListener("click", () => {
    alertbox.style.display = "none";
});




//innerText changing example with template literal

// bills.innerText = `Bills: $${billsAmount.toFixed(2)}`;
// clothing.innerText = `Clothing: $${clothingAmount.toFixed(2)}`;
// food.innerText = `Food: $${foodAmount.toFixed(2)}`;
// spentAmount.innerText = `Total Spent: $${totalSpend.toFixed(2)}`;