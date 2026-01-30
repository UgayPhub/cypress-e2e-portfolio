describe("Login - Valid User", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });

  it("should login successfully with valid credentials", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.validUser.username, user.validUser.password);
    });

    cy.url().should("include", "/dashboard");
  });
});
