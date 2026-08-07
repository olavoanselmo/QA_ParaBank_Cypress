import { faker } from '@faker-js/faker';
import '../../pages/register-user-page/register-user-page'

describe('Validar Registro de Usuário', () => {


  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  })

  it('Validar Mensagem de Usuário Registrado com Sucesso', () => {    
    cy.typeFirstName('Francisco');
    cy.typeLastName('Silva');
    cy.typeStreet('Rua A');
    cy.typeCity('Fortaleza')
    cy.typeState('Ceará')
    cy.typeZipcode('60000-000')
    cy.typePhoneNumber('21212121')    
    cy.typeSsn('2006004400030')
    
    cy.typeUsername(faker.internet.userName());
    cy.typePassword('teste123')
    cy.typeRepeatedPassword('teste123')
    
    cy.clickRegister();

    cy.assertMessageAccounteCreated();
    cy.assertIsUrlRegister();    

  })   

  it('Validar Mensagem de Username Obrigatório', () => {
    cy.typeFirstName('Francisco');
    cy.typeLastName('Silva');
    cy.typeStreet('Rua A');
    cy.typeCity('Fortaleza')
    cy.typeState('Ceará')
    cy.typeZipcode('60000-000')
    cy.typePhoneNumber('21212121')    
    cy.typeSsn('2006004400030')
  
    cy.typePassword('teste123')
    cy.typeRepeatedPassword('teste123')
    
    cy.clickRegister();

    cy.assertMessageUsernameisRequired();  

  })   

  it('Validar Mensagem de Senhas Diferentes', () => {
    cy.typeFirstName('Francisco');
    cy.typeLastName('Silva');
    cy.typeStreet('Rua A');
    cy.typeCity('Fortaleza')
    cy.typeState('Ceará')
    cy.typeZipcode('60000-000')
    cy.typePhoneNumber('21212121')    
    cy.typeSsn('2006004400030')
  
    cy.typePassword('teste1234')
    cy.typeRepeatedPassword('teste123')
    
    cy.clickRegister();

    cy.assertMessagePasswordDidNotMatch();
  })  

    
  
})
