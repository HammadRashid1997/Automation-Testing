// Class Home Page

class HomePage {

    // visit the page
    visit() {
        cy.visit("https://www.fertilize.ai/")
    }

    // Getters

    // Top Navbar
    getTopNavbar() {
        cy.get(".navbar-logo-left")
    }

    getTopNavbarLogo() {
        return cy.get(".navbar-brand.w-nav-brand.w--current").should("be.visible")
    }

    getTopNavbarFAQsButton() {
        return cy.get(".list-item-2").should("be.visible").contains('a', 'FAQ\'s')
    }

    getTopNavbarSignUpButton() {
        return cy.get(".mobile-margin-top-10").should("be.visible").contains('a', 'Sign up')
    }

    // Hero section
    getHeroSection() {
        return cy.get(".section-10.hero-sec")
    }

    getHeroSectionHeadingText() {
        return cy.get(".hero-text-panel h1").should("be.visible")
    }

    getHeroSectionParagraphText() {
        return cy.get(".hero-text-panel p").should("be.visible")
    }

    getHeroSectionButton() {
        return cy.get(".green-btn").should("be.visible").contains('a', 'Try Fertilize AI')
    }

    getHeroSectionImage() {
        return cy.get(".hero-img-panel").should("be.visible")
    }

    // Footer
    getFooterSection() {
        return cy.get(".section.footer-sec")
    }

    getFooterSectionButtons() {
        return cy.get(".w-layout-cell.cell-3").should("be.visible")
    }

    getFooterSectionPrivacyPolicyButton() {
        return cy.get(".link-7.footerlink").should("be.visible").contains('a', 'Privacy Policy');
    }

    getFooterSectionTermsAndConditionsButton() {
        return cy.get(".link-7.footerlink").should("be.visible").contains("a", "Terms of Services");
    }

    // Assertions
    checkHeroSectionHeadingText() {
        this.getHeroSectionHeadingText().invoke('text').then((text) => {
            const cleanText = text.replace(/\s+/g, ' ').trim();
            expect(cleanText).to.equal('Supercharge your plant nutrition');
        });
    }

    checkHeroSectionParagraphText() {
        this.getHeroSectionParagraphText().invoke('text').then((text) => {
            const cleanText = text.replace(/\s+/g, ' ').trim();
            expect(cleanText).to.equal('Chat today to leverage climate data, soil analyses & more to get more out of your crops.');
        });
    }

    // Actions

    // Top Navbar
    verifyTopNavbarLogo() {
        this.getTopNavbarLogo().click();
        cy.url().should('include', '/')
    }

    verifyTopNavbarFAQsButton() {
        this.getTopNavbarFAQsButton().click();
        cy.url().should('include', '/faqs')
    }

    verifyTopNavbarSignUpButton() {
        this.getTopNavbarSignUpButton().click();
        cy.url().should('include', '/sign-up')
    }

    // Hero Section
    verifyHeroSectionButton() {
        this.getHeroSectionButton().click();
        cy.url().should('include', '/sign-up');
    }

    // Footer Section
    verifyFooterSectionPrivacyPolicyButton() {
        this.getFooterSectionPrivacyPolicyButton().click();
        cy.url().should('include', '/privacy-policy');
    }

    verifyFooterSectionTermsAndConditionsButton() {
        this.getFooterSectionTermsAndConditionsButton().click({ force: true });
        cy.get(".modal-inner").should("be.visible")
    }
}

export default new HomePage();
