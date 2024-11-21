class BudgetCalc{
    constructor(){
        this.income = 0;
        this.expenses = 0;

    }

    addIncome(amount){
        if (amount > 0){
            this.income += amount
            this.update()
        } else {
            alert("Please enter a valid Income");
        };
    }

    addExpenses(amount){
        if (amount > 0){
            this.expenses += amount
            this.update()
        } else {
            alert("Please enter a valid expense");
        };
    }

    calculateBalance(){
        return this.income - this.expenses;
    }

    //update ui
    updateUI(){
        document.querySelector(".income-output").textContent = this.income;
        document.querySelector(".expenses-output").textContent = this.expenses;
        document.getElementById("remainingBudget").textContent = this.calculateBalance();
    }

}

const BudgetCalculator = new BudgetCalc()

document.getElementById("addIncome").addEventListener('click', function(income){
    const income = document.getElementById("incomeID");
    if (income){
        BudgetCalc.addIncome(parseFloat(income));
        document.getElementById("incomeID") = '';
    }
})

document.getElementById("addExpenses").addEventListener('click', function(expenses){
    const income = document.getElementById("expensesID");
    if (income){
        BudgetCalc.addIncome(parseFloat(expenses));
        document.getElementById("expensesID") = '';
    }
})



