// Privacy Policy Page

// Imports 
import { normalize } from '../../support/utils';

class PrivacyPolicyPage {
    
    visit() {
        cy.visit("https://www.fertilize.ai/privacy-policy");
    }

    // Getters

    getHeroSection() {
        cy.get(".section-7.privacy-policy-section").should("be.visible")
    }

    getHeroSectionImageInTheBackground() {
        cy.get(".section-7.privacy-policy-section")
        .should("be.visible")
        .then(($element) => {
          const computedStyle = window.getComputedStyle($element[0]);
          const backgroundImage = computedStyle.getPropertyValue("background-image");
          expect(backgroundImage).not.to.equal("none");
        });
    }

    getHeroSectionText() {
        cy.get(".heading-9").should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)")
        .should("have.text", "Fertilize Ai’s Privacy Policy")

        cy.get(".text-block-13").should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)")
        .should("have.text","Our Privacy Policy describes how Fertilize AI handles your data when you interact with our platform.")
    }

    getPrivacyPolicySection() {
        cy.get(".privacy-policy").should("be.visible")
    }

    getPrivacyPolicySectionTableOfContents() {
        cy.get(".privacy-policy-tabs-head").should("be.visible")
    }

    getPrivacyPolicySectionTableOfContentsText() {
        cy.get(".privacy-policy-tabs-head h3").should("be.visible")
        .should("have.css", "color", "rgb(255, 255, 255)")
        .should("have.text", "Fertilize Ai's Privacy Policy")

        cy.get(".privacy-policy-tabs-head > div").should("be.visible")
        .should("have.css", "color", "rgba(255, 255, 255, 0.7)")
        .should("have.text", "Effected:- Agust 23, 2026")
    }

    getPrivacyPolicySectionTableOfContentsBodyText() {
        cy.fixture('privacyPolicyTabs').then((data) => {
            cy.get('.privacy-policy-tab .fw600').each(($el, index) => {
                cy.wrap($el).should('have.text', data.tabTexts[index])
            })
        })
    }

    getPrivacyPolicyContentSection() {
        cy.get(".privacy-policy-tabs-sections-panel").should("be.visible")
    }

    getPrivacyPolicySectionHeadingAndBodyContentText() {
        cy.fixture('privacyPolicySections').then((data) => {
            data.sections.forEach((section) => {
                cy.get(`#${section.id}`).scrollIntoView();
                cy.get(`#${section.id} h2`).should('have.css', 'color', 'rgb(51, 51, 51)').invoke('text').then((actualHeading) => {
                    expect(normalize(actualHeading)).to.equal(normalize(section.heading));
                });
                section.paragraphs.forEach((expectedText, i) => {
                    cy.get(`#${section.id} p`).eq(i).invoke('text').then((actualParagraph) => {
                        expect(normalize(actualParagraph)).to.include(normalize(expectedText));
                    });
                });
            });
        });
    }


    verifyPrivacyPolicySectionTableOfContentsWhenClickedNavigateToRightSection() {
        cy.get('.privacy-policy-tab').each(($el, index) => {
            const sectionId = `#tab${index + 1}`;
            cy.wrap($el).click(); 
            cy.wait(500);
            cy.get(sectionId).should('be.visible');
        });
    }
}

export default new PrivacyPolicyPage()
