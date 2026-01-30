describe("Smoke Test", () => {
  it("should load the login page", () => {
    cy.visit("/web/index.php/auth/login");
    cy.contains("Login").should("be.visible");
  });
});
