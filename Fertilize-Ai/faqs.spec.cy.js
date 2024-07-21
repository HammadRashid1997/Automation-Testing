describe("FAQs Page", () => {
  beforeEach(() => {
    cy.visit("https://www.fertilize.ai/faqs");
  });

  // Header is tested in the home page

  // Hero section
  it("The hero section is visible", () => {
    cy.get(".w-layout-layout.quick-stack.wf-layout-layout").should(
      "be.visible"
    );
  });

  it("The image in the hero section is visible", () => {
    cy.get(".w-layout-cell.cell-4").should("be.visible");
  });

  // Hero section content
  context("Hero section Content", () => {
    it("The content in the hero section is visible", () => {
      cy.get(".w-layout-cell.cell").should("be.visible");
    });

    it("The heading text is visible", () => {
      cy.get(".text-block").should("be.visible");
    });

    it("The heading text is correct", () => {
      cy.get(".text-block")
        .should("be.visible")
        .should("have.text", "Frequently Asked Questions");
    });

    it("The heading text should have the correct color", () => {
      cy.get(".text-block")
        .should("be.visible")
        .should("have.css", "color", "rgb(0, 0, 0)");
    });

    // Body Text
    it("The body text is visible", () => {
      cy.get(".text-block-2").should("be.visible");
    });

    it("The body text is visible", () => {
      cy.get(".text-block-2").should("be.visible");
    });

    it("The body text is correct", () => {
      cy.get(".text-block-2")
        .should("be.visible")
        .should(
          "have.text",
          "At Fertilizer Ai, our mission is to harness the power of AI and advanced data analytics to drive innovation in agriculture, enabling farmers to maximize crop efficiency, minimize environmental impact, and thrive in a rapidly changing world. We empower framers worldwide with data-driven insights and sustainable agronomic solutions. And it’s easy as opening up a chat in whatsapp."
        );
    });

    it("The body text should have the correct color", () => {
      cy.get(".text-block-2")
        .should("be.visible")
        .should("have.css", "color", "rgba(0, 0, 0, 0.74)");
    });
  });

  // Faqs
  context("FAQs", () => {
    it("The section is visible", () => {
      cy.get(".section-8").should("be.visible");
    });

    context("FAQs Heading Section", () => {
      it("The heading text section is visible", () => {
        cy.get(".heading-2").should("be.visible");
      });

      it("The heading text is visible", () => {
        cy.get(".heading-2").should("be.visible");
      });

      it("The heading text has the correct text", () => {
        cy.get(".heading-2")
          .should("be.visible")
          .should("have.css", "color", "rgb(51, 51, 51)");
      });
    });

    context("FAQs content", () => {
      it("Tests all FAQs", () => {
        // Wait for FAQ containers to be visible
        cy.wait(2000); // Adjust the timeout as necessary

        // Get all FAQ items
        cy.get(".accordion-item").each(($faqItem, index) => {
          // Assert FAQ container
          cy.wrap($faqItem).should("be.visible");

          // Get FAQ question text
          cy.wrap($faqItem).find(".accordion-heading").should("be.visible");

          // Click on FAQ drop down clickable button
          cy.wrap($faqItem)
            .find(".accordion-item-trigger")
            .should("be.visible")
            .click();

          // Get FAQ answer text
          cy.wrap($faqItem).find(".p-light70").should("be.visible");

          // Get FAQ text color
          cy.wrap($faqItem)
            .find(".accordion-heading")
            .should("have.css", "color", "rgb(122, 166, 108)"); // Adjust color value as per your design
        });
      });
    });
  });
});
