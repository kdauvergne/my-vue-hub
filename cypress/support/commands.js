Cypress.Commands.add("inscription", (user) => {
  cy.visit("https://library.mithridatem.fr/register");
  cy.get("#firstname").type(user.prenom);
  cy.get("#lastname").type(user.nom);
  cy.get("#email").type(user.mail);
  cy.get("#password").type(user.password);
  cy.get("#confirm-password").type(user.password);
  cy.get("button[type=submit]").click();
});

Cypress.Commands.add("connexion", (user) => {
  cy.visit("https://library.mithridatem.fr/login");
  cy.get("#email").type(user.mail);
  cy.get("#password").type(user.password);
  cy.get("button[type=submit]").click();
});

Cypress.Commands.add("ajouterLivre", (book) => {
  cy.visit("https://library.mithridatem.fr/book/add");
  cy.get("#title").type(book.titre);
  cy.get("#author").type(book.auteur);
  cy.get("#description").type(book.description);
  cy.get("#publish_at").type(book.datePublication);
  cy.get("button[type=submit]").click();
});
