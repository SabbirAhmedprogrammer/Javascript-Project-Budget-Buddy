let weeklyBudget = document.querySelector(".weekly-budget")
let budget = document.querySelector(".budget")
let availableBalance = document.querySelector(".balance-amount")

budget.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budget);
    let amount = data.get("amount");
    console.log(amount)
    weeklyBudget.innerText = `Weekly Budget: $${amount}`;
    availableBalance.innerText = `$${amount}`;

})