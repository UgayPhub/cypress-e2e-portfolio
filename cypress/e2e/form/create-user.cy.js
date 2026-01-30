describe("Create User Form", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
  });

  it("should login and show secure area", () => {
    cy.contains("Secure Area").should("be.visible");
  });
});
