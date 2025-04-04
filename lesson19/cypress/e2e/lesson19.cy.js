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
    cy.contains('Name required').should('have.text', 'Name required').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    cy.get('[id="signupEmail"]').clear('');
    cy.contains('Last name required').should('have.text', 'Last name required').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupLastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').clear('');
    cy.contains('Email required').should('have.text', 'Email required').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupEmail"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('[id="signupRepeatPassword"]').clear('');
    cy.contains('Password required').should('have.text', 'Password required').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').click(); // without this click, an error does not appear in Re-enter password
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    cy.contains('Re-enter password required').should('have.text', 'Re-enter password required').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    }),

    it('Invalid characters in the “Name” and “Last name” fields', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('@testuser');
    cy.get('[id="signupLastName"]').type('LastName123');    // 
    cy.contains('Name is invalid').should('have.text', 'Name is invalid').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.contains('Last name is invalid').should('have.text', 'Last name is invalid').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupLastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    cy.get('[id="signupPassword"]').type('Usertest123');
    cy.get('[id="signupRepeatPassword"]').type('Usertest123');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it('Invalid length of “Name” and “Last name”', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('A');
    cy.get('[id="signupLastName"]').type('B');
    cy.get(':nth-child(1) > .invalid-feedback > p').should('have.text', 'Name has to be from 2 to 20 characters long').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get(':nth-child(2) > .invalid-feedback > p').should('have.text', 'Last name has to be from 2 to 20 characters long').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupLastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    cy.get('[id="signupPassword"]').type('Usertest123');
    cy.get('[id="signupRepeatPassword"]').type('Usertest123');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it('“Name” or “Last name” is too long', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('SuperLongNameThatIsTooBig');
    cy.get('[id="signupLastName"]').type('VeryVeryLongLastNameThatIsTooBig');
    cy.get(':nth-child(1) .invalid-feedback p').should('have.text', 'Name has to be from 2 to 20 characters long').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get(':nth-child(2) > .invalid-feedback > p').should('have.text', 'Last name has to be from 2 to 20 characters long').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupLastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    cy.get('[id="signupPassword"]').type('Usertest123');
    cy.get('[id="signupRepeatPassword"]').type('Usertest123');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it('Incorrect email format', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmailcom');
    cy.get('[id="signupPassword"]').type('Password123');
    cy.contains('Email is incorrect').should('have.text', 'Email is incorrect').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupEmail"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('[id="signupRepeatPassword"]').type('Password123');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it('Password is too short', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('Abc1!');
    cy.get('[id="signupRepeatPassword"]').type('Abc1!');
    cy.get(':nth-child(4) .invalid-feedback p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').click(); // without this click, an error does not appear in Re-enter password
    cy.get(':nth-child(5) .invalid-feedback p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it('Passwords do not match', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('Password123');
    cy.get('[id="signupRepeatPassword"]').type('Password321');
    cy.get('[id="signupPassword"]').click(); // without this click, an error does not appear in Re-enter password
    cy.contains('Passwords do not match').should('have.text', 'Passwords do not match').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it('Password without a capital letter', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('password123');
    cy.get('[id="signupRepeatPassword"]').type('password123');
    cy.get(':nth-child(4) .invalid-feedback > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').click(); // without this click, an error does not appear in Re-enter password
    cy.get(':nth-child(5) .invalid-feedback > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it('Password without a number', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('PasswordOnly');
    cy.get('[id="signupRepeatPassword"]').type('PasswordOnly');
    cy.get(':nth-child(4) .invalid-feedback > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').click(); // without this click, an error does not appear in Re-enter password
    cy.get(':nth-child(5) .invalid-feedback > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it('Password is too long ', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('testuser');
    cy.get('[id="signupLastName"]').type('testlastname');
    cy.get('[id="signupEmail"]').type('usertest@gmail.com');
    cy.get('[id="signupPassword"]').type('SuperSecurePassword123');
    cy.get('[id="signupRepeatPassword"]').type('SuperSecurePassword123');
    cy.get(':nth-child(4) .invalid-feedback > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('[id="signupPassword"]').click(); // without this click, an error does not appear in Re-enter password
    cy.get(':nth-child(5) .invalid-feedback > p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button','Register').should('be.disabled').and('have.text', 'Register')
    }),

    it.skip('Successful registration ', () => {
    cy.contains('Sign up').click();
    cy.get('[id="signupName"]').type('Stanislav');
    cy.get('[id="signupLastName"]').type('Voidenko');
    cy.get('[id="signupEmail"]').type('stasvoidenko+qauto@gmail.com');
    cy.get('[id="signupPassword"]').type('Password123');
    cy.get('[id="signupRepeatPassword"]').type('Password123');
    cy.contains('button','Register').should('be.enabled').and('have.text', 'Register').click()
    }),
 
    it('Login with secure password', () => {
    cy.login('stasvoidenko+qauto@gmail.com');
    });

});
