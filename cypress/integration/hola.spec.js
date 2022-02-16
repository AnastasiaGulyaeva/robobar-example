// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
function colaButton() {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function beerButton() {
    return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function wineButton() {
    return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function totalText() {
    return cy.get(':nth-child(4) > .ng-binding')
}

function orderButton() {
    return cy.get('.btn-success')
}

function submitButton() {
    return cy.get('.col-12 > .btn')
}

function confirmationOrder() {
    cy.get('p')
}

describe('Hello Cypress', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    it('Says hello', () => {
        expect(true).to.equal(true)
    })
    it('Order a cola', () => {
        colaButton()
            .click()
        totalText()
            .should("contain.text", "€1.25")
    })
    it('Order two colas', () => {
        colaButton()
            .click()
            .click()
        totalText()
            .should("contain.text", "€2.50")
    })

    it('Order one beer', () => {
        beerButton()
            .click()
        totalText()
            .should("contain.text", "€2.00")
    })

    it('Order one wine', () => {
        wineButton()
            .click()
        totalText()
            .should("contain.text", "€3.00")
    })

    it('Finish order cola', () => {
        colaButton()
            .click()
        totalText()
            .should("contain.text", "€1.25")
        submitButton()
            .click()
        orderButton()
            .click()
        confirmationOrder()
    })
})