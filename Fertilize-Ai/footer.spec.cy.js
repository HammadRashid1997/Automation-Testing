describe("Fertilize AI", () => {
  beforeEach(() => {
    cy.visit("https://www.fertilize.ai/");
  });

  it("The browser opens up", () => {});

  it("The home page is visible", () => {});

  // Footer
  context("Footer", () => {
    it("The footer is visible", () => {
      cy.xpath("/html/body/section[2]").should("be.visible");
    });

    it("The copyright text is visible in the footer", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[1]/div").should(
        "be.visible"
      );
    });

    it("The copy right text is correct", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[1]/div")
        .should("be.visible")
        .should("have.text", "© 2024 Husky Ag Inc. All rights reserved.");
    });

    it("The color of the span text is correct", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[1]/div/span[1]").should(
        "have.css",
        "color",
        "rgb(122, 166, 108)"
      );
    });

    it("The Privacy Policy is visible", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[1]").should(
        "be.visible"
      );
    });

    it("The text Privacy Policy is correct", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[1]")
        .should("be.visible")
        .should("have.text", "Privacy Policy");
    });

    it("The text Privacy Policy has the correct color", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[1]")
        .should("be.visible")
        .should("have.css", "color", "rgba(0, 0, 0, 0.44)");
    });

    it("The Privacy Policy is clickable and takes me to the Privacy Policy Page", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[1]")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/privacy-policy");
    });

    it("The Terms of Service is visible", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]").should(
        "be.visible"
      );
    });

    it("The Terms of Service has the correct text", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
        .should("be.visible")
        .should("have.text", "Terms of Services");
    });

    it("The Terms of Services has the correct text color", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
        .should("be.visible")
        .should("have.css", "color", "rgba(0, 0, 0, 0.44)");
    });

    it("The Terms of Services is clickable and takes me to the Terms of Services pop up", () => {
      cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
        .should("be.visible")
        .click();
      cy.xpath("/html/body/section[2]/div[1]/div").should("be.visible");
    });
  });
});
