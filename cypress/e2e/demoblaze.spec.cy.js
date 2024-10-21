describe('Demoblaze', () => {
  const randomNumber = Math.floor(Math.random() * 10000);
  const username = `username${randomNumber}`; 
  const password = 'qwerty123';

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should register new user', () => {
    cy.contains('#signin2', 'Sign up').click();

    cy.get('#sign-username').should('be.visible').type(username); 
    cy.get('#sign-password').should('be.visible').type(password); 
    cy.contains('.btn', 'Sign up').should('be.visible').click();
  });

  it('should login user', () => {
    cy.contains('.nav-link', 'Log in').should('be.visible').click(); 

    cy.get('#loginusername').should('be.visible').type(username);
    cy.get('#loginpassword').should('be.visible').type(password);
    cy.contains('.btn', 'Log in').should('be.visible').click();
    cy.get('#nameofuser').should('contain', `Welcome ${username}`);
  });
  
  it('should add samsung galaxy s6 to the cart', () => {
    cy.contains('.hrefch', 'Samsung galaxy s6').click();

    cy.contains('.btn', 'Add to cart').should('be.visible').click();
  });

});
