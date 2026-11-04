describe("Exercice Dynamic Styling", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/exercices/exercice-dynamic-styling");
  });

  it("Affiche le titre", () => {
    cy.get("h2").should("contain.text", "Exercice Dynamic Styling (class)");
  });

  it("affiche le texte des 4 cartes", () => {
    cy.contains("Carte 1 via style").should("be.visible");
    cy.contains("Carte 2 via style").should("be.visible");
    cy.contains("Carte 3 via class").should("be.visible");
    cy.contains("Carte 4 via class").should("be.visible");
  });

  it("Carte 1 et 2 changent de style au clic", () => {
    cy.contains("button", "Carte 1")
      .click()
      .should("have.attr", "style")
      .and("contain", "pink");
    cy.contains("button", "Carte 2")
      .click()
      .should("have.attr", "style")
      .and("contain", "lightcoral");
  });

  it("Carte 3 et 4 changent de classe au clic", () => {
    cy.contains("button", "Carte 3").click().should("have.class", "class1");
    cy.contains("button", "Carte 4")
      .click()
      .should("have.class", "bg-green-200");
  });

  it("les cartes sont des boutons", () => {
    cy.get(".grid button")
      .should("have.length", 4)
      .each(($btn) => {
        cy.wrap($btn).should("have.attr", "type", "button");
      });
  });
});
