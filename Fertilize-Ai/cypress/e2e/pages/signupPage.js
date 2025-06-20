// Signup Page

class SignupPage {

    // visit the page
    visit() {
        cy.visit("https://www.fertilize.ai/sign-up")
    }

    // Getters

    // Side Section
    getSideSection() {
        cy.get(".column-2.hide-on-tab-mobile.w-col.w-col-3").should("be.visible")
    }

    getSideSectionLogo() {
        return cy.get(".navbar-brand.logolink.w-nav-brand img").should("be.visible")
    }

    getSideSectionTextAtTheBottom() {
        return cy.get(".text-block-12").should("be.visible")
    }

    // Signup form

    getSignupFormSection() {
        cy.get(".form-box").should("be.visible")
    }

    getSignupTextHeading() {
        cy.get(".w-form h1").should("be.visible").should("have.text", "Sign up")
    }

    // Signup form fields

    getFirstNameField() {
        return cy.get("#Name-2")
    }

    getLastNameField() {
        return cy.get("#Name")
    }

    getPhoneNumberField() {
        return cy.get("#Phone")
    }

    getEmailField() {
        return cy.get("#Email-2")
    }

    getPasswordField() {
        return cy.get("#Password")
    }

    getCheckBoxField() {
        return cy.get("#checkbox-3")
    }

    getSignupButton() {
        return cy.get(".button-4.registration.w-button").should("be.visible")
    }

    getSocialLoginButtons() {
        cy.get(".social-box").should("be.visible");
    }

    getSocialLoginGoogleButton() {
        cy.get(".social-login.w-inline-block")
        .should("be.visible")
        .should("have.css", "background-color", "rgba(0, 0, 0, 0)")
        .should("have.text", "GoogleFacebook")
        .should("have.css", "color", "rgb(0, 0, 238)");
    }

    getSocialLoginFacebookButton() {
        cy.get(".social-login.facebook.w-inline-block")
        .should("be.visible")
        .should("have.css", "background-color", "rgb(59, 89, 152)")
        .should("have.text", "Facebook")
        .should("have.css", "color", "rgb(0, 0, 238)");
    }

    // Assertions

    checkSideSectionTextAtTheBottomIsCorrect() {
        this.getSideSectionTextAtTheBottom().invoke('text').then((text) => {
            const cleanText = text.replace(/\s+/g, ' ').trim();
            expect(cleanText).to.equal('Enhancing crop yields through intelligent nutrient optimization, powered by fertilize AI!');
        });
    }

    // Actions
    verifySideSectionLogo() {
        this.getSideSectionLogo().click()
        cy.url().should("include", "/")
    }

    fillInTheSignUpForm({firstName, lastName, phone, email, password}) {
        this.getFirstNameField().type(firstName);
        this.getLastNameField().type(lastName);
        this.getPhoneNumberField().type(phone);
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getCheckBoxField().check({ force: true });
    }

    verifySignupButton() {
        this.getSignupButton().click()
    }

    verifySuccessMessage() {
        cy.get(".success-message.w-form-done", {timeout: 10000}).should("be.visible").should("contain.text", "Thank you");
    }
}

export default new SignupPage();
