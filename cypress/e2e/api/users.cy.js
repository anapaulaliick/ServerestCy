describe('API de Usuários', () => {
    it('Deve listar usuários cadastrados', () => {
        cy.getUsers().then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body);
            expect(response.body).to.have.property('usuarios');
        });
    });
    it('Deve buscar um usuário e deletá-lo', () => {
        cy.getUsers().then((response) => {
          expect(response.status).to.eq(200);
          const userId = response.body.usuarios[0]._id;
          cy.deleteUser(userId).then((deleteResponse) => {
            expect(deleteResponse.status).to.eq(200);
            expect(deleteResponse.body).to.have.property('message', 'Registro excluído com sucesso');
          });
        });
      });
});