/// <reference types="cypress" />

it('chaining and retrying',  () => {

  cy.visit('/board/1')

  cy.contains('[data-cy=card]', 'Jun 26 2023')
  
});