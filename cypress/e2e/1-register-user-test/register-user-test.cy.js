describe('Validar registro de usuário', () => {
  it('Validar mensagem de usuáro registrado com sucesso', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.get('#customer\\.firstName').type('Silva')
    cy.get('#customer\\.lastName').type('Silva')
    cy.get('#customer\\.address\\.street').type('Rua A')
    cy.get('#customer\\.address\\.city').type('Fortaleza')
    cy.get('#customer\\.address\\.state').type('Ceará')
    cy.get('#customer\\.address\\.zipCode').type('60000-000')
    cy.get('#customer\\.phoneNumber').type('21212121')
    cy.get('#customer\\.ssn').type('21212121')

    cy.get('#customer\\.username').type('amaro')
    cy.get('#customer\\.password').type('234445')
    cy.get('#repeatedPassword').type('234445')

  })
})