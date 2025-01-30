describe('Registro no Serverest API', () => {
  const email = `${Date.now()}@teste.com`
  const nome = 'Ana Paula Liick Admin'
  const senha = 'senha123'
  it('Deve registrar um usuário admin com sucesso', () => {
    cy.registerUser(nome, email, senha).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
    });
  });

  it('Deve registrar um usuário admin ja cadastrado', () => {
    cy.registerUser(nome, email, senha, 'true').then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', 'Este email já está sendo usado');
    });
  });

  it('Deve registrar um usuário admin ja cadastrado e logar com o mesmo', () => {
    cy.registerUser(nome, email, senha, 'true').then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', 'Este email já está sendo usado');
    });

    cy.loginApi(email, senha).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      expect(response.body).to.have.property('authorization');
    });
  });
});