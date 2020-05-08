let weeklyBudget = document.querySelector(".weekly-budget")
let budget = document.querySelector(".budget")
let availableBalance = document.querySelector(".balance-amount")
let enterExpense = document.querySelector(".enter-expense");
//location selectors for form 2
let entertainment = document.querySelector(".listEntertainment");
let bills = document.querySelector(".listBills");
let clothing = document.querySelector(".listClothing");
let food = document.querySelector(".listFood");

let entertainmentAmount = 0;
let foodAmount = 0;
let clothingAmount = 0;
let billsAmount = 0;
let totalSpend = (entertainment + food + clothing + bills);

//innertext updates
entertainment.innerText = `Entertainment:$${entertainmentAmount}`;
bills.innerText = `Bills:$${billsAmount}`;
clothing.innerText = `Clothing:$${clothingAmount}`;
food.innerText = `Food:$${foodAmount}`;



//first form
budget.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budget);
    let amount = Number(data.get("amount"));
    // console.log(amount)
    weeklyBudget.innerText = `Weekly Budget: $${amount.toFixed(2)}`;
    availableBalance.innerText = `$${amount.toFixed(2)}`;

    budget.style.display = "none";
    enterExpense.style.display = "flex";
})

//second form

enterExpense.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(enterExpense);
    let select = data.get("select1");
    let input = Number(data.get("text1"));
    console.log(select);
    console.log(input);
    enterExpense.reset();

})

//if entertainment is selected, .categories.innertext= ""


//         let amount = Number(event.target.getAttribute("data-amount"));
//         console.log(amount);
//         currentTotal += amount;