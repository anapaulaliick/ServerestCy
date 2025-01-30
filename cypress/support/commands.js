Cypress.Commands.add('registerAdmin', (nome, email, senha) => {
    cy.visit('/cadastrarusuarios');
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(senha);
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(senha);
    cy.get('[data-testid="entrar"]').click();
});

Cypress.Commands.add('registerUser', (nome, email, password, administrador = 'true') => {
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false,
        body: { nome, email, password, administrador }
    });
});

Cypress.Commands.add('loginApi', (email, password) => {
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        failOnStatusCode: false,
        body: { email, password }
    });
});

Cypress.Commands.add('getUsers', () => {
    return cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteUser', (userId) => {
    return cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${userId}`,
        failOnStatusCode: false
    });
});