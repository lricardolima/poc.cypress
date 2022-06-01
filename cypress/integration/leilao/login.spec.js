// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

describe("Testando campos tela de login", function () {
    beforeEach(() => {
        cy.visit('http://localhost:8080/login')
    });
    
    it('Deveria efetuar login com dados válidos', () => {
        cy.preecheOsCamposDaTelaDeLogin('fulano', 'pass')
        cy.clicarNobotaoDeLogin()
        cy.contains('Leilões cadastrados').should('be.visible')
        cy.get('#usuario-logado').should('have.text', 'fulano')
    });

    it('Exibe mensagem de erro em campos vazios', () => {
        cy.clicarNobotaoDeLogin()
        cy.get('#mensagem-alert').should('be.visible')
    });

    it('Logar no sistema com dados inválidos', () => {
        cy.preecheOsCamposDaTelaDeLogin('fulano1', 'pass')
        cy.clicarNobotaoDeLogin()
        cy.get('#mensagem-alert').should('be.visible')
    });
    
    it('Deveria ser direcionado a tela de listagem de leilôes clicando na logo leilão', () => {
        cy.get('#leilao').click()
        cy.contains('Leilões cadastrados').should('be.visible')
    });

    it('Não deveria acessar página restrita sem estar logado', () => {
        cy.visit('http://localhost:8080/leiloes/1')
        cy.url().should('be.equal', 'http://localhost:8080/login')
    });

    it('Deveria deslogar da página de leilões', () => {
        cy.preecheOsCamposDaTelaDeLogin('fulano', 'pass')
        cy.clicarNobotaoDeLogin()
        cy.contains('#sair', 'Sair').click()
        cy.url().should('be.equal', 'http://localhost:8080/leiloes')
        cy.contains('Leilões cadastrados').should('be.visible')
    });

    
})