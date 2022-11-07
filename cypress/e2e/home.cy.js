/// <reference types="Cypress" />


describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://127.0.0.1:3000')
    cy.contains(/login/i).click();
    cy.get("#login-close-test-id").click();
    // cy.contains()
    cy.get('input')
  
  })
})