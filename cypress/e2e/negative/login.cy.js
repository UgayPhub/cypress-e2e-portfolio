describe("Login - Invalid User", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });

  it("should show error message for invalid credentials", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.invalidUser.username, user.invalidUser.password);
    });

    cy.contains("Invalid credentials").should("be.visible");
  });
});
