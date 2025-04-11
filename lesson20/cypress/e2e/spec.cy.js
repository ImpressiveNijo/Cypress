import 'cypress-mochawesome-reporter/register';
import GaragePage from '../pages/GaragePage';


describe('Add a new car', () => {
  beforeEach("Login", function() {   
    cy.visit('', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
        
}});
  })
  it('login and Add a car', () => {
  cy.contains('Sign In').click();
  cy.get('[id="signinEmail"]').type(Cypress.env('username'));
  cy.get('[id="signinPassword"]').type(Cypress.env('password'));
  cy.contains('button', 'Login').click();
  GaragePage.addCar('BMW', 'X6', '500');

})
});

