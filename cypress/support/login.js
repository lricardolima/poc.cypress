/// <reference types="cypress" />

Cypress.Commands.add('preecheOsCamposDaTelaDeLogin', function (nome, password) {
    cy.get('#nome').type(nome)
    cy.get('#pass').type(password)
    
});

Cypress.Commands.add('clicarNobotaoDeLogin', function () {
    cy.contains('button', 'Login').click()
});