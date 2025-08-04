describe('User login Test', () => {
  
  it('Confirm user cannot login using invalid data', () => {
    cy.visit('https://dmsfrontenduat.z6.web.core.windows.net/')
    cy.get('#username').type('070000000000')
    cy.get('#password').type('password')
    cy.get('.btn').click()
    cy.url().should('eq', 'https://dmsfrontenduat.z6.web.core.windows.net/')
  })
  
  it('Confirm user can login using valid data', () => {
    cy.visit('https://dmsfrontenduat.z6.web.core.windows.net/')
    cy.get('#username').type('07035528282')
    cy.get('#password').type('07035528282')
    cy.get('.btn').click()
    cy.url().should('eq', 'https://dmsfrontenduat.z6.web.core.windows.net/buy/brand')
  })


})