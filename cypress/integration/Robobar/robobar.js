import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

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

function addCola() {
    colaButton().click();
}

function addColas(n) {
    for (let i=0; i<n; ++i) {
        addCola();
    }
}

function addBeer() {
    beerButton().click();
}

Given('user opens robobar website', () => {
    cy.visit('http://localhost:3000/');
})

When("user adds a cola", ()=> {
    addCola();
})

Then("total should be €{float}", (total)=> {
    totalText()
        .should("contain", "€" + total.toFixed(2))
})

When("user adds a beer", ()=> {
    addBeer();
})

When("user adds {int} cola", (n)=> {
    addColas(n);
})