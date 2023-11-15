it('my first test', () => {
  cy.visit('/')
  /* ==== Generated with Cypress Studio ==== */
  cy.get('h2').click();
  cy.get('[data-cy="add-list-input"]').clear('n');
  cy.get ('[data-cy-"add-list-input"]').type('new list{enter}');
  /* ==== End Cypress Studio ==== */
})