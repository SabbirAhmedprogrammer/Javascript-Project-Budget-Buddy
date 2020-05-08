let weeklyBudget = document.querySelector(".weekly-budget")
let budget = document.querySelector(".budget")
let availableBalance = document.querySelector(".balance-amount")
let enterExpense = document.querySelector(".enter-expense");

// availableBalance.innerText= 

//first form
budget.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budget);
    let amount = data.get("amount");
    // console.log(amount)
    weeklyBudget.innerText = `Weekly Budget: $${amount}`;
    availableBalance.innerText = `$${amount}`;

    budget.style.display = "none";
    enterExpense.style.display = "flex";
})

//second form

enterExpense.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(enterExpense);
    let select = data.get("select1");
    let input = data.get("text1");
    console.log(select);
    console.log(input);
    enterExpense.reset();
})
