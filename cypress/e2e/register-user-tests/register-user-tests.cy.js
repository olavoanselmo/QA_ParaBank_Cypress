describe('Validar Registro de Usuário', () => {

  /*
  Esse arquivo precisa alterar manualmente 
  o nome de usuário para testar mais de uma vez.
  Para solucionar criamos um arquivo com a utilização do faker
  */


  it('CT001-Validar Mensagem de Usuário Registrado com Sucesso', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    //As barras invertidas dizem ao cypress que não é uma classe.
    cy.get('#customer\\.firstName').type('francisco'); // Linhas Repetidas - 27 - 47 e assim sucessivamente
    cy.get('#customer\\.lastName').type('Silva');
    cy.get('#customer\\.address\\.street').type('Rua A');
    cy.get('#customer\\.address\\.city').type('Fortaleza')
    cy.get('#customer\\.address\\.state').type('Ceará')
    cy.get('#customer\\.address\\.zipCode').type('60000-000')
    cy.get('#customer\\.phoneNumber').type('21212121')
    cy.get('#customer\\.ssn').type('2006004400030')

    /*A página só aceita o username único, 
    tem que ser trocado a cada teste.
    */
    cy.get('#customer\\.username').type('Franciscotester4') // Username deverá ser Dinâmico
    cy.get('#customer\\.password').type('teste123')
    cy.get('#repeatedPassword').type('teste123')


    cy.get('input[value="Register"]').click();
    //Como a URL não muda não podemos validar apenas pela URL.

    cy.get('p').contains('Your account was created successfully. You are now logged in.').should('be.visible');
    cy.url().should('eq', 'https://parabank.parasoft.com/parabank/register.htm')

  })

  it('CT002-Validar Mensagem de Username Obrigatório', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    //As barras invertidas dizem ao cypress que não é uma classe.
    cy.get('#customer\\.firstName').type('Francisco');
    cy.get('#customer\\.lastName').type('Silva');
    cy.get('#customer\\.address\\.street').type('Rua A');
    cy.get('#customer\\.address\\.city').type('Fortaleza')
    cy.get('#customer\\.address\\.state').type('Ceará')
    cy.get('#customer\\.address\\.zipCode').type('60000-000')
    cy.get('#customer\\.phoneNumber').type('21212121')
    cy.get('#customer\\.ssn').type('2006004400030')

    cy.get('#customer\\.password').type('teste123')
    cy.get('#repeatedPassword').type('teste123')

    cy.get('input[value="Register"]').click();

    //Validando através da mensagem exibida.
    cy.get('#customer\\.username\\.errors').contains('Username is required.').should('be.visible');

  })

  it('CT003-Validar Mensagem de Senhas Diferentes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.get('#customer\\.firstName').type('Fraancisco');
    cy.get('#customer\\.lastName').type('Silva');
    cy.get('#customer\\.address\\.street').type('Rua A');
    cy.get('#customer\\.address\\.city').type('Fortaleza')
    cy.get('#customer\\.address\\.state').type('Ceará')
    cy.get('#customer\\.address\\.zipCode').type('60000-000')
    cy.get('#customer\\.phoneNumber').type('21212121')
    cy.get('#customer\\.ssn').type('2006004400030')

    cy.get('#customer\\.username').type('franciscotester6')
    cy.get('#customer\\.password').type('teste123')
    cy.get('#repeatedPassword').type('teste1234')

    cy.get('input[value="Register"]').click();
    //Elemento=<span id="repeatedPassword.errors" class="error">Passwords did not match.</span>
    cy.get('#repeatedPassword\\.errors').contains('Passwords did not match.').should('be.visible');
  })



})
