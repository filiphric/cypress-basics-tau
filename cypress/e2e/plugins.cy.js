beforeEach(() => {

  cy.eyesOpen({
    appName: 'Trello app'
  })
  
});

it('plugins', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('be.visible')

  cy.eyesCheckWindow()
  
});

afterEach(() => {
  cy.eyesClose()
});