// FAQs page

class FAQsPage {

    //visit the page
    visit() {
        cy.visit("https://www.fertilize.ai/faqs")
    }

    // Getters
    getHeroSection() {
        cy.get(".section-3").should("be.visible")
    }

    getHeroSectionText() {
        cy.get(".text-block").should("be.visible")
        .should("have.css", "color", "rgb(0, 0, 0)")
        .should("have.text", "Frequently Asked Questions")
        cy.get(".text-block-2").should("be.visible")
        .should("have.css", "color", "rgba(0, 0, 0, 0.74)")
        .should("have.text", "At Fertilizer Ai, our mission is to harness the power of AI and advanced data analytics to drive innovation in agriculture, enabling farmers to maximize crop efficiency, minimize environmental impact, and thrive in a rapidly changing world. We empower framers worldwide with data-driven insights and sustainable agronomic solutions. And it’s easy as opening up a chat in whatsapp.")
    }

    getHeroSectionImage() {
        cy.get(".w-layout-cell.cell-4").should("be.visible")
    }

    // FAQs section

    getFAQsSection() {
        cy.get(".section-8").should("be.visible")
    }

    getFAQsSectionHeadingText() {
        cy.get(".header-center-box._75 h2").should("be.visible")
        .should("have.css", "color", "rgb(51, 51, 51)")
        .should("have.text", "FAQ's")
    }

    getFAQsQuestionsContent() {
        cy.get(".accordion-item").each(($faqItem) => {
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
    }
}

export default new FAQsPage();
