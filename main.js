class BudgetCalc{
    constructor(incomeElemnt, expensesElement, resultElement){
        this.incomeElemnt;
        this.expensesElement;
        this.resultElement;
        this.incomeOutput = incomeOutput;
        this.expensesOutput = expensesOutput;
    }

    //method to get values from the input fields
    getValues(){
        const income = parseFloat(this.incomeElemnt.value) || 0;
        const expenses = parseFloat(this.expensesElement.value)
        return {income, expenses};
    }

    calculateBudget(){
        const {income, expenses} = this.getValues();
        return income - expenses;
    }

    updateResult(){
        const budget = this.calculateBudget();
        this.resultElement.textContent = `Remain Budget: $${budget.toFixed(2)}`;
    }
}

