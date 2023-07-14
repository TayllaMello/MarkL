
describe('POST /users', () => {
  it('Register a new user', () => {

    const user = {
      name: 'Dani',
      email: 'dani@yahoo.com',
      password: 'teste123'
    }

    cy.task('deleteUser', user.email)

    cy.request({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200)
    })

  });
});
