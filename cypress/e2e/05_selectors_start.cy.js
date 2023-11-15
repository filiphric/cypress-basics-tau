it('my first test', () => {
  cy.visit('/')
  cy.contains('.board', 'new board')
  cy.get('.board')
  cy.get('#board-1')
  cy.get('[data-cy=board-item]')
});