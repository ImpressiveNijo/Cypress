describe('Lesson18', () => {
    beforeEach("Login", function() {   
      cy.visit('', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
  }});
    })
   
  it('Sign In', () => {
      cy.contains('Sign In').should('be.visible').click();
      cy.get('[id="signinEmail"]').type('Test');
      cy.get('.form-control.ng-untouched.ng-pristine.ng-invalid').type('Test123');
      cy.get('[id="remember"]').check();
      cy.get('[class="close"]').click();
      }),

  it('Sign UP', () => {
    cy.get('.hero-descriptor').find('.hero-descriptor_descr.lead').should('have.text', 'With the help of the Hillel auto project, you will have the opportunity to get hands-on experience in manual testing.');
  cy.get('.hero-descriptor_btn.btn.btn-primary').click();
    cy.get('[id="signupName"]').type('Test');
    cy.get('.close').click();
    }),
    
  it('Contacts', () => {
    cy.get('button').contains('Contact').click()
    cy.get('[href="https://www.linkedin.com/school/ithillel/"]').should('be.visible');
    cy.get('[href="https://www.facebook.com/Hillel.IT.School"]').should('be.visible');
    cy.get('[href="https://www.instagram.com/hillel_itschool/"]').should('be.visible');
    cy.get('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('be.visible');
    cy.get('[href="https://t.me/ithillel_kyiv"]').should('be.visible');
    cy.get('.display-4').should('have.text','ithillel.ua').click();
    cy.get('.h4').should('have.text', 'support@ithillel.ua');
  }),

  it('About', () => {
    cy.get('button').contains('About').click()
    cy.contains('Keep track of your replacement schedule and plan your vehicle maintenance expenses in advance.').should('be.visible');
    cy.get('.display-4').should('have.text','ithillel.ua').click();
    cy.get('.h4').should('have.text', 'support@ithillel.ua');
    })

  })
