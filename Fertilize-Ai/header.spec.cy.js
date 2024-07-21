describe("Fertilize AI", () => {
  beforeEach(() => {
    cy.visit("https://www.fertilize.ai/");
  });

  it("The browser opens up", () => {});

  it("The home page is visible", () => {});

  // Navbar
  context("Navbar", () => {
    it("The navbar is visible", () => {
      cy.get(".navbar-logo-left").should("be.visible");
    });

    it("The logo in the navbar is visible", () => {
      cy.xpath("/html/body/div[1]/div/section/a/img").should("be.visible");
    });

    it("The logo is clickable", () => {
      cy.xpath("/html/body/div[1]/div/section/a/img")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/");
    });

    it("The FAQs heading is visible", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[1]").should(
        "be.visible"
      );
    });

    it("The text FAQs is correct", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[1]")
        .should("be.visible")
        .should("have.text", "FAQ's");
    });

    it("The text FAQs has the correct color", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[1]")
        .should("be.visible")
        .should("have.css", "color", "rgb(51, 51, 51)");
    });

    it("The text FAQs is clickable", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[1]")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/faqs/");
    });

    it("The Signup button is visible", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a").should(
        "be.visible"
      );
    });

    it("The Signup button has the correct text", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a")
        .should("be.visible")
        .should("have.text", "Sign up");
    });

    it("The Signup button has the corect text color", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a")
        .should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)");
    });

    it("The Signup button has the correct background color", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a")
        .should("be.visible")
        .should("have.css", "background-color", "rgb(122, 166, 108)");
    });

    it("The SignUp button is clickable", () => {
      cy.xpath("/html/body/div[1]/div/section/nav/ul/li[2]/a")
        .should("be.visible")
        .click();
      cy.visit("https://www.fertilize.ai/sign-up/");
    });
  });
});
