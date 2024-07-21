describe("Terms of Service Page", () => {
  beforeEach(() => {
    cy.visit("https://www.fertilize.ai/");
  });

  it("Click on the Terms of Services link in the footer", () => {
    cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
      .should("be.visible")
      .click();
  });

  it("The terms of services are visible", () => {
    cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
      .should("be.visible")
      .click();
    cy.xpath("/html/body/section[2]/div[1]/div").should("be.visible");
  });

  it("The terms of services heading is visible", () => {
    cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
      .should("be.visible")
      .click();
    cy.xpath("/html/body/section[2]/div[1]/div").should("be.visible");
    cy.xpath("/html/body/section[2]/div[1]/div/h1").should("be.visible");
  });

  it("The terms of services text is correct", () => {
    cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
      .should("be.visible")
      .click();
    cy.xpath("/html/body/section[2]/div[1]/div").should("be.visible");
    cy.xpath("/html/body/section[2]/div[1]/div/h1")
      .should("be.visible")
      .should("have.text", "Terms of Service");
  });

  it("The color of the terms of services text is green", () => {
    cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
      .should("be.visible")
      .click();
    cy.xpath("/html/body/section[2]/div[1]/div").should("be.visible");
    cy.xpath("/html/body/section[2]/div[1]/div/h1").should(
      "have.css",
      "color",
      "rgb(122, 166, 108)"
    );
  });

  it("The cross button is visible, clickable and when clicked closes the popup", () => {
    cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
      .should("be.visible")
      .click();
    cy.xpath("/html/body/section[2]/div[1]/div").should("be.visible");
    cy.xpath("/html/body/section[2]/div[1]/div/div[1]/img")
      .should("be.visible")
      .click();
    cy.visit("https://www.fertilize.ai/");
  });

  it("The terms of services body text is visible", () => {
    cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
      .should("be.visible")
      .click();
    cy.xpath("/html/body/section[2]/div[1]/div/div[2]/div[1]").should(
      "be.visible"
    );
  });

  it("The terms of services body text is correct", () => {
    cy.xpath("/html/body/section[2]/div[2]/div/div[2]/a[2]")
      .should("be.visible")
      .click();
    cy.xpath("/html/body/section[2]/div[1]/div/div[2]/div[1]")
      .should("be.visible")
      .should(
        "have.text",
        'These Terms of Service ("Terms") govern your access to and use of the services provided by Fertilize AI ("Fertilize AI," "we," "us," or "our"), including our website, mobile application, chatbot, and any related products or services (collectively referred to as the "Services"). By accessing or using the Services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.'
      );
  });
});
