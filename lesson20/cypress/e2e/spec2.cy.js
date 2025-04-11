import 'cypress-mochawesome-reporter/register';
import ExpensesPage from '../pages/ExpensesPage';


describe('Add FuelExpense', () => {
  beforeEach("Login", function() {   
    cy.visit('', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  });
        
it('login and Add FuelExpense', () => {
  cy.contains('Sign In').click();
  cy.get('[id="signinEmail"]').type(Cypress.env('username'));
  cy.get('[id="signinPassword"]').type(Cypress.env('password'));
  cy.contains('button', 'Login').click();
  ExpensesPage.fuelExpenseButton.click();
  ExpensesPage.addFuelExpense('BMW X6', '50', '100', '1000');

});
});

