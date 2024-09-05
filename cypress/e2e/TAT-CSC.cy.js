describe('TAT Customer Service Center', () => {

  beforeEach(()=>{
    cy.visit('../../src/index.html');
  })

  it('checks the application title', () => {
      cy.title()
          .should('eq','TAT Customer Service Center');
  })

  it( 'fills in the required fields and submits the form', () => {

    cy.get('#firstName')
        .should('be.visible')
        .type('Hans');
    cy.get('#lastName')
        .should('be.visible')
        .type('Wurst');
    cy.get('#email')
        .should('be.visible')
        .type('hans@wurst.de');
    cy.get('#open-text-area')
        .should('be.visible')
        .type('Tolles Tool hier, aber was bringt das?')

    cy.get('button[type="submit"]')
        .click();

    cy.get('.success')
        .should('be.visible');

  })

  it('selects a product (YouTube) by its content', () => {
    cy.get('#product')
        .select('YouTube');

    cy.get('#product')
        .should('have.value', 'youtube')
  })

  it('checks the type of service "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
        .check();

    cy.get('input[type="radio"][value="feedback"]')
        .should('be.checked');
  })

  it('selects a file from the fixtures folder', () => {
      cy.get('#file-upload').selectFile('cypress/fixtures/example.json');
      cy.get('#file-upload').should(input =>{
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('verifies that the privacy policy page opens in another tab without the need for a click', () => {
    //Alternative 1
    cy.get('#privacy > a')
        .should('have.attr', 'href', 'privacy.html')
        .and('have.attr', 'target', '_blank')
  })

})