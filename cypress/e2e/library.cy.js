import users from "../fixtures/users-fixture.json";
import books from "../fixtures/books-fixture.json";

const user = users.user[0];
const book = books.book;

describe("Library", () => {
  describe("1. Accueil", () => {
    beforeEach(() => {
      cy.visit("https://library.mithridatem.fr/");
    });

    it("a le bon titre de page", () => {
      cy.title().should("eq", "Accueil");
    });

    it("affiche le header avec le nom du site", () => {
      cy.get("nav strong").should("have.text", "Library");
    });

    it("affiche le titre principal et la description", () => {
      cy.get("h1").should("have.text", "Bienvenue sur le site Library");
      cy.contains("Gestion simple de livres, utilisateurs et emprunts.");
    });

    it("affiche 3 cartes de compteurs", () => {
      cy.get("main article").should("have.length", 3);
    });

    it("affiche le footer", () => {
      cy.get("footer").should("contain", "Library CI/CD");
    });

    it("affiche 3 liens dans la navbar", () => {
      cy.get("nav a").should("have.length", 3);
    });
  });

  describe("2. Inscription", () => {
    beforeEach(() => {
      cy.visit("https://library.mithridatem.fr/register");
    });

    it("inscrit un utilisateur", () => {
      cy.inscription(user);
      cy.contains(/Le compte a ete ajoute en BDD|Le compte existe deja en BDD/);
    });

    it("affiche les erreurs si les champs sont vides", () => {
      cy.get("button[type=submit]").click();
      cy.contains("Le prenom est obligatoire");
      cy.contains("Le nom est obligatoire");
      cy.contains("L'email est obligatoire");
      cy.contains("Le mot de passe est obligatoire");
      cy.contains("La confirmation est obligatoire");
    });

    it("affiche une erreur si l'email est invalide", () => {
      cy.get("#email").invoke("attr", "type", "text");
      cy.get("#firstname").type(user.prenom);
      cy.get("#lastname").type(user.nom);
      cy.get("#email").type("pasunemail");
      cy.get("#password").type(user.password);
      cy.get("#confirm-password").type(user.password);
      cy.get("button[type=submit]").click();
      cy.contains("L'email est invalide");
    });

    it("affiche une erreur si la confirmation est différente", () => {
      cy.get("#firstname").type(user.prenom);
      cy.get("#lastname").type(user.nom);
      cy.get("#email").type("confirmation@test.fr");
      cy.get("#password").type(user.password);
      cy.get("#confirm-password").type("autre");
      cy.get("button[type=submit]").click();
      cy.contains("Les mots de passe ne sont pas identiques");
    });
  });

  describe("3. Connexion", () => {
    it("se connecte et arrive sur le profil", () => {
      cy.connexion(user);
      cy.location("pathname").should("eq", "/profil");
      cy.contains(`Profil : ${user.prenom} ${user.nom}`);
    });

    it("refuse un mauvais mot de passe", () => {
      cy.connexion({ ...user, password: "mauvais" });
      cy.contains("Les informations de connexion sont invalides");
    });
  });

  describe("4. Livres (connecté)", () => {
    beforeEach(() => {
      cy.connexion(user);
    });

    it("affiche la liste des livres", () => {
      cy.contains("summary", "Livres").click();
      cy.contains("a", "Liste des livres").click();
      cy.location("pathname").should("eq", "/book/all");
      cy.get("h1").should("have.text", "Liste des livres");
    });

    it("ajoute un livre", () => {
      cy.ajouterLivre(book);
      cy.contains("Le livre a ete ajoute en BDD");
      cy.visit("https://library.mithridatem.fr/book/all");
      cy.contains("article", book.titre);
    });

    it("ajoute plusieurs livres", () => {
      books.livres.forEach((livre) => {
        cy.ajouterLivre(livre);
        cy.contains("Le livre a ete ajoute en BDD");
      });
      cy.visit("https://library.mithridatem.fr/book/all");
      books.livres.forEach((livre) => {
        cy.contains("article", livre.titre).should("contain", livre.auteur);
      });
    });
  });
});
