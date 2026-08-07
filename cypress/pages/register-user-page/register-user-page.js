Cypress.Commands.add('typeFirstName', (firstname) => { 
    cy.get('#customer\\.firstName').type(firstname);
});

Cypress.Commands.add('typeLastName', (lastname) => { 
    cy.get('#customer\\.lastName').type(lastname);
});

Cypress.Commands.add('typeStreet', (street) => { 
    cy.get('#customer\\.address\\.street').type(street);
})

Cypress.Commands.add('typeCity', (city) => { 
    cy.get('#customer\\.address\\.city').type(city);
})

Cypress.Commands.add('typeState', (state) => { 
    cy.get('#customer\\.address\\.state').type(state);
})

Cypress.Commands.add('typeZipcode', (zipcode) => { 
    cy.get('#customer\\.address\\.zipCode').type(zipcode);
})

Cypress.Commands.add('typePhoneNumber', (phoneNumber) => { 
    cy.get('#customer\\.phoneNumber').type(phoneNumber);
})

Cypress.Commands.add('typeSsn', (ssn) => { 
    cy.get('#customer\\.ssn').type(ssn);
})

Cypress.Commands.add('typeUsername', (username) => {     
cy.get('#customer\\.username').type(username)
})

Cypress.Commands.add('typePassword', (pwd) => { 
    cy.get('#customer\\.password').type(pwd);
})

Cypress.Commands.add('typeRepeatedPassword', (repeatedPwd) => { 
    cy.get('#repeatedPassword').type(repeatedPwd);
})

Cypress.Commands.add('clickRegister', () => { 
     cy.get('input[value="Register"]').click();
})

Cypress.Commands.add('assertMessageUsernameisRequired', () => { 
     cy.get('#customer\\.username\\.errors').contains('Username is required.').should('be.visible');
})

Cypress.Commands.add('assertMessagePasswordDidNotMatch', () => { 
     cy.get('#repeatedPassword\\.errors').contains('Passwords did not match.').should('be.visible');
})

Cypress.Commands.add('assertMessageAccounteCreated', () => { 
     cy.get('p').contains('Your account was created successfully. You are now logged in.').should('be.visible');
})

Cypress.Commands.add('assertIsUrlRegister', () => { 
     cy.url().should('eq','https://parabank.parasoft.com/parabank/register.htm') 
})
