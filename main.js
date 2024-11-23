class BudgetCalc{
    constructor(){
        this.income = 0;
        this.expenses = 0;

        //getting dom elements
        this.incomeInput = document.getElementById('incomeID');
        this.expensesInput = document.querySelector('.expensesID');
        this.incomeOutput = document.querySelector('.income-output');
        this.expensesOutput = document.querySelector('.expenses-output');
        this.remainingBudgetEl = document.getElementById('remainingBudget');
        this.addIncomeBtn = document.getElementById('addIncome');
        this.addExpensesBtn = document.getElementById('addExpenses');

        this.addIncomeBtn.addEventListener('click', () => this.handleTransaction('income'));
        this.addExpensesBtn.addEventListener('click', () => this.handleTransaction('expenses'));

    }

    // addIncome(amount){
    //     if (amount > 0){
    //         this.income += amount
    //         this.update()
    //     } else {
    //         alert("Please enter a valid Income");
    //     };
    // }

    // addExpenses(amount){
    //     if (amount > 0){
    //         this.expenses += amount
    //         this.update()
    //     } else {
    //         alert("Please enter a valid expense");
    //     };
    // }

    // calculateBalance(){
    //     return this.income - this.expenses;
    // }

    handleTransaction(type){
        const inputElement = type === 'income' ? this.incomeInput : this.expensesInput;
        const amount = parseFloat(inputElement.value);

        if(isNaN(amount) || amount <= 0){
            alert(`Please enter a valid ${type} amount!`);
            return;
        }

        if(type === 'income'){
            this.income += amount;
        } else {
            this.expenses += amount;
        }

        inputElement.value = '';
        this.updateUI();
    }

    //update ui
    updateUI(){
        this.incomeOutput.textContent = `$${this.income.toFixed(2)}`;
        this.expensesOutput.textContent = `$${this.expenses.toFixed(2)}`;
        const remainingBudget = this.income -this.expenses;
        this.remainingBudgetEl.textContent = `$${remainingBudget.toFixed(2)}`;
    }

}


document.addEventListener('DOMContentLoaded', () => {
    new BudgetCalc();
});

// const BudgetCalculator = new BudgetCalc()

// document.getElementById("addIncome").addEventListener('click', function(income){
//     const income = document.getElementById("incomeID");
//     if (income){
//         BudgetCalc.addIncome(parseFloat(income));
//         document.getElementById("incomeID") = '';
//     }
// })

// document.getElementById("addExpenses").addEventListener('click', function(expenses){
//     const income = document.getElementById("expensesID");
//     if (income){
//         BudgetCalc.addIncome(parseFloat(expenses));
//         document.getElementById("expensesID") = '';
//     }
// })



