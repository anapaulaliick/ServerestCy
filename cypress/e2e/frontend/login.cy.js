describe('Login no Serverest', () => {
    it('Deve logar com credenciais válidas', () => {
        cy.getUsers().then((response) => {
            expect(response.status).to.eq(200);
            const userEmail = response.body.usuarios[0].email;
            const userSenha = response.body.usuarios[0].password;

            cy.visit('/login');
            cy.login(userEmail, userSenha);
            cy.get('.lead').then(element => {
                expect(element.text()).to.eq('Este é seu sistema para administrar seu ecommerce.')
            })
        });
    });
});