const customTimeout = 20000;
const actionTimeout = 1000;
const pageLoadTimeout = 1000;

const username = Cypress.env("username");
const password = Cypress.env("password");

describe("Webblansering", () => {
  before(() => {
    // Cypress.Cookies.debug(true);
    cy.visit("https://www.systembolaget.se/");
    // cy.visit("https://www.systembolaget.se/nytt/webblanseringar/bokning/");
    // cy.visit(
    //   "https://auth.systembolaget.se/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DSYB%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520api1%2520offline_access%26redirect_uri%3Dhttps%253A%252F%252Fwww.systembolaget.se%252Fauth%252F%253FredirectTo%253D%252F"
    // );
  });

  beforeEach(() => {
    // cy.setCookie("isAgeVerified", "1");
    // cy.setCookie(
    //   "systembolaget.age",
    //   "{%22state%22:{%22verified%22:true}%2C%22version%22:0}"
    // );
    // cy.setCookie(
    //   "cookieConsent",
    //   "[%22useful%22%2C%22statistical%22%2C%22profiling%22]"
    // );
    // cy.setCookie(
    //   "systembolaget.consent",
    //   "{%22state%22:{%22consentTypes%22:[%22mandatory%22]}%2C%22version%22:0}"
    // );
    // cy.setCookie(
    //   "systembolaget.basket",
    //   "{%22state%22:{%22basket%22:null%2C%22addedBasketItem%22:{}%2C%22addedBasketItemsLength%22:null%2C%22errorOrderLine%22:null%2C%22confirmedNudgeItems%22:[]%2C%22isLargeOrder%22:false%2C%22goToCheckoutError%22:null%2C%22checkoutPostalCode%22:null}%2C%22version%22:0}"
    // );
    // cy.setCookie(
    //   "systembolaget.tgm",
    //   "{%22state%22:{%22option%22:%22full_assortment%22%2C%22optionOnline%22:null%2C%22agentId%22:null%2C%22storeId%22:null%2C%22postalCode%22:null%2C%22latestAgentIds%22:[]%2C%22latestStoreIds%22:[]%2C%22latestPostalCodes%22:[]}%2C%22version%22:0}"
    // );
    // cy.setCookie(
    //   "systembolaget.in_store_user",
    //   "{%22state%22:{%22lastEmailAddress%22:null%2C%22isDirectLinkUsed%22:false}%2C%22version%22:0}"
    // );
    // cy.setCookie(
    //   "systembolaget.in_store",
    //   "{%22state%22:{%22customer%22:null}%2C%22version%22:0}"
    // );
    // cy.setCookie("isAgeVerified", "1");
    // cy.setCookie("isAgeVerified", "1");
    // cy.setCookie(
    //   "systembolaget.auth",
    //   "{%22state%22:{%22accessToken%22:%22eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk2NjFBM0Y1QjA2QTA3OTI0NEEzQzBGQkJEQjIxODBFQjhCMDNEMDRSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImxtR2o5YkJxQjVKRW84RDd2YklZRHJpd1BRUSJ9.eyJuYmYiOjE2NjYxMjE3MTQsImV4cCI6MTY2NjEyNTMxNCwiaXNzIjoiaHR0cHM6Ly9zYi1hcGktZWNvbW1lcmNlLWlkZW50aXR5LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiYXBpMSIsImNsaWVudF9pZCI6IlNZQiIsInN1YiI6IjdjOGUxNjM4LTYxYmEtNGYxMy04NTM0LWE5YjMwMDI5ZGQyNiIsImF1dGhfdGltZSI6MTY2NjEyMTcxMiwiaWRwIjoibG9jYWwiLCJyb2xlIjoiV2ViIiwibmFtZSI6IkRhdmlkIiwiZmFtaWx5X25hbWUiOiJkZSBNZWlqZXJlIiwiaWQiOiI3YzhlMTYzOC02MWJhLTRmMTMtODUzNC1hOWIzMDAyOWRkMjYiLCJqdGkiOiJDOTFDNDUxQjY5RjM1NTJBMDMzQTE3NzRCQzBGQjk0OCIsInNpZCI6IkYxRDg4RjdCNjYzMkNEOUVERDA1QTNEQUQxM0U5QUIzIiwiaWF0IjoxNjY2MTIxNzE0LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiYXBpMSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.BJ2v2pbD-C3hqi7AfoKxYnxv46pKibAPyjYerD4X09ClBW0BhERyl-eRVUdo8UPTny_UAa59F4dL75OiyWSn5eI8M7icijC3jG6DZYcfWHKzmYvRpu1TziM4y20JiMHvK3W6vFSmVxqh3j8LMSceNFPE_3r4le-aRL9Lsy9HIx4ZQDcIPn1Ye7f6wiEfevczirR8wvACQNdNPhdfHwzorOqjqrrmy2mYjxM0zd65Qt6AtLw34w-LdaIOltJ8amGPGhCQ7MiwVAoTbMWD34neEEzmmmoy_0ubuSdznTs7pNXxd35cns89wWyQje2AVIyvEaDvUC2nXIx8o77-uqhVTg%22%2C%22refreshToken%22:%22616542D1EA66077F629DD804566440FAD8D503B7C63B530CA42AD1F7719398CF%22%2C%22expiresAt%22:1666125314917}%2C%22version%22:0}"
    // );
    // cy.clearCookie("__cypress");
    // cy.clearCookie("__cypress.initial");
  });

  // it("should confirm age", () => {
  it("Full beauty", () => {
    const ageConfirm = "ageConfirmPopup";
    cy.get("a.e1wqyey82.css-dt7i4e.ev9wvac0", { timeout: customTimeout })
      // cy.get(":nth-child(2) > .e1wqyey82", { timeout: customTimeout })
      .as(ageConfirm)
      .contains("Jag har fyllt 20 år")
      .should("be.visible")
      // .trigger('mouseover')
      .click({ timeout: actionTimeout })
      .should("not.exist");
    // });

    // it.skip("should accept cookies", () => {
    const cookieConfirm = "cookieConfirmPopup";
    // cy.get("button", { timeout: customTimeout })
    cy.get(".css-1waefeh", { timeout: customTimeout })
      .contains("Slå på och acceptera alla kakor")
      .should("be.visible")
      .as(cookieConfirm)
      .trigger("mouseover")
      .click({ timeout: actionTimeout })
      .should("not.exist");
    // });

    // it.skip("should go to login page", () => {
    cy.get("[href*='/auth/logga-in/']")
      .first()
      .should("be.visible")
      .click({ timeout: actionTimeout });
    cy.get("input#email-input").should("be.visible");
    // });

    // it("waiting", () => {
    //   cy.wait(30000)
    // })

    // it.skip("should make successful login", () => {
    cy.get("input#email-input").type(username, {
      // delay: 50,
      waitForAnimations: true,
      timeout: actionTimeout,
    });
    cy.get("input#Password").type(password, {
      // delay: 50,
      waitForAnimations: true,
      timeout: actionTimeout,
    });
    // cy.wait(1000);
    cy.get(".btn-primary")
      .click({ timeout: actionTimeout })
      .should("not.exist");
    cy.get("button.css-1xiqink.e1l14tuf2")
      .contains("David")
      .should("be.visible");
    // });

    // it("should click to webblanseringar", () => {
    // cy.wait(pageLoadTimeout);
    cy.get("a[href='/nytt/webblanseringar/']", { timeout: pageLoadTimeout })
      .first()
      .click();
    cy.get("h1")
      .contains("Om Systembolagets webblanseringar")
      .should("be.visible");
    // });

    // it("should click to current webblansering", () => {
    // cy.wait(pageLoadTimeout);
    cy.get("a[href='/nytt/webblanseringar/bokning/']", {
      timeout: pageLoadTimeout,
    })
      .first()
      .click();
    cy.get("h1").contains("Aktuella lanseringar").should("be.visible");
    // });

    // describe.skip("product", () => {
    let productUrl = "a[href='/produkt/vin/barolo-9490701/']";
    const parent = ".css-9x8b54.em3y4hw0";
    let numberOfBottles = 1;
    const bottleSelect = "bottleSelect";

    // it("should find product", () => {
    cy.get(productUrl, {
      timeout: customTimeout,
    })
      .parents(parent)
      .should("be.visible");
    // });

    // it("should select number of bottles", () => {
    cy.get(productUrl, {
      timeout: customTimeout,
    })
      .parents(parent)
      // .find("label[type='number']", { timeout: customTimeout })
      // .contains("Antal")
      // .parent()
      // .siblings()
      .find("select")
      .as(bottleSelect)
      .select("1")
      .should("have.value", numberOfBottles);
    // });

    cy.get(productUrl, {
      timeout: customTimeout,
    })
      .parents(parent)
      .find("button")
      .should("be.disabled");
    cy.get(productUrl)
      .parents(parent)
      .find("button", {
        timeout: 10 * 60 * 1000,
      })
      .should("not.be.disabled")
      .click();
  });
});
