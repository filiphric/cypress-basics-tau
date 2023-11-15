/// <reference types="cypress" />

import { cardsLoadRandomly } from '../../evilCode'

it('chaining and retrying',  () => {

  cardsLoadRandomly(4000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]') // query
    .last() // query
    .should('contain.text', 'shampoo') // assertion
    .click() // actions

  cy.get('[data-cy=card-detail-title]')
    .should('have.value', 'shampoo')  
  
});