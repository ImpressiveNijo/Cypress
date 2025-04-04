describe('Lesson19', () => {
  beforeEach("Login", function() {   
    cy.visit('', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
      
}});
  })
 
    it('All fields are empty', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').clear('');
    cy.get('[id="signupLastName"]').clear('');
    cy.get('[id="signupEmail"]').clear('');
    cy.get('[id="signupPassword"]').clear('');
    cy.get('[id="signupRepeatPassword"]').clear('');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Invalid characters in the “Name” and “Last name” fields', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('@testuser');
    cy.get('[id="signupLastName"]').type('LastName123');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('Usertest123');
    cy.get('[id="signupRepeatPassword"]').type('Usertest123');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Invalid length of “Name” and “Last name”', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('A');
    cy.get('[id="signupLastName"]').type('B');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('Usertest123');
    cy.get('[id="signupRepeatPassword"]').type('Usertest123');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('“Name” or “Last name” is too long', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('SuperLongNameThatIsTooBig');
    cy.get('[id="signupLastName"]').type('VeryVeryLongLastNameThatIsTooBig');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('Usertest123');
    cy.get('[id="signupRepeatPassword"]').type('Usertest123');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Incorrect email format', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmailcom');
    cy.get('[id="signupPassword"]').type('Password123');
    cy.get('[id="signupRepeatPassword"]').type('Password123');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Password is too short', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('Abc1!');
    cy.get('[id="signupRepeatPassword"]').type('Abc1!');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Passwords do not match', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('Password123');
    cy.get('[id="signupRepeatPassword"]').type('Password321');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Password without a capital letter', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('password123');
    cy.get('[id="signupRepeatPassword"]').type('password123');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Password without a number', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('PasswordOnly');
    cy.get('[id="signupRepeatPassword"]').type('PasswordOnly');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Password is too long ', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('SuperSecurePassword123');
    cy.get('[id="signupRepeatPassword"]').type('SuperSecurePassword123');
    cy.contains('button','Register').should('be.disabled');
    }),

    it('Successful registration ', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('Stanislav');
    cy.get('[id="signupLastName"]').type('Voidenko');
    cy.get('[id="signupEmail"]').type('stasvoidenko+qauto@gmail.com');
    cy.get('[id="signupPassword"]').type('Password123');
    cy.get('[id="signupRepeatPassword"]').type('Password123');
    cy.contains('button','Register').should('be.disabled').should('be.enabled').click();
    }),
 
    it('Login with secure password', () => {
    cy.login('stasvoidenko+qauto@gmail.com');
    });

});
