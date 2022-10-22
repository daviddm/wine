import faker from "faker";

const customTimeout = 10000;
const numberOfBottles = 2;
const selectedShop = "pk-huset";

describe("Dom Pérignon", () => {
  before(() => {
    // cy.intercept("**systembolaget.se**/**").end();

    cy.visit("https://www.systembolaget.se/produkt/vin/dom-perignon-742801/");
  });

  it("should confirm age", () => {
    const ageConfirm = "ageConfirmPopup";
    cy.get("a", { timeout: customTimeout })
      .as(ageConfirm)
      .contains("Jag har fyllt 20 år")
      .should("be.visible")
      .click();
    cy.get(ageConfirm).should("not.exist");
  });

  it("should accept cookies", () => {
    const cookieConfirm = "cookieConfirmPopup";
    cy.get("button", { timeout: customTimeout })
      .contains("Slå på och acceptera alla kakor")
      .should("be.visible")
      .as(cookieConfirm)
      .click()
      .should("not.exist");
  });

  it("should select pickup from selected store", () => {
    const shopSelector = "shopSelectorPopup";
    const inputField = "inputField";
    cy.get("button", { timeout: customTimeout })
      .contains("Hämta i butik")
      .click();
    cy.get("#modalId", { timeout: customTimeout })
      .should("be.visible")
      .as(shopSelector);
    // cy.get("input[placeholder='Sök butik']")
    cy.get(".react-autosuggest__input", { timeout: customTimeout })
      .should("be.visible")
      .as(inputField)
      .type(selectedShop)
      .should("have.value", selectedShop);
    cy.get("ul.react-autosuggest__suggestions-list", { timeout: customTimeout })
      .should("be.visible")
      .get("li")
      .first()
      .find("p")
      .contains("Välj")
      .should("be.visible")
      .click();
    cy.get(shopSelector).should("not.exist");
  });

  it(`should select ${numberOfBottles} number of bottles`, () => {
    const bottleSelect = "bottleSelect";
    cy.get("label[type='number']", { timeout: customTimeout })
      .contains("Antal")
      .parent()
      .siblings()
      .find("select")
      .as(bottleSelect)
      .select("2")
      .should("have.value", numberOfBottles);
  });

  it.skip("should go to cart", () => {
    cy.get("button").contains("Lägg i varukorg").should("be.visible").click();
    cy.get("a[href='/varukorg/']").should("be.visible").click();
  });

  it("should login", () => {
    cy.get("[href*='/auth/logga-in/']").first().should("be.visible").click();
  });
});
