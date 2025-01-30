describe('Registro no Serverest', () => {
    const email = `${Date.now()}@teste.com`
    it('Deve criar um registro de administrador valido', () => {
        cy.registerAdmin('Ana Paula Liick Admin', email, 'senha123');
        cy.get('.alert-link').then(element => {
            expect(element.text()).to.eq('Cadastro realizado com sucesso')
        })
        cy.get('.lead').then(element => {
            expect(element.text()).to.eq('Este é seu sistema para administrar seu ecommerce.')
        })
    });

    it('Deve tentar criar um registro com um usuario ja cadastrado', () => {
        cy.registerAdmin('Ana Paula Liick Admin', email, 'senha123');
        cy.get('.alert > :nth-child(2)').then(element => {
            expect(element.text()).to.eq('Este email já está sendo usado')
        })
    });
    it('Deve tentar criar um registro dcom um usuario ja cadastrado e Acessar com usuario ja cadastrado', () => {
        cy.registerAdmin('Ana Paula Liick Admin', email, 'senha123');
        cy.get('.alert > :nth-child(2)').then(element => {
            expect(element.text()).to.eq('Este email já está sendo usado')
        })
        cy.get('[data-testid="entrar"]').click()
        cy.login(email, 'senha123');
        cy.get('.lead').then(element => {
            expect(element.text()).to.eq('Este é seu sistema para administrar seu ecommerce.')
        })
    });
});