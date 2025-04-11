class ExpensesPage {
    get fuelExpenseButton() {
        return cy.get('[routerlink="expenses"]');
    }

    get brandDropdown() {
        return cy.get('#carSelectDropdown'); 
    }

    get addFuelExpenseButton() {
        return cy.get('.btn-primary');
    }

    get mileageInput() {
        return cy.get('#addExpenseMileage');
    }

    get addExpenseLiters() {
        return cy.get('#addExpenseLiters');
    }

    get addExpenseTotalCost() {
        return cy.get('#addExpenseTotalCost');
    }

    get submitExpenseButton() {
        return cy.get('.modal-footer > .btn-primary');
    }

    addFuelExpense(brand, amount, totalCost, mileage) {
        this.brandDropdown.click();
        cy.contains(brand).click();
        this.addFuelExpenseButton.click();  
        this.addExpenseLiters.type(amount); 
        this.addExpenseTotalCost.type(totalCost);
        this.mileageInput.clear().type(mileage);
        this.submitExpenseButton.click(); 
    }
}

export default new ExpensesPage();
